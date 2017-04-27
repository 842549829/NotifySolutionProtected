using System.Web.Http;

using Newtonsoft.Json.Serialization;



namespace Notify.Solution.WebApi
{
    using Newtonsoft.Json.Converters;
    using System.Net.Http.Formatting;
    using System;
    using System.Net.Http;
    using System.Collections;
    using System.Net.Http.Headers;

    /// <summary>
    /// The web api config.
    /// </summary>
    public static class WebApiConfig
    {
        /// <summary>
        /// The register.
        /// </summary>
        /// <param name="config">
        /// The config.
        /// </param>
        public static void Register(HttpConfiguration config)
        {
            SetSerializationXmlFormat(config);
            SetSerializationJsonFormat(config);

            /*默认路由规则  为了找到Action，Web API会查找HTTP方法，然后寻找一个名称以HTTP方法名开头的方法。例如，对于一个Get请求，Web API会查找一个以“Get…”开头的动作，如“GetContact”或“GetAllContacts”等。这种约定只应用于GET、POST、PUT和DELETE方法。通过在你的Controller上使用attributes,你可以启用其他的HTTP方法。
             * http://blog.itpub.net/28699126/viewspace-1139832/ 参考博客
            config.Routes.MapHttpRoute(
               name: "DefaultApi",
               routeTemplate: "api/{controller}/{id}",
               defaults: new { id = RouteParameter.Optional });
            */
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional });
        }

        /// <summary>
        /// The set serialization json format.
        /// </summary>
        /// <param name="config">
        /// The config.
        /// </param>
        private static void SetSerializationJsonFormat(HttpConfiguration config)
        {
            // Web API configuration and services
            var json = config.Formatters.JsonFormatter;

            // 解决json序列化时的循环引用问题
            json.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;

            ////var JsonFormatter = GlobalConfiguration.Configuration.Formatters.JsonFormatter;
            ////设置key为驼峰命名规则 
            json.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            ////Indented（缩进）
            json.SerializerSettings.Formatting = Newtonsoft.Json.Formatting.Indented;
            ////(时间格式只支持2种)json.SerializerSettings.DateFormatHandling = Newtonsoft.Json.DateFormatHandling.MicrosoftDateFormat;
            ////时间格式("自定义格式")
            json.SerializerSettings.Converters.Add(new IsoDateTimeConverter { DateTimeFormat = "yyyy-MM-dd HH:mm:ss" });
            ////移除json序列化器
            ////config.Formatters.Remove(config.Formatters.JsonFormatter);

            // webapi设置输出格式为文本格式 参考地址 http://blog.sina.com.cn/s/blog_60ba16ed0102uzc7.html
            var jsonFormatter = new JsonMediaTypeFormatter();
            config.Services.Replace(typeof(IContentNegotiator), new JsonContentNegotiator(jsonFormatter)); 
        }

        /// <summary>
        /// The set serialization xml format.
        /// </summary>
        /// <param name="config">
        /// The config.
        /// </param>
        private static void SetSerializationXmlFormat(HttpConfiguration config)
        {
            var xml = GlobalConfiguration.Configuration.Formatters.XmlFormatter;
            ////Indenting（缩进）
            xml.Indent = true;
            ////移除xml序列化器
            ////onfig.Formatters.Remove(config.Formatters.XmlFormatter);
            ////xml.UseXmlSerializer = true;
        }
    }

    public class JsonContentNegotiator : IContentNegotiator
    {
        private readonly JsonMediaTypeFormatter _jsonFormatter;

        public JsonContentNegotiator(JsonMediaTypeFormatter formatter)
        {
            _jsonFormatter = formatter;
        }

        public ContentNegotiationResult Negotiate(Type type, HttpRequestMessage request, System.Collections.Generic.IEnumerable<MediaTypeFormatter> formatters)
        {
            var result = new ContentNegotiationResult(_jsonFormatter, new MediaTypeHeaderValue("text/path"));
            return result;
        }
    } 
}
