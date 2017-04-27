using System.Collections.Generic;

namespace Notify.Solution.CallBackWeb
{
    public class BasePage : System.Web.UI.Page
    {
        /// <summary>
        /// 获取Post参数
        /// </summary>
        /// <returns>request回来的信息组成的数组</returns>
        protected SortedDictionary<string, string> GetRequestPost()
        {
            var sortedDictionary = new SortedDictionary<string, string>();
            var requestItem = this.Request.Form.AllKeys;
            foreach (string t in requestItem)
            {
                sortedDictionary.Add(t, this.Request.Form[t]);
            }

            return sortedDictionary;
        }
    }
}