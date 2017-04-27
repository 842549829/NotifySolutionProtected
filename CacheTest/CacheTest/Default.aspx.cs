using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CacheTest
{
    public partial class Default : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            List<Student> list = Cache["Items1"] as List<Student>;
            if (list != null && list.Count>0)
            {
                list.ForEach(item => { Response.Write(item.Name + "&nbsp;&nbsp;" + item.Age + "&nbsp;&nbsp;"+item.Sex+"<br/>"); });
            }
            else
            {
                AccessProvider provider = new AccessProvider();
                string fielPath = Server.MapPath("~/Xml/Student.xml");
                list = provider.GetStudentList(fielPath);
                Cache.Insert("Items1", list, new System.Web.Caching.CacheDependency(fielPath));
            }
        }
    }
}