using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using System.Web;
using System;
using System.Net;
using System.Net.Sockets;

namespace Notify.Solution.WebMvc.Controllers
{
    using System.Collections.Generic;
    using System.Linq;
    using System.Reflection;
    using System.Runtime.InteropServices;
    using System.Web.Script.Serialization;
    using System.Net.Http;
    using Notify.Solution.WebMvc.Models;

    /// <summary>
    /// The default controller.
    /// </summary>
    public class DefaultController : Controller
    {
        /// <summary>
        /// 以异步的方式执行
        /// </summary>
        protected override bool DisableAsyncSupport
        {
            get
            {
                return false;
            }
        }

        public class ur
        {
            public string url { get; set; }
        }

        /// <summary>
        /// The home.
        /// </summary>
        /// <returns>
        /// The <see cref="ActionResult"/>.
        /// </returns>
        [Test]
        [AllowAnonymous]
        public ActionResult Home()
        {
            //var str = this.Json(date);
            //var strr = str.ToString();
            //var curr = System.Web.HttpContext.Current;
            return View();
        }

        public ActionResult Home1()
        {
            Contact m = new Contact();
            return View(m);
        }

        [HttpGet]
        public JsonResult Test(DateTime? beginDateTime)
        {
            return new JsonResult() { Data = new { rel = beginDateTime }, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
            return Json(new { rel = beginDateTime });
        }

        protected override IAsyncResult BeginExecute(RequestContext requestContext, AsyncCallback callback, object state)
        {
            return base.BeginExecute(requestContext, callback, state);
        }

        protected override void Execute(RequestContext requestContext)
        {
            base.Execute(requestContext);
        }

        protected override void ExecuteCore()
        {
            base.ExecuteCore();
        }

        protected override void EndExecute(IAsyncResult asyncResult)
        {
            base.EndExecute(asyncResult);
        }

        protected override IAsyncResult BeginExecuteCore(AsyncCallback callback, object state)
        {
            return base.BeginExecuteCore(callback, state);
        }

        protected override void EndExecuteCore(IAsyncResult asyncResult)
        {
            base.EndExecuteCore(asyncResult);
        }

        protected override void OnAuthorization(AuthorizationContext filterContext)
        {
            base.OnAuthorization(filterContext);
        }
    }

    public class Test : AuthorizeAttribute  
    {
        public void Tt()
        {
            MvcHandler mvcHandler = new MvcHandler(null);
            HttpContextBase http = new HttpContextWrapper(new HttpContext(null));
        }

        protected override bool AuthorizeCore(System.Web.HttpContextBase httpContext)
        {
            return base.AuthorizeCore(httpContext);
        }
    }
}
