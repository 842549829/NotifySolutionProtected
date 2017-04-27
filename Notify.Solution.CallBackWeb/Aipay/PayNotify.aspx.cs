using System;
using Notify.Solution.Finance.Aipay;

namespace Notify.Solution.CallBackWeb.Aipay
{
    /// <summary>
    /// The notify.
    /// </summary>
    public partial class PayNotify : BasePage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            var param = this.GetRequestPost();
            if (ProcessResponse.VerifySign(param))
            {
                // 处理业务
            }
            else
            {
               // 验签失败 
            }
        }
    }
}