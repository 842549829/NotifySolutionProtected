using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Notify.Solution.Finance.Aipay
{
    /// <summary>
    /// 支付宝基本参数
    /// </summary>
    public class BaseParameter
    {
        /// <summary>
        /// 接口名称
        /// 接口名称
        /// String
        /// 不可空
        /// </summary>
        public string service { get; set; }

        /// <summary>
        /// 合作者身份ID
        /// 签约的支付宝账号对应的支付宝唯一用户号。以2088开头的16位纯数字组成。
        /// String(16)
        /// 不可空
        /// </summary>
        public string partner { get; set; }

        /// <summary>
        /// 参数编码字符集
        /// 商户网站使用的编码格式，如utf-8、gbk、gb2312等。
        /// String
        /// 不可空
        /// </summary>
        public string _input_charset { get; set; }

        /// <summary>
        /// 签名方式
        /// DSA、RSA、MD5三个值可选，必须大写。
        /// String
        /// 不可空
        /// </summary>
        public string sign_type { get; set; }

        /// <summary>
        /// 签名
        /// 请参见“9 签名机制”。
        /// String
        /// 不可空
        /// </summary>
        public string sign { get; set; }

        /// <summary>
        /// 服务器异步通知页面路径
        /// 支付宝服务器主动通知商户网站里指定的页面http路径。
        /// String(190)
        /// 可空
        /// </summary>
        public string notify_url { get; set; }

        /// <summary>
        /// 页面跳转同步通知页面路径
        /// 支付宝处理完请求后，当前页面自动跳转到商户网站里指定页面的http路径。
        /// String(200)
        /// 可空
        /// </summary>
        public string return_url { get; set; }

        /// <summary>
        /// 请求出错时的通知页面路径
        /// 当商户通过该接口发起请求时，如果出现提示报错，支付宝会根据“11.7 item_orders_info出错时的通知错误码”和“11.8 请求出错时的通知错误码”通过异步的方式发送通知给商户。该功能需要联系支付宝开通。
        /// String(200)
        /// 可空
        /// </summary>
        public string error_notify_url { get; set; }
    }
}
