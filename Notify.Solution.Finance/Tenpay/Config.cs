using System;
namespace Notify.Solution.Finance.Tenpay
{
    public class Config
    {
        /// <summary>
        /// 密钥
        /// </summary>
        public const string AccountKey = "a4452a154292ba3db5978f5f6d64b55c";

        /// <summary>
        /// 合作者身份ID
        /// </summary>
        public const string Partner = "1218525301";

        /// <summary>
        /// 编码方式
        /// </summary>
        public const string Charset = "utf-8";

        /// <summary>
        /// 页面跳转同步通知页面路径
        /// </summary>               
        public const string ReturnUrl = "http://www.test.com";

        /// <summary>
        /// 服务器异步通知页面路径
        /// </summary>
        public const string NotifyUrl = "http://www.test.com";

        /// <summary>
        /// 签名类型
        /// </summary>
        public const string SignType = "MD5";

        /// <summary>
        /// 证书地址
        /// </summary>
        public string PfxPath
        {
            get
            {
                return string.Format("{0}\\Tenpay\\TenpayPFX\\{1}.pfx", AppDomain.CurrentDomain.BaseDirectory, Partner);
            }
        }

        /// <summary>
        /// 财付通网关地址
        /// </summary>
        public const string Gateway = "https://gw.tenpay.com/gateway/pay.htm";
    }
}
