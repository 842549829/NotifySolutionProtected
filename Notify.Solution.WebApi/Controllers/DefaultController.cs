using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Notify.Solution.WebApi.Controllers
{
    public class DefaultController : ApiController
    {
        [AcceptVerbs("GET", "POST")]
        public IEnumerable<string> Test()
        {
            return new string[] { "value1", "value2" };
        }

        public void Post([FromBody]string value)
        {
        }

        // PUT api/default/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/default/5
        public void Delete(int id)
        {
        }
    }
}
