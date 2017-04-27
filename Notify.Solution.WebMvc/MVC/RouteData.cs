using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Routing;

namespace Notify.Solution.WebMvc.MVC
{
    public class RouteData
    {
        public RouteData()
        {
            this.Initialze();
        }

        public RouteData(RouteBase routeBase, IRouteHandler routeHandler)
        {
            this.Initialze();
            this.Route = routeBase;
            this.RouteHandler = routeHandler;
        }

        private void Initialze()
        {
            this.DataTokens = new RouteValueDictionary();
            this.Values = new RouteValueDictionary();
        }

        public RouteBase Route { get; set; }

        public IRouteHandler RouteHandler { get; set; }

        public RouteValueDictionary DataTokens { get; private set; }

        public RouteValueDictionary Values { get; private set; }

        public string GetRequiredString(string valueName)
        {
            object obj;
            if (this.Values.TryGetValue(valueName, out obj))
            {
                string str = obj as string;
                if (!string.IsNullOrEmpty(str))
                {
                    return str;
                }
            }

            throw new InvalidOperationException();
        }
    }

    public class VirtualPathData
    {
        private readonly RouteValueDictionary _dataTokens = new RouteValueDictionary();

        public VirtualPathData(RouteBase route, string virtualPath)
        {
            this.Route = route;
            this.VirtualPath = virtualPath;
        }

        public RouteValueDictionary DataTokens
        {
            get
            {
                return this._dataTokens;
            }
        }

        public RouteBase Route { get; set; }

        public string VirtualPath
        {
            get;
            set;
        }
    }

    public abstract class RouteBase
    {
        private bool _routeExistingFiles = true;

        public abstract RouteData GetRouteData(HttpContextBase httpcontextBase);

        public abstract VirtualPathData GetVirtualPathData(RequestContext requestContext, RouteValueDictionary values);

        public bool RouteExistingFiles
        {
            get
            {
                return this._routeExistingFiles;
            }

            set
            {
                this._routeExistingFiles = value;
            }
        }
    }

    public class Route : RouteBase
    {
        private const string HttpMethodParameterName = "httpMethod";

        public Route(string url, IRouteHandler routeHandler)
        {
            this.Url = url;
            this.RouteHandler = routeHandler;
        }

        public Route(string url, RouteValueDictionary defaults, IRouteHandler routeHandler)
            : this(url, routeHandler)
        {
            this.Defaults = defaults;
        }

        public Route(
            string url,
            RouteValueDictionary defaults,
            RouteValueDictionary constraints,
            IRouteHandler routeHandler)
            : this(url, defaults, routeHandler)
        {
            this.Constraints = constraints;
        }

        public Route(
            string url,
            RouteValueDictionary defaults,
            RouteValueDictionary constraints,
            RouteValueDictionary dataTokens,
            IRouteHandler routeHandler)
            : this(url, defaults, constraints, routeHandler)
        {
            this.DataTokens = dataTokens;
        }

        public override RouteData GetRouteData(HttpContextBase httpcontext)
        {
            string virtualPath = httpcontext.Request.AppRelativeCurrentExecutionFilePath.Substring(2)
                                 + httpcontext.Request.PathInfo;
            RouteValueDictionary values = new RouteValueDictionary();
            if (values == null)
            {
                return null;
            }

            RouteData data = new RouteData(this, this.RouteHandler);
            foreach (KeyValuePair<string, object> pair in values)
            {
                data.Values.Add(pair.Key, pair.Value);
            }
            if (this.DataTokens != null)
            {
                foreach (KeyValuePair<string, object> pair2 in this.DataTokens)
                {
                    data.DataTokens[pair2.Key] = pair2.Value;
                }
            }

            return data;
        }

        public override VirtualPathData GetVirtualPathData(RequestContext requestContext, RouteValueDictionary values)
        {
            VirtualPathData data = new VirtualPathData(this,"");
            if (this.DataTokens != null)
            {
                foreach (KeyValuePair<string, object> pair in this.DataTokens)
                {
                    data.DataTokens[pair.Key] = pair.Value;
                }
            }
            return data;
        }

        public RouteValueDictionary Constraints { get; set; }

        public RouteValueDictionary Defaults { get; set; }

        public RouteValueDictionary DataTokens { get; set; }

        public IRouteHandler RouteHandler { get; set; }

        public string Url { get; set; }
    }

    public interface IHttpRoute
    {
        // 摘要:
        //     获取路由参数的约束。
        //
        // 返回结果:
        //     路由参数的约束。
        IDictionary<string, object> Constraints { get; }
        //
        // 摘要:
        //     获取任何不直接用于确定路由是否与传入的 System.Net.Http.HttpRequestMessage 匹配的附加数据标记。
        //
        // 返回结果:
        //     附加数据标记。
        IDictionary<string, object> DataTokens { get; }
        //
        // 摘要:
        //     获取路由参数的默认值（如果传入的 System.Net.Http.HttpRequestMessage 未提供路由参数值）。
        //
        // 返回结果:
        //     路由参数的默认值。
        IDictionary<string, object> Defaults { get; }
        //
        // 摘要:
        //     获取将作为请求接收方的消息处理程序。
        //
        // 返回结果:
        //     消息处理程序。
        System.Net.Http.HttpMessageHandler Handler { get; }
        //
        // 摘要:
        //     获取描述要匹配的 URI 模式的路由模板。
        //
        // 返回结果:
        //     路由模板。
        string RouteTemplate { get; }

        // 摘要:
        //     通过查找路由的 <see cref="!:IRouteData" />，确定传入请求是否匹配此路由。
        //
        // 参数:
        //   virtualPathRoot:
        //     虚拟路径根。
        //
        //   request:
        //     请求。
        //
        // 返回结果:
        //     如果匹配，则为路由的 <see cref="!:RouteData" />；否则为 null。
        System.Web.Http.Routing.IHttpRouteData GetRouteData(string virtualPathRoot, System.Net.Http.HttpRequestMessage request);
        //
        // 摘要:
        //     基于所提供的路由和值获取虚拟路径数据。
        //
        // 参数:
        //   request:
        //     请求消息。
        //
        //   values:
        //     值。
        //
        // 返回结果:
        //     虚拟路径数据。
        System.Web.Http.Routing.IHttpVirtualPathData GetVirtualPath(System.Net.Http.HttpRequestMessage request, IDictionary<string, object> values);
    }

    public class HttpRoute
    {
    }
}