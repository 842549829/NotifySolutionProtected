using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Notify.Solution.WebApi.Business
{
    using System.Threading;
    using System.Threading.Tasks;

    /// <summary>
    /// 队列执行业务代码
    /// </summary>
    internal class QueueProcessor
    {
        /// <summary>
        /// 队列消息
        /// </summary>
        private readonly Queue<object> logs;

        /// <summary>
        /// 锁
        /// </summary>
        private readonly object locker = new object();

        /// <summary>
        /// 线程标记
        /// </summary>
        private bool stoped = true;

        /// <summary>
        /// 最后时间
        /// </summary>
        private DateTime lastFlusTime = DateTime.Now;

        /// <summary>
        /// Initializes a new instance of the <see cref="QueueProcessor"/> class.
        /// </summary>
        public QueueProcessor()
        {
            this.logs = new Queue<object>();
            this.MaxCount = 5;
            this.Interval = 1;
        }

        /// <summary>
        /// 最大条数
        /// </summary>
        public uint MaxCount { get; private set; }

        /// <summary>
        /// 时间间隔
        /// </summary>
        public uint Interval { get; private set; }

        /// <summary>
        /// 注入日志
        /// </summary>
        /// <param name="log">日志信息</param>
        internal void Inject(object log)
        {
            lock (this.locker)
            {
                this.logs.Enqueue(log);
                this.SetThread();
            }
        }

        /// <summary>
        /// 设置线程
        /// </summary>
        private void SetThread()
        {
            if (!this.stoped)
            {
                return;
            }

            this.stoped = false;
            ThreadPool.QueueUserWorkItem(this.Run);
        }

        /// <summary>
        /// 运行
        /// </summary>
        /// <param name="state">状态</param>
        private void Run(object state)
        {
            while (!this.stoped)
            {
                // 是否满足写入要求
                if (this.RequireFlush())
                {
                    this.FlushData();
                    this.SetFlushInfo();
                }

                Thread.Sleep(500);
            }
        }

        /// <summary>
        /// 需要写入(队列消息是否达到配置的MaxCount或者时间间隔是否达到配置的Interval)
        /// </summary>
        /// <returns>rel</returns>
        private bool RequireFlush()
        {
            return this.logs.Count >= this.MaxCount || this.IsExpired();
        }

        /// <summary>
        /// 是否过了时间间隔
        /// </summary>
        /// <returns>rel</returns>
        private bool IsExpired()
        {
            return (DateTime.Now - this.lastFlusTime).TotalMinutes >= this.Interval;
        }

        /// <summary>
        /// 获取写入集合
        /// </summary>
        /// <returns>contexts</returns>
        private List<object> GetData()
        {
            List<object> result = new List<object>();
            lock (this.locker)
            {
                while (result.Count < this.MaxCount && this.logs.Count > 0)
                {
                    result.Add(this.logs.Dequeue());
                }
            }

            return result;
        }

        /// <summary>
        /// 设置刷新信息
        /// </summary>
        private void SetFlushInfo()
        {
            this.lastFlusTime = DateTime.Now;
            if (this.logs.Count == 0)
            {
                this.stoped = true;
            }
        }

        /// <summary>
        /// 记录日志
        /// </summary>
        private void FlushData()
        {
            // 批量执行业务
            var data = this.GetData();
            ////.............(此处省略1W行代码)
            ////执行完成通知客户端
        }
    }
}