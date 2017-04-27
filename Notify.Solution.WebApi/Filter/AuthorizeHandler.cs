using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Notify.Solution.WebApi.Filter
{
    using System.Net;
    using System.Net.Http;
    using System.Threading;
    using System.Threading.Tasks;

    public class AuthorizeHandler : DelegatingHandler
    {

        static AuthorizeHandler()
        { }

        protected override Task<HttpResponseMessage> SendAsync(HttpRequestMessage request, CancellationToken cancellationToken)
        {
            if (request.Method == HttpMethod.Post)
            {
                var querystring = HttpUtility.ParseQueryString(request.RequestUri.Query);
                var formdata = request.Content.ReadAsFormDataAsync().Result;
                if (querystring.AllKeys.Intersect(formdata.AllKeys).Count() > 0)
                {
                    return SendError("请求参数有重复.", HttpStatusCode.BadRequest);
                }
            }
            //请求方身份验证
          
                return SendError("sssss", HttpStatusCode.Unauthorized);
            request.Properties.Add("shumi_userid", "ss");
            return base.SendAsync(request, cancellationToken);
        }

        private Task<HttpResponseMessage> SendError(string error, HttpStatusCode code)
        {
            var response = new HttpResponseMessage();
            response.Content = new StringContent(error);
            response.StatusCode = code;

            return Task<HttpResponseMessage>.Factory.StartNew(() => response);
        }
    }
}