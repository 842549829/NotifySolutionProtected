using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Xml;
using Notify.Solution.Code.Extension;
using Notify.Solution.Code.Common.Enum;
using Notify.Solution.Code.Common.Model;
using Notify.Solution.Code.Utility;

namespace Notify.Solution.Finance.Aipay
{
    public class ProcessRequest
    {
        /// <summary>
        /// 获取支付地址
        /// </summary>
        /// <param name="param">参数</param>
        /// <returns>地址</returns>
        public static string GetPayAddress(PayBusinessParam param)
        {
            SortedDictionary<string, string> paraTemp = new SortedDictionary<string, string>();
            if (string.IsNullOrEmpty(param.payment_type))
            {
                paraTemp.Add("payment_type", "1");
            }

            paraTemp.Add("out_trade_no", param.out_trade_no);
            paraTemp.Add("subject", param.subject);
            paraTemp.Add("total_fee", param.total_fee.ToString("0.00"));
            paraTemp.Add("seller_email", Config.Account);

            ProcessBaseParam(param, paraTemp);
            paraTemp.Add("anti_phishing_key", QueryTimestamp(paraTemp));
            AddSign(paraTemp);

            var result = CreatePayAddress(paraTemp);
            return result;
        }

        /// <summary>
        /// 退款处理
        /// </summary>
        /// <param name="param">参数</param>
        /// <returns>退款结果</returns>
        public static string Refund(RefunBusinessParam param)
        {
            SortedDictionary<string, string> paraTemp = new SortedDictionary<string, string>();
            paraTemp.Add("service", "refund_fastpay_by_platform_nopwd");
            paraTemp.Add("batch_no", param.batch_no);
            paraTemp.Add("refund_date", param.refund_date);
            paraTemp.Add("batch_num", param.batch_num);
            paraTemp.Add("detail_data", param.detail_data);

            ProcessBaseParam(param, paraTemp);
            AddSign(paraTemp);

            var request = new Request(Config.Gateway) { HttpMethod = HttpMethod.Post, Parameters = paraTemp };
            var response = HttpRequestService.GetHttpRequest(request);
            var reslt = ProcessXmlData(response);
            return reslt;
        }

        /// <summary>
        /// 处理基本参数
        /// </summary>
        /// <param name="param">基本参数斯</param>
        /// <param name="paraTemp">构造器</param>
        private static void ProcessBaseParam(BaseParameter param, IDictionary<string, string> paraTemp)
        {
            if (string.IsNullOrEmpty(param.service))
            {
                paraTemp.Add("service", "create_direct_pay_by_user");
            }

            if (string.IsNullOrEmpty(param.partner))
            {
                paraTemp.Add("partner", Config.Partner);
            }

            if (string.IsNullOrEmpty(param._input_charset))
            {
                paraTemp.Add("_input_charset", Config.Charset);
            }

            if (string.IsNullOrEmpty(param.sign_type))
            {
                paraTemp.Add("sign_type", Config.SignType);
            }

            if (!string.IsNullOrEmpty(param.notify_url))
            {
                paraTemp.Add("notify_url", param.notify_url);
            }

            if (!string.IsNullOrEmpty(param.return_url))
            {
                paraTemp.Add("return_url", param.return_url);
            }

            if (!string.IsNullOrEmpty(param.error_notify_url))
            {
                paraTemp.Add("error_notify_url", param.error_notify_url);
            }
        }

        /// <summary>
        ///  创建支付地址
        /// </summary>
        /// <param name="parameters">参数</param>
        /// <returns>支付地址</returns>
        private static string CreatePayAddress(IDictionary<string, string> parameters)
        {
            var charset = parameters["_input_charset"];
            StringBuilder formHtml = new StringBuilder();
            formHtml.AppendFormat("<form id='alipaysubmit' name='alipaysubmit' action='{0}_input_charset={1}' method='POST'>", Config.Gateway, charset);
            foreach (var temp in parameters)
            {
                formHtml.AppendFormat("<input type='hidden' name='{0}' value='{1}'/>", temp.Key, temp.Value);
            }

            formHtml.Append("<input type='submit' value='OK' style='display:none;'></form>");
            formHtml.Append("<script>document.forms['alipaysubmit'].submit();</script>");
            return formHtml.ToString();
        }

        /// <summary>
        /// 添加签名参数
        /// </summary>
        /// <param name="parameters">参数</param>
        private static void AddSign(IDictionary<string, string> parameters)
        {
            var charset = parameters["_input_charset"];
            var content = parameters.Where(w => w.Key != "sign_type" && w.Key != "sign").Join("&", p => p.Key + "=" + p.Value);
            string sign = Signature.Md5(content, Config.AccountKey, charset);
            parameters.Add("sign", sign);
        }

        /// <summary>
        /// 用于防钓鱼，调用接口query_timestamp来获取时间戳的处理函数
        /// 注意：远程解析XML出错，与IIS服务器配置有关
        /// </summary>
        /// <param name="parameters">参数</param>
        /// <returns>时间戳字符串</returns>
        private static string QueryTimestamp(IDictionary<string, string> parameters)
        {
            string partner = parameters["partner"];
            string charset = parameters["_input_charset"];
            string url = Config.Gateway + "service=query_timestamp&partner=" + partner + "&_input_charset=" + charset;
            XmlTextReader reader = new XmlTextReader(url);
            XmlDocument xmlDoc = new XmlDocument();
            xmlDoc.Load(reader);
            var selectSingleNode = xmlDoc.SelectSingleNode("/alipay/response/timestamp/encrypt_key");
            if (selectSingleNode == null)
            {
                return string.Empty;
            }

            string encrypt_key = selectSingleNode.InnerText;
            return encrypt_key;
        }

        /// <summary>
        /// 处理请求第三方数据
        /// </summary>
        /// <param name="response">返回的XML数据</param>
        /// <returns>解析结果</returns>
        private static string ProcessXmlData(string response)
        {
            XmlDocument xmlDoc = new XmlDocument();
            try
            {
                xmlDoc.LoadXml(response);
                var selectSingleNode = xmlDoc.SelectSingleNode("/alipay/is_success");
                if (selectSingleNode != null)
                {
                    string strXmlResponse = selectSingleNode.InnerText;
                    if (strXmlResponse == "T")
                    {
                        return "success";
                    }
                }

                var singleNode = xmlDoc.SelectSingleNode("/alipay/error");
                if (singleNode != null)
                {
                    return singleNode.InnerText;
                }
            }
            catch (Exception exp)
            {
                return exp.Message;
            }

            return "fail";
        }
    }
}
