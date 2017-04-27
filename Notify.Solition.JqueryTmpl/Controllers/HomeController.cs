using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Notify.Solition.JqueryTmpl.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /User/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult SampleData()
        {
            var json = new JsonResult();
            json.Data = new[] { new { ID = "remote1", Name = "abcd" }, new { ID = "remote2", Name = "efg" } };
            json.JsonRequestBehavior = JsonRequestBehavior.AllowGet;
            return json;
        }
    }
}
