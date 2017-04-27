using System.Net;
using System.Net.Http;
using System.Web.Http.Filters;

using Notify.Solution.WebApi.Exception;
using Notify.Solution.WebApi.Models;

namespace Notify.Solution.WebApi.Filter
{
    using System.Diagnostics;

    /// <summary>
    /// The not impl exception filter attribute.
    /// </summary>
    public class ApiExceptionFilter : System.Web.Http.Filters.ExceptionFilterAttribute  
    {
        /// <summary>
        /// The on exception.
        /// </summary>
        /// <param name="context">
        /// The context.
        /// </param>
        public override void OnException(HttpActionExecutedContext context)
        {
            // 业务异常
            var businessException = context.Exception as BusinessException;
            if (businessException != null)
            {
                //context.Response = new HttpResponseMessage { StatusCode = HttpStatusCode.ExpectationFailed };
                //BusinessException exception = businessException;
                //context.Response.Headers.Add("BusinessExceptionCode", exception.Message);
                //context.Response.Headers.Add("BusinessExceptionMessage", exception.Message);
                //context.Response = new HttpResponseMessage { StatusCode = HttpStatusCode.InternalServerError };

                //增加二行 Trace 代码



                context.Request.CreateResponse(HttpStatusCode.Accepted, new Result { Message = businessException.Message });
            }
            else
            {
                //context.Response = new HttpResponseMessage { StatusCode = HttpStatusCode.InternalServerError };
            }
            //context.Response = new HttpResponseMessage(HttpStatusCode.NotImplemented); 
           //context.Request.CreateResponse(HttpStatusCode.Accepted, new Result { Message = context.Exception.Message });
        }
    }
}