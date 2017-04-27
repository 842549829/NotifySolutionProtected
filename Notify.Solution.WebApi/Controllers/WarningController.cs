using System.Web.Mvc;

namespace Notify.Solution.WebApi.Controllers
{
    /// <summary>
    /// 错误处理
    /// </summary>
    public class WarningController : Controller
    {
        /// <summary>
        /// 错误提示
        /// </summary>
        /// <param name="message">message</param>
        /// <returns>ActionResult</returns>
        public ActionResult WarningPrompt(string message)
        {
            return this.View(message);
        }
    }
}