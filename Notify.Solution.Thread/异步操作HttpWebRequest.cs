using System;

namespace Notify.Solution.ConsoleApplication
{
    using System.Net;
    using System.Threading;

    /// <summary>
    /// The 异步操作.
    /// </summary>
    public class 异步操作HttpWebRequest
    {
        /// <summary>
        /// The exec.
        /// </summary>
        public void Execute()
        {
            HttpWebRequest request = (HttpWebRequest)WebRequest.Create(new Uri("http://www.microsoft.com"));
            IAsyncResult ar = request.BeginGetResponse(new AsyncCallback(PoolFunc), request);
            Console.WriteLine("Synchronous: {0}", ar.CompletedSynchronously);
        }

        /// <summary>
        /// The pool func.
        /// </summary>
        /// <param name="ar">
        /// The ar.
        /// </param>
        public static void PoolFunc(IAsyncResult ar)
        {
            Console.WriteLine("Response received on pool: {0}", Thread.CurrentThread.IsThreadPoolThread);
            HttpWebRequest request = (HttpWebRequest)ar.AsyncState;
            HttpWebResponse response = (HttpWebResponse)request.EndGetResponse(ar);
            Console.WriteLine("  Response size: {0}", response.ContentLength);
        }
    }
}
