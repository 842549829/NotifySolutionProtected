using System.Collections.Generic;
using System.Linq;
using System.Text;

using Notify.Solution.Code.Extension;
using Notify.Solution.Finance.Tenpay.Param;

namespace Notify.Solution.Finance.Tenpay
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
            paraTemp.Add("sign_type", Config.SignType);
            paraTemp.Add("service_version", "1.0");
            paraTemp.Add("input_charset", Config.Charset);
            paraTemp.Add("sign_key_index", "1");

            paraTemp.Add("partner", Config.Partner);
            paraTemp.Add("total_fee", (param.TotalFee * 100).ToString("0.##"));
            paraTemp.Add("spbill_create_ip", param.SpbillCreateIp);
            paraTemp.Add("out_trade_no", param.OutTradeNo);
            paraTemp.Add("return_url", param.ReturnUrl);
            paraTemp.Add("notify_url", param.NotifyUrl);
            paraTemp.Add("attach", param.Attach);
            paraTemp.Add("subject", param.Subject);
            paraTemp.Add("body", param.Body);
            paraTemp.Add("bank_type", param.BankType);

            AddSign(paraTemp);
            var result = CreatePayAddress(paraTemp);
            return result;
        }

        /// <summary>
        /// 添加签名参数
        /// </summary>
        /// <param name="parameters">参数</param>
        private static void AddSign(IDictionary<string, string> parameters)
        {
            var charset = parameters["input_charset"];
            var content = parameters.Where(w => w.Key != "sign" && !string.IsNullOrEmpty(w.Value)).Join("&", p => p.Key + "=" + p.Value);
            content = content + "&key=" + Config.AccountKey;
            string sign = Signature.Md5(content, charset);
            parameters.Add("sign", sign);
        }

        /// <summary>
        ///  创建支付地址
        /// </summary>
        /// <param name="parameters">参数</param>
        /// <returns>支付地址</returns>
        private static string CreatePayAddress(IEnumerable<KeyValuePair<string, string>> parameters)
        {
            StringBuilder formHtml = new StringBuilder();
            formHtml.AppendFormat("<form id='tenpaysubmit' name='tenpaysubmit' action='{0}' method='POST'>", Config.Gateway);
            foreach (var temp in parameters)
            {
                formHtml.AppendFormat("<input type='hidden' name='{0}' value='{1}'/>", temp.Key, temp.Value);
            }

            formHtml.Append("<input type='submit' value='OK' style='display:none;'></form>");
            formHtml.Append("<script>document.forms['tenpaysubmit'].submit();</script>");
            return formHtml.ToString();
        }
    }
}
