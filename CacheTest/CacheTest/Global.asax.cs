using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.SessionState;

namespace CacheTest
{
    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {
            AccessProvider provider = new AccessProvider();
            string fielPath=Server.MapPath("~/Xml/Student.xml");
            List<Student> list = provider.GetStudentList(fielPath);
            System.Web.Caching.Cache cache = HttpRuntime.Cache;
            cache.Insert("Items1", list, new System.Web.Caching.CacheDependency(fielPath));
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