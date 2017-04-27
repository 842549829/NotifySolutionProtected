using System;
using System.Security.Cryptography;
using System.Text;

namespace Notify.Solution.Finance.Tenpay
{
    public class Signature
    {
        /// <summary>
        /// 签名字符串
        /// </summary>
        /// <param name="content">需要签名的内容</param>
        /// <param name="charset">编码格式</param>
        /// <returns>签名结果</returns>
        public static string Md5(string content, string charset)
        {
            MD5CryptoServiceProvider md5 = new MD5CryptoServiceProvider();
            byte[] inputBye = Encoding.GetEncoding(charset).GetBytes(content);
            byte[] outputBye = md5.ComputeHash(inputBye);
            return BitConverter.ToString(outputBye).Replace("-", string.Empty).ToUpper();
        }
    }
}
