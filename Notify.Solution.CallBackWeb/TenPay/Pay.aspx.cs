using System;
using Notify.Solution.Finance.Tenpay.Param;

namespace Notify.Solution.CallBackWeb.TenPay
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
                         BankType = "0",
                         Body = "机票订单：1409111453141080101001960",
                         NotifyUrl = "http://localhost:3525/Ticket/Tenpay/PayNotify.aspx",
                         ReturnUrl = "http://localhost:3525/Ticket/Success.aspx",
                         OutTradeNo = "J1409121429015229373653",
                         SpbillCreateIp = "127.0.0.1",
                         Subject = "机票订单：1409111453141080101001960",
                         TotalFee = 163M,
                     };

            var response = Notify.Solution.Finance.Tenpay.ProcessRequest.GetPayAddress(p);
            this.Response.Write(response);
        }
    }
}