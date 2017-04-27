namespace Notify.Solution.Finance.Tenpay.Param
{
    /// <summary>
    /// The pay business param.
    /// </summary>
    public class PayBusinessParam
    {
        /// <summary>
        /// 支付总金额
        /// </summary>
        public decimal TotalFee { get; set; }

        /// <summary>
        /// 客户端IP
        /// </summary>
        public string SpbillCreateIp { get; set; }

        /// <summary>
        /// 同步返回地址
        /// </summary>
        public string ReturnUrl { get; set; }

        /// <summary>
        /// 异步返回地址
        /// </summary>
        public string NotifyUrl { get; set; }

        /// <summary>
        /// 支付订单号（内部订单号）
        /// </summary>
        public string OutTradeNo { get; set; }

        /// <summary>
        /// 附加数据
        /// </summary>
        public string Attach { get; set; }

        /// <summary>
        /// 商品标题
        /// </summary>
        public string Subject { get; set; }

        /// <summary>
        /// 商品描述
        /// </summary>
        public string Body { get; set; }

        /// <summary>
        /// 银行类型（财付通默认为0）
        /// </summary>
        public string BankType { get; set; }
    }
}
