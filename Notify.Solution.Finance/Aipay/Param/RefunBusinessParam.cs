namespace Notify.Solution.Finance.Aipay
{
    /// <summary>
    /// 即时到账批量退款有密接口
    /// </summary>
    public class RefunBusinessParam : BaseParameter
    {
        public string batch_no { get; set; }

        public string refund_date { get; set; }

        public string batch_num { get; set; }

        public string detail_data { get; set; }
    }
}
