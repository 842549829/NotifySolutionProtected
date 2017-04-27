using System;
using System.Web.Http;

using Notify.Solution.WebApi.Models;

namespace Notify.Solution.WebApi.Controllers
{
    /// <summary>
    /// The xml controller.
    /// </summary>
    public class XmlController : ApiController
    {
        /// <summary>
        /// The xml.
        /// </summary>
        /// <returns>
        /// The <see cref="XmlModel"/>.
        /// </returns>
        [HttpGet]
        public XmlModel Xml()
        {
            return new XmlModel { DateTime = DateTime.Now, Message = "sssdsds" };
        }
    }
}
