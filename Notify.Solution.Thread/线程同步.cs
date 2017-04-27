using System;

namespace Notify.Solution.ConsoleApplication
{
    using System.Threading;

    /// <summary>
    /// The 线程同步.
    /// </summary>
    public class 线程同步
    {
        /// <summary>
        /// The execute.
        /// </summary>
        public void Execute()
        {
            ManualResetEvent evt = new ManualResetEvent(false);
            Mutex mtx = new Mutex(true);
            ThreadPool.RegisterWaitForSingleObject(evt, new WaitOrTimerCallback(PoolFunc), null, Timeout.Infinite, true);
            ThreadPool.RegisterWaitForSingleObject(mtx, new WaitOrTimerCallback(PoolFunc), null, Timeout.Infinite, true);
            for (int i = 1; i <= 5; i++)
            {
                Console.Write("{0}...", i);
                Thread.Sleep(1000);
            }

            Console.WriteLine();
            evt.Set();
            mtx.ReleaseMutex();
            Console.ReadLine();
        }

        

        /// <summary>
        /// The pool func.
        /// </summary>
        /// <param name="obj">
        /// The obj.
        /// </param>
        /// <param name="timedOut">
        /// The timed out.
        /// </param>
        public static void PoolFunc(object obj, bool timedOut)
        {
            Console.WriteLine(
                "Synchronization object signaled, Thread: {0} Is pool: {1}",
                Thread.CurrentThread.GetHashCode(),
                Thread.CurrentThread.IsThreadPoolThread);
        }
    }
}
