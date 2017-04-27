using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Notify.Solution.WebApi.Business
{
    /// <summary>
    /// The logic.
    /// </summary>
    public class Logic
    {
         /// <summary>
        /// 锁对象
        /// </summary>
        private static readonly object InstanceLocker = new object();

        /// <summary>
        /// 单列字段
        /// </summary>
        private static Logic intance;

        /// <summary>
        /// The q.
        /// </summary>
        private readonly QueueProcessor queueProcessor;

        /// <summary>
        /// Prevents a default instance of the <see cref="Logic"/> class from being created.
        /// </summary>
        private Logic()
        {
            this.queueProcessor = new QueueProcessor();
        }

        /// <summary>
        /// 单列模式
        /// </summary>
        internal static Logic Intance
        {
            get
            {
                if (intance != null)
                {
                    return intance;
                }

                lock (InstanceLocker)
                {
                    return intance ?? (intance = new Logic());
                }
            }
        }

        /// <summary>
        /// The exec.
        /// </summary>
        /// <param name="o">
        /// The o.
        /// </param>
        public void Exec(object o)
        {
            this.queueProcessor.Inject(o);
        }
    }
}