using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Notify.Solution.Test
{
    /// <summary>
    /// Collection
    /// </summary>
    internal class Collection
    {
        /// <summary>
        /// 锁
        /// </summary>
        private static readonly object Locker = new object();

        /// <summary>
        /// 实例
        /// </summary>
        private static Collection instance;

        /// <summary>
        /// 单列模式(创建实例)
        /// </summary>
        public static Collection Instance
        {
            get
            {
                if (null != instance)
                {
                    return instance;
                }

                lock (Locker)
                {
                    return instance ?? (instance = new Collection());
                }
            }
        }

        /// <summary>
        /// Prevents a default instance of the <see cref="Collection"/> class from being created.
        /// </summary>
        private Collection()
        {
        }
    }
}
