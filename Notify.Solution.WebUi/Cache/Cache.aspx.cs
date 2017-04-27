using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Notify.Solution.WebUi.Cache
{
    public partial class Cache : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            List<Student> list = Cache["Items1"] as List<Student>;
            if (list != null && list.Count > 0)
            {
                list.ForEach(item => this.Response.Write(item.Name + "  " + item.Age + "  " + item.Sex + "<br/>"));
            }
            else
            {
                AccessProvider provider = new AccessProvider();
                string fielPath = Server.MapPath("~/Cache/Student.xml");
                list = provider.GetStudentList(fielPath);
                Cache.Insert("Items1", list, new System.Web.Caching.CacheDependency(fielPath));

                List<Student> list1 = Cache["Items1"] as List<Student>;
                if (list1 != null)
                {
                    list1.ForEach(item => this.Response.Write(item.Name + "  " + item.Age + "  " + item.Sex + "<br/>"));
                }
            }
        }
    }
}