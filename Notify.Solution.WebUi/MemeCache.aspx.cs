using System;
using System.Data;
using System.Configuration;
using System.Collections;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;

public partial class MemeCache : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (!IsPostBack)
        {
            int timer = DateTime.Now.Millisecond;
            this.gvInitialize();
            Response.Write(DateTime.Now.Millisecond - timer);
        }
    }

    #region
    protected void btnRemove_Click(object sender, EventArgs e)
    {
        if (Cache_Info.RemoveCache("Info_key"))
        {
            Response.Write("清除成功！");
        }
        else 
        {
            Response.Write("清除失败！");
        }
        this.gvInitialize();
    }
    #endregion

    #region
    protected void btnInitialize_Click(object sender, EventArgs e)
    {
        this.gvInitialize();
    }
    #endregion

    #region
    private void gvInitialize() 
    {
        
        this.GridView1.DataSource = Cache_Info.GetInfo();
        this.GridView1.DataBind();
        
    }
    #endregion
}
