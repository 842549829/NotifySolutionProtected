using System;
using Notify.Solution.Finance.Aipay;

namespace Notify.Solution.CallBackWeb
{
    /// <summary>
    /// The pay.
    /// </summary>
    public partial class Pay : BasePage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            var p = new PayBusinessParam
                        {
                            total_fee = 5121,
                            subject = "机票订单：1409110947470220101001668",
                            out_trade_no = "W1409110947529318180815"
                        };
            var response = Finance.Aipay.ProcessRequest.GetPayAddress(p);
            this.Response.Write(response);
        }
    }
}
