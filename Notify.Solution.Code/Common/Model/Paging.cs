using System;
using System.Runtime.Serialization;

namespace Notify.Solution.Code.Common.Model
{
    /// <summary>
    /// 分页类
    /// </summary>
    [Serializable]
    [DataContract]
    public class Paging
    {
        /// <summary>
        /// 页码
        /// </summary>
        [DataMember]
        public int PageIndex { get; set; }

        /// <summary>
        /// 页大小
        /// </summary>
        private int pageSize = 10;

        /// <summary>
        /// 页大小(默认10页)
        /// </summary>
        [DataMember]
        public int PageSize
        {
            get
            {
                return this.pageSize;
            }

            set
            {
                this.pageSize = value;
            }
        }

        /// <summary>
        /// 总条数
        /// </summary>
        [DataMember]
        public int RowsCount { get; set; }

        /// <summary>
        /// 总页数
        /// </summary>
        private int pageCount;

        /// <summary>
        /// 总页数
        /// </summary>
        [DataMember]
        public int PageCount
        {
            get
            {
                this.pageCount = (this.RowsCount % this.PageSize) == 0
                                     ? this.RowsCount / this.PageSize
                                     : (this.RowsCount / this.PageSize) + 1;
                return this.pageCount;
            }

            set
            {
                this.pageCount = value;
            }
        }

        /// <summary>
        /// 是否获取总条数
        /// </summary>
        private bool getRowsCount = true;

        /// <summary>
        /// 是否获取总条数
        /// </summary>
        [DataMember]
        public bool GetRowsCount
        {
            get
            {
                return this.getRowsCount;
            }

            set
            {
                this.getRowsCount = value;
            }
        }

        /// <summary>
        /// 开始索引
        /// </summary>
        public int StratRows
        {
            get
            {
                if (this.PageIndex <= 0)
                {
                    return 0;
                }

                return this.PageSize * (this.PageIndex - 1);
            }
        }
    }
}
