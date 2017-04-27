using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Routing;
using System.Web.Security;
using System.Web.SessionState;
using System.Web.Mvc;

namespace Notify.Solution.WebForm
{
    

    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {
            var defaults = new RouteValueDictionary { { "name", "*" }, { "id", "*" } };
            RouteTable.Routes.MapPageRoute("", "Employees/{name}/{id}", "~/Employees.aspx", true, defaults);

            RouteBase r;
            RouteData d;
            Route r1;

            HttpContextBase h = new HttpContextWrapper(HttpContext.Current);
            var xxr = h.Request.AppRelativeCurrentExecutionFilePath.Substring(2);
            var ss = h.Request.PathInfo;

        }

        protected void Session_Start(object sender, EventArgs e)
        {

        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {

        }

        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {

        }

        protected void Application_Error(object sender, EventArgs e)
        {

        }

        protected void Session_End(object sender, EventArgs e)
        {

        }

        protected void Application_End(object sender, EventArgs e)
        {

        }
    }
}