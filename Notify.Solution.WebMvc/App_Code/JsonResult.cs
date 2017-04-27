using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Notify.Solution.WebMvc.App_Code
{
    using Newtonsoft.Json;
    using Newtonsoft.Json.Converters;
    using Notify.Solution.Code.Extension;
    using System.Text;
    using System.Web.Mvc;

    public class JsonResult : ActionResult
    {
        public JsonResult()
        {
            this.ContentEncoding = Encoding.UTF8;
            this.ContentType = "application/json";
        }

        public override void ExecuteResult(ControllerContext context)
        {
            if (context == null)
            {
                throw new ArgumentNullException("context");
            }

            HttpResponseBase response = context.HttpContext.Response;
            if (!string.IsNullOrEmpty(this.ContentType))
            {
                response.ContentType = this.ContentType;
            }
            if (this.ContentEncoding != null)
            {
                response.ContentEncoding = this.ContentEncoding;
            }
            if (this.Data != null)
            {
                response.Write(NewtonsoftSerialize(this.Data));
                response.End();
            }
        }

        public Encoding ContentEncoding { get; set; }

        public string ContentType { get; set; }

        public object Data { get; set; }

        private static string NewtonsoftSerialize(object value)
        {
            try
            {
                IsoDateTimeConverter timeFormat = new IsoDateTimeConverter { DateTimeFormat = "yyyy-MM-dd HH:mm:ss" };
                return JsonConvert.SerializeObject(value, timeFormat);
            }
            catch
            {
                return string.Empty;
            }
        }
    }
}