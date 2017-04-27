using System;
using System.IO;
using System.Runtime.Serialization.Json;
using System.Text;
using System.Web.Script.Serialization;
using System.Xml.Serialization;

using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace Notify.Solution.Code.Extension
{
    /// <summary>
    /// The serializer extension.
    /// </summary>
    public static class SerializerExtension
    {
        #region Newtonsoft.Json(第三方序列化,最优的解决方案)
        /*
         * 详细讲解 http://www.cnblogs.com/litian/p/3870975.html
         */

        /// <summary>
        /// 序列化
        /// </summary>
        /// <param name="value">value</param>
        /// <returns>string</returns>
        public static string NewtonsoftSerialize(this object value)
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

        /// <summary>
        /// 反序列化
        /// </summary>
        /// <typeparam name="T">T</typeparam>
        /// <param name="value">value</param>
        /// <returns>TR</returns>
        public static T NewtonsoftDeserialize<T>(this string value)
        {
            T t = default(T);
            try
            {
                return JsonConvert.DeserializeObject<T>(value);
            }
            catch
            {
                return t;
            }
        }

        /// <summary>
        /// 反序列化(动态反序列化)
        /// </summary>
        /// <param name="value">value</param>
        /// <returns>TR</returns>
        public static dynamic NewtonsoftDeserialize(this string value)
        {
            try
            {
                return JsonConvert.DeserializeObject(value);
            }
            catch
            {
                return null;
            }
        }
        #endregion

        #region DataContractJsonSerializer(WCF)
        /// <summary>
        /// 序列化
        /// </summary>
        /// <param name="item">item</param>
        /// <returns>string</returns>
        public static string DataContractJsonSerializer(this object item)
        {
            try
            {
                DataContractJsonSerializer serializer = new DataContractJsonSerializer(item.GetType());
                using (MemoryStream ms = new MemoryStream())
                {
                    serializer.WriteObject(ms, item);
                    StringBuilder sb = new StringBuilder();
                    sb.Append(Encoding.UTF8.GetString(ms.ToArray()));
                    return sb.ToString();
                }
            }
            catch
            {
                return string.Empty;
            }
        }

        /// <summary>
        /// 反序列化 
        /// </summary>
        /// <typeparam name="T">T</typeparam>
        /// <param name="jsonString">jsonString</param>
        /// <returns>TR</returns>
        public static T DataContractJsonDeserializ<T>(this string jsonString)
        {
            T t = default(T);
            try
            {
                DataContractJsonSerializer ser = new DataContractJsonSerializer(typeof(T));
                using (MemoryStream ms = new MemoryStream(Encoding.UTF8.GetBytes(jsonString)))
                {
                    T jsonObject = (T)ser.ReadObject(ms);
                    return jsonObject;
                }
            }
            catch
            {
                return t;
            }
        }
        #endregion

        #region JavaScriptSerializer
        /// <summary>
        /// JavaScript方式序列化json
        /// </summary>
        /// <param name="obj">输出对象</param>
        /// <returns>JSON字符串</returns>
        public static string JavaScriptSerializer(this object obj)
        {
            try
            {
                JavaScriptSerializer json = new JavaScriptSerializer();
                string result = json.Serialize(obj);
                result = System.Text.RegularExpressions.Regex.Replace(
                result,
                @"\\/Date\((\d+)\)\\/",
                match =>
                {
                    DateTime dt = new DateTime(1970, 1, 1);
                    dt = dt.AddMilliseconds(long.Parse(match.Groups[1].Value));
                    dt = dt.ToLocalTime();
                    return dt.ToString("yyyy-MM-dd HH:mm:ss");
                });
                return result;
            }
            catch
            {
                return string.Empty;
            }
        }

        /// <summary>
        /// 获取Json的Model(反序列化)
        /// </summary>
        /// <typeparam name="T">对象类型</typeparam>
        /// <param name="json">json字符串</param>
        /// <returns>T对象</returns>
        public static T JavaScriptDeserializ<T>(this string json)
        {
            T t = default(T);
            try
            {
                JavaScriptSerializer serializer = new JavaScriptSerializer();
                return serializer.Deserialize<T>(json);
            }
            catch
            {
                return t;
            }
        }
        #endregion

        /// <summary>
        /// XML序列化方式深复制
        /// </summary>
        /// <typeparam name="T">类型</typeparam>
        /// <param name="obj">复制对象</param>
        /// <returns>结果</returns>
        public static T DeepCopy<T>(this T obj)
        {
            object retval;
            using (MemoryStream ms = new MemoryStream())
            {
                XmlSerializer xml = new XmlSerializer(typeof(T));
                xml.Serialize(ms, obj);
                ms.Seek(0, SeekOrigin.Begin);
                retval = xml.Deserialize(ms);
                ms.Close();
            }

            return (T)retval;
        }
    }
}
