using System.Security.Cryptography;
using System.Text;

namespace Notify.Solution.Finance.Aipay
{
    /// <summary>
    /// 签名算法类
    /// </summary>
    public static class Signature
    {
        /// <summary>
        /// 签名字符串
        /// </summary>
        /// <param name="content">需要签名的内容</param>
        /// <param name="key">密钥</param>
        /// <param name="charset">编码格式</param>
        /// <returns>签名结果</returns>
        public static string Md5(string content, string key, string charset)
        {
            StringBuilder sb = new StringBuilder(32);
            MD5 md5 = new MD5CryptoServiceProvider();
            byte[] t = md5.ComputeHash(Encoding.GetEncoding(charset).GetBytes(content + key));
            foreach (byte t1 in t)
            {
                sb.Append(t1.ToString("x").PadLeft(2, '0'));
            }

            return sb.ToString();
        }

        /// <summary>
        /// 验签
        /// </summary>
        /// <param name="content">需要签名的内容</param>
        /// <param name="key">密钥</param>
        /// <param name="charset">编码格式</param>
        /// <param name="sign">签名</param>
        /// <returns>结果</returns>
        public static bool VerfiyMd5(string content, string key, string charset, string sign)
        {
            string md5Sign = Md5(content, key, charset);
            return string.Equals(md5Sign, sign);
        }
    }
}
