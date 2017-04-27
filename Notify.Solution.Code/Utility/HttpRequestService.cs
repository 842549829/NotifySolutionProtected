using System;
using System.Drawing;
using System.IO;
using System.Text;

using Notify.Solution.Code.Common.Model;

namespace Notify.Solution.Code.Utility
{
    /// <summary>
    /// The http request html.
    /// </summary>
    public class HttpRequestService
    {
        /// <summary>
        /// 获取一个文本内容
        /// </summary>
        /// <param name="request">
        /// 请求信息
        /// </param>
        /// <returns>
        /// 结果
        /// </returns>
        public static string GetHttpRequest(Request request)
        {
            try
            {
                var stream = HttpRequestUtility.GetStream(request);
                using (StreamReader sr = new StreamReader(stream, request.Encoding))
                {
                    StringBuilder builder = new StringBuilder();
                    while (sr.Peek() != -1)
                    {
                        builder.Append(sr.ReadLine());
                    }

                    return builder.ToString();
                }
            }
            catch (System.Exception)
            {
                return null;
            }
        }

        /// <summary>
        /// 获取一张图片
        /// </summary>
        /// <param name="request">请求信息</param>
        /// <returns>图片</returns>
        public static Bitmap GetImage(Request request)
        {
            Bitmap map = null;
            Stream stream = null;
            try
            {
                stream = HttpRequestUtility.GetStream(request);
                byte[] buf = new byte[stream.Length];
                stream.Read(buf, 0, (int)stream.Length);
                map = new Bitmap(System.Drawing.Image.FromStream(stream));
                return map;
            }
            catch (System.Exception)
            {
                return null;
            }
            finally
            {
                if (stream != null)
                {
                    stream.Close();
                }

                if (map != null)
                {
                    map.Dispose();
                }
            }
        }
    }
}
