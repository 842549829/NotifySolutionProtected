using System;

namespace Notify.Solution.Code.Extension
{
    /// <summary>
    /// 字符串扩展类
    /// </summary>
    public static class StringExtension
    {
        #region 拆分字符串
        /// <summary>
        /// 根据字符串拆分字符串
        /// </summary>
        /// <param name="source">要拆分的字符串</param>
        /// <param name="separator">拆分符</param>
        /// <returns>数组</returns>
        public static string[] Split(this string source, string separator)
        {
            if (source == null)
            {
                throw new ArgumentNullException("source");
            }

            if (separator == null)
            {
                throw new ArgumentNullException("separator");
            }

            string[] strtmp = new string[1];
            // ReSharper disable once StringIndexOfIsCultureSpecific.2
            int index = source.IndexOf(separator, 0);
            if (index < 0)
            {
                strtmp[0] = source;
                return strtmp;
            }

            strtmp[0] = source.Substring(0, index);
            return Split(source.Substring(index + separator.Length), separator, strtmp);
        }

        /// <summary>
        /// 采用递归将字符串分割成数组
        /// </summary>
        /// <param name="source">要拆分的字符串</param>
        /// <param name="separator">拆分符</param>
        /// <param name="attachArray">attachArray</param>
        /// <returns>string[]</returns>
        private static string[] Split(string source, string separator, string[] attachArray)
        {
            // while循环的方式
            while (true)
            {
                string[] strtmp = new string[attachArray.Length + 1];
                attachArray.CopyTo(strtmp, 0);

                // ReSharper disable once StringIndexOfIsCultureSpecific.2
                int index = source.IndexOf(separator, 0);
                if (index < 0)
                {
                    strtmp[attachArray.Length] = source;
                    return strtmp;
                }

                strtmp[attachArray.Length] = source.Substring(0, index);
                source = source.Substring(index + separator.Length);
                attachArray = strtmp;
            }

            // 递归的方式
            /*
            string[] strtmp = new string[attachArray.Length + 1];
            attachArray.CopyTo(strtmp, 0);

            // ReSharper disable once StringIndexOfIsCultureSpecific.2
            int index = source.IndexOf(separator, 0);
            if (index < 0)
            {
                strtmp[attachArray.Length] = source;
                return strtmp;
            }
            else
            {
                strtmp[attachArray.Length] = source.Substring(0, index);
                return Split(source.Substring(index + separator.Length), separator, strtmp);
            }*/
        }

        #endregion
    }
}
