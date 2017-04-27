using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

using Notify.Solution.WebApi.Exception;
using Notify.Solution.WebApi.Models;

namespace Notify.Solution.WebApi.Filter
{
    using System.Linq;
    using Notify.Solution.WebApi.Common;

    /// <summary>
    /// 签名过滤器
    /// </summary>
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method, Inherited = true, AllowMultiple = true)]
    public class WbeApiFilterAttribute : ActionFilterAttribute
    {
        /// <summary>
        /// The on action executing.
        /// </summary>
        /// <param name="actionContext">
        /// The action context.
        /// </param>
        public override void OnActionExecuting(HttpActionContext actionContext)
        {
            NameValueCollection nvc = null;
            if (actionContext.Request.Method == HttpMethod.Get)
            {
                nvc = HttpContext.Current.Request.QueryString;
            }
            else if (actionContext.Request.Method == HttpMethod.Post)
            {
                nvc = HttpContext.Current.Request.Form;
            }
            else
            {
                ShowMessage(actionContext, "HttpMethod只限:{GET,POST}");
            }

            string message;
            if (!Sign(nvc, out message))
            {
                ShowMessage(actionContext, message);
            }
        }

        /// <summary>
        /// The on action executed.
        /// </summary>
        /// <param name="actionExecutedContext">
        /// The action executed context.
        /// </param>
        public override void OnActionExecuted(HttpActionExecutedContext actionExecutedContext)
        {
            var exception = actionExecutedContext.Exception;

            // 若发生例外则不在这边处理
            if (exception == null)
            {
                return;
            }

            //// 取得由 API 返回的状态代码
            //result.Status = actionExecutedContext.ActionContext.Response.StatusCode;
            //// 取得由 API 返回的资料
            //result.Data = actionExecutedContext.ActionContext.Response.Content.ReadAsAsync<object>().Result;
            //// 重新封装回传格式
            //actionExecutedContext.Response = actionExecutedContext.Request.CreateResponse(result.Status, result);

            var businessException = exception as BusinessException;
            string errorMessage = businessException == null ? "错误" : actionExecutedContext.Exception.Message;
            var result = new Result { IsSucceed = false, Message = errorMessage };
            actionExecutedContext.Response = actionExecutedContext.Request.CreateResponse(HttpStatusCode.Accepted, result);
        }

        /// <summary>
        /// The show message.
        /// </summary>
        /// <param name="actionContext">
        /// The action context.
        /// </param>
        /// <param name="message">
        /// The message.
        /// </param>
        private static void ShowMessage(HttpActionContext actionContext, string message)
        {
            //// 参数列表中不存在userid，写入日志
            ////var response = new HttpResponseMessage
            ////                   {
            ////                       Content = new StringContent(message),
            ////                       StatusCode = HttpStatusCode.Conflict
            ////                   };
            ////actionContext.Response = response;

            actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.Accepted, new Result { Message = message });
        }

        /// <summary>
        /// The sign.
        /// </summary>
        /// <param name="nvc">
        /// The nvc.
        /// </param>
        /// <param name="message">
        /// The message.
        /// </param>
        /// <returns>
        /// The <see cref="bool"/>.
        /// </returns>
        private static bool Sign(NameValueCollection nvc, out string message)
        {
            Signature signature = new Signature(nvc);
            var result = signature.Execute();
            message = result.Message;
            return result.IsSucceed;
        }

        /// <summary>
        /// The get base parameters.
        /// </summary>
        /// <returns>BaseParameters</returns>
        private static Dictionary<string, string> GetBaseParameters()
        {
            return new Dictionary<string, string>
                       {
                           { "partner", "201474554455" }, 
                           { "sign", "555555s" },
                           { "timestamp", "timestamp" },
                           { "signtype", "MD5" }
                       };
        }
    }
}