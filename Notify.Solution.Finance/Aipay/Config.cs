namespace Notify.Solution.Finance.Aipay
{
    public class Config
    {
        /// <summary>
        /// 收款账号
        /// </summary>
        public const string Account = "SCLXGL01@163.COM";

        /// <summary>
        /// 收款账号Id
        /// </summary>
        public const string AccountId = "2088111473711680";

        /// <summary>
        /// 密钥
        /// </summary>
        public const string AccountKey = "xr4klxtz35t6vf129uewnjdkj8fhd7cw";

        /// <summary>
        /// 合作者身份ID
        /// </summary>
        public const string Partner = "2088111473711680";

        /// <summary>
        /// 编码方式
        /// </summary>
        public const string Charset = "utf-8";

        /// <summary>
        /// 签名类型
        /// </summary>
        public const string SignType = "MD5";

        /// <summary>
        /// 请求出错时的通知页面路径
        /// </summary>
        public const string ErrorNotifyUrl = "http://www.test.com";

        /// <summary>
        /// 页面跳转同步通知页面路径
        /// </summary>               
        public const string ReturnUrl = "http://www.test.com";

        /// <summary>
        /// 服务器异步通知页面路径
        /// </summary>
        public const string NotifyUrl = "http://www.test.com";

        /// <summary>
        /// 支付宝网关地址（新）
        /// </summary>
        public const string Gateway = "https://mapi.alipay.com/gateway.do?";
    }
}
