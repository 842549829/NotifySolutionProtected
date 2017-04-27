using System.Web.Mvc;

namespace Notify.Solution.WebMvc.Areas.Block
{
    using Notify.Solution.Code.Code;

    public class BlockAreaRegistration : AreaRegistration
    {
        public override string AreaName
        {
            get
            {
                return "Block";
            }
        }

        public override void RegisterArea(AreaRegistrationContext context)
        {
            context.Routes.Add(new DomainRoute(
               "us.block.com",     // Domain with parameters 需要配置host文件 
               "{controller}/{action}/{id}",    // URL with parameters 
               new
               {
                   area = "Block",
                   controller = "Default",
                   action = "Index",
                   id = UrlParameter.Optional,
                   namespaces = new[] { "Notify.Solution.WebMvc.Areas.Block.Controllers" }
               }));
        }
    }
}