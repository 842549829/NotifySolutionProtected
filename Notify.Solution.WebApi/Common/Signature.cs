using Notify.Solution.WebApi.Models;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Linq;
using System.Web;

namespace Notify.Solution.WebApi.Common
{
    /// <summary>
    /// The signature.
    /// </summary>
    public class Signature
    {
        /// <summary>
        /// 默认写死可以从数据库读取
        /// </summary>
        private const string P = "772653441";

        /// <summary>
        /// The partner.
        /// </summary>
        private const string Partner = "Partner";

        /// <summary>
        /// The sign.
        /// </summary>
        private const string Sign = "Sign";

        /// <summary>
        /// The timestamp.
        /// </summary>
        private const string Timestamp = "Timestamp";

        /// <summary>
        /// The nvc.
        /// </summary>
        private readonly NameValueCollection nvc;

        /// <summary>
        /// The partner.
        /// </summary>
        private string partner, sign, timestamp;

        /// <summary>
        /// Initializes a new instance of the <see cref="Signature"/> class.
        /// </summary>
        /// <param name="nvc">
        /// The nvc.
        /// </param>
        public Signature(NameValueCollection nvc)
        {
            this.nvc = nvc;
        }

        /// <summary>
        /// Gets or sets the result.
        /// </summary>
        private Result Result { get; set; }

        /// <summary>
        /// Gets or sets the parameters.
        /// </summary>
        private Dictionary<string, string> Parameters { get; set; }

        /// <summary>
        /// The ex.
        /// </summary>
        /// <returns>
        /// The <see cref="Result"/>.
        /// </returns>
        public Result Execute()
        {
            this.Result = new Result();
            if (this.ValidateParameters().IsSucceed)
            {
                if (!string.Equals(this.partner, P))
                {
                    this.Result.IsSucceed = false;
                    this.Result.Message = "商户号不存在";
                    return this.Result;
                }

                var q = (from item in this.Parameters orderby item.Key where item.Key != Sign select item.Value).Aggregate((a, b) => a + b);
                string signature = Md5(q);
                if (!string.Equals(this.sign, signature))
                {
                    this.Result.IsSucceed = false;
                    this.Result.Message = "签名错误";
                    return this.Result;
                }
            }

            return this.Result;
        }

        /// <summary>
        /// The validate result.
        /// </summary>
        /// <returns>
        /// The <see cref="Result"/>.
        /// </returns>
        private Result ValidateParameters()
        {
            if (this.nvc == null)
            {
                this.Result.Message = "参数为空";
                return this.Result;
            }

            var allKeys = this.nvc.AllKeys;
            if (allKeys.Length <= 0)
            {
                this.Result.Message = "参数为空";
                return this.Result;
            }

            this.partner = this.nvc.Get(Partner);
            if (string.IsNullOrWhiteSpace(this.partner))
            {
                this.Result.Message = string.Format("参数:{0} 为空", Partner);
                return this.Result;
            }

            this.sign = this.nvc.Get(Sign);
            if (string.IsNullOrWhiteSpace(this.sign))
            {
                this.Result.Message = string.Format("参数:{0} 为空", Sign);
                return this.Result;
            }

            this.timestamp = this.nvc.Get(Timestamp);
            if (string.IsNullOrWhiteSpace(this.timestamp))
            {
                this.Result.Message = string.Format("参数:{0} 为空", Timestamp);
                return this.Result;
            }

            this.Parameters = new Dictionary<string, string>
                                 {
                                     { Partner, this.partner },
                                     { Sign, this.sign },
                                     { Timestamp, this.timestamp }
                                 };
            this.Result.IsSucceed = true;
            return this.Result;
        }

        /// <summary>
        /// The md 5.
        /// </summary>
        /// <param name="source">
        /// The source.
        /// </param>
        /// <returns>
        /// The <see cref="string"/>.
        /// </returns>
        private static string Md5(string source)
        {
#pragma warning disable 618
            return System.Web.Security.FormsAuthentication.HashPasswordForStoringInConfigFile(source, "MD5");
#pragma warning restore 618
        }
    }
}