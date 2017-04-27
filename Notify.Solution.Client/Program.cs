using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Notify.Solution.Client
{
    using System.Net.Http;
    using System.Web.Script.Serialization;
    using System.Web.Security;

    /// <summary>
    /// The program.
    /// </summary>
    public class Program
    {
        /// <summary>
        /// The main.
        /// </summary>
        public static void Main()
        {
            Get();
            Post();
            Console.ReadKey();
        }

        /// <summary>
        /// The get.
        /// </summary>
        public static async void Get()
        {
            const string Url = "http://localhost:3784/api/Product/Test?UserId=772653441&Source=Mgen.Orca";

            // 设置HttpClientHandler的AutomaticDecompression
            ////var handler = new HttpClientHandler { AutomaticDecompression = DecompressionMethods.GZip };

            Uri uri;
            Uri.TryCreate(Url, UriKind.RelativeOrAbsolute, out uri);

            // 创建HttpClient（注意传入HttpClientHandler）
            using (var http = new HttpClient())
            {
                // await异步等待回应
                var response = await http.GetAsync(uri);

                // await异步读取最后的JSON（注意此时gzip已经被自动解压缩了，因为上面的AutomaticDecompression = DecompressionMethods.GZip）
                var rel = await response.Content.ReadAsStringAsync();

                // 确保HTTP成功状态值
                response.EnsureSuccessStatusCode();
            }
        }

        /// <summary>
        /// The post.
        /// </summary>
        public static async void Post()
        {
            const string Url = "http://localhost:3784/api/Product/Test";
            const string Partner = "772653441";
            string timestamp = DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss");

            // 设置HttpClientHandler的AutomaticDecompression
            ////var handler = new HttpClientHandler { AutomaticDecompression = DecompressionMethods.GZip };

            Uri uri;
            Uri.TryCreate(Url, UriKind.RelativeOrAbsolute, out uri);

            // 创建HttpClient（注意传入HttpClientHandler）
            using (var http = new HttpClient())
            {
                ////设置要的数据格式
                ////http.DefaultRequestHeaders.Add("Accept", "application/xml");
                http.DefaultRequestHeaders.Add("Accept", "application/json");

                // 创建参数
                var para = new Dictionary<string, string> { { "Partner", Partner }, { "Timestamp", timestamp } };
                /////签名算法
                var q = (from item in para orderby item.Key where item.Key != "Sign" select item.Value).Aggregate((a, b) => a + b);
                var md5 = Md5(q);
                para.Add("Sign", md5);

                // 使用FormUrlEncodedContent做HttpContent
                var content = new FormUrlEncodedContent(para);

                // await异步等待回应
                var response = await http.PostAsync(uri, content);

                // await异步读取最后的JSON（注意此时gzip已经被自动解压缩了，因为上面的AutomaticDecompression = DecompressionMethods.GZip）
                var rel = await response.Content.ReadAsStringAsync();

                // 确保HTTP成功状态值
                response.EnsureSuccessStatusCode();
            }
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
            return FormsAuthentication.HashPasswordForStoringInConfigFile(source, "MD5");
#pragma warning restore 618
        }
    }
}