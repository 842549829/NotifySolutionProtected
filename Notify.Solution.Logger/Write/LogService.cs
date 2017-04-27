using System;
using System.IO;
using System.Text;

namespace Notify.Solution.Logger.Write
{
    /// <summary>
    /// 日志服务
    /// </summary>
    public static class LogService
    {
        /// <summary>
        /// The obj.
        /// </summary>
        private static readonly object obj = new object();

        /// <summary>
        /// 记录异常文本日志
        /// </summary>
        /// <param name="ex">异常</param>
        public static void WriteLog(Exception ex)
        {
            StringBuilder errormessage = new StringBuilder();
            errormessage.AppendLine("异常消息：" + ex.Message);
            errormessage.AppendLine("堆栈信息：" + ex.StackTrace);
            errormessage.AppendLine("异常方法：" + ex.TargetSite.Name);
            if (ex.InnerException != null)
            {
                errormessage.AppendLine("异常消息：" + ex.InnerException.Message);
                errormessage.AppendLine("堆栈信息：" + ex.InnerException.StackTrace);
                errormessage.AppendLine("异常方法：" + ex.InnerException.TargetSite.Name);
                if (ex.InnerException.InnerException != null)
                {
                    errormessage.AppendLine("异常消息：" + ex.InnerException.InnerException.Message);
                    errormessage.AppendLine("堆栈信息：" + ex.InnerException.InnerException.StackTrace);
                    errormessage.AppendLine("异常方法：" + ex.InnerException.InnerException.TargetSite.Name);
                }
            }

            WriteLog(errormessage.ToString(), Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Logs/ExceptionLog"));
        }

        /// <summary>
        /// 记录文本日志
        /// </summary>
        /// <param name="content">日志内容</param>
        public static void WriteLog(string content)
        {
            WriteLog(content, Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "Logs"));
        }

        /// <summary>
        /// 记录文本日志
        /// </summary>
        /// <param name="content">日志内容</param>
        /// <param name="path">日志路径</param>
        public static void WriteLog(string content, string path)
        {
            Action action = () => Log(content, path);
            action.BeginInvoke(null, null);
        }

        /// <summary>
        /// The log.
        /// </summary>
        /// <param name="content">
        /// The content.
        /// </param>
        /// <param name="path">
        /// The path.
        /// </param>
        /// <returns>
        /// The 
        /// </returns>
        internal static bool Log(string content, string path)
        {
            lock (obj)
            {
                try
                {
                    TextWriter textWriter = new TextWriter(path);
                    return textWriter.WriteLog(DateTime.Now.ToString("日志时间:yyyy-MM-dd HH:mm:ss") + Environment.NewLine + content + Environment.NewLine);
                }
                catch (Exception)
                {
                    return false;
                }
            }
        }
    }
}