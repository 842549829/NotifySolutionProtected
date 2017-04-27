using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Web;
using System.Web.Mvc;

namespace Notify.Solution.WebMvc.Areas.Block.Controllers
{
    public class DefaultController : Controller
    {
        public ActionResult Index()
        {
          

            var data = new List<string> { "aa" };
            return View(data);
        }
    }
}
