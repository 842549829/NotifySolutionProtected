using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http.Controllers;

namespace Notify.Solution.WebApi.Filter
{
    using System.Net;

    using Notify.Solution.WebApi.Exception;

    public class ServerAPIControllerActionInvoker : ApiControllerActionInvoker
    {
        public override Task<HttpResponseMessage> InvokeActionAsync(HttpActionContext actionContext, CancellationToken cancellationToken)
        {
            //对actionContext做一些预处理
            //……
            var result = base.InvokeActionAsync(actionContext, cancellationToken);
            if (result.Exception != null && result.Exception.GetBaseException() != null)
            {
                var baseException = result.Exception.GetBaseException();

                if (baseException is BusinessException)
                {
                    return Task.Run<HttpResponseMessage>(() =>
                    {
                        var response = new HttpResponseMessage(HttpStatusCode.ExpectationFailed);
                        BusinessException exception = (BusinessException)baseException;
                        response.Headers.Add("BusinessExceptionCode", exception.Message);
                        response.Headers.Add("BusinessExceptionMessage", exception.Message);
                        return response;
                    });
                }
                else
                {
                    return Task.Run<HttpResponseMessage>(() => new HttpResponseMessage(HttpStatusCode.InternalServerError));
                }
            }
            return result;
        }
    }
}