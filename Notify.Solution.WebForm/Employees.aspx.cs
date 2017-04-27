using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Notify.Solution.WebForm
{
    public partial class Employees : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            var name = this.RouteData.Values["name"];
            var id = this.RouteData.Values["id"];

            this.Response.Write(name + " " + id);
        }
    }
}