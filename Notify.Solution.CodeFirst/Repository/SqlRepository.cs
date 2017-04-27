using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace CodeFirst.Repository
{
    /// <summary>
    /// The sql repository.
    /// </summary>
    public class SqlRepository : BaseRepository
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="SqlRepository"/> class.
        /// </summary>
        /// <param name="dbContext">
        /// The db context.
        /// </param>
        public SqlRepository(DbContext dbContext)
            : base(dbContext)
        {
        }

        /// <summary>
        /// The add entities.
        /// </summary>
        /// <param name="entity">
        /// The entity.
        /// </param>
        /// <param name="isSubmit">
        /// The is submit.
        /// </param>
        /// <typeparam name="T">
        /// </typeparam>
        public override void AddEntities<T>(T entity, bool isSubmit = false)
        {
            DBContext.Entry(entity).State = EntityState.Added;
            if (isSubmit)
            {
                DBContext.SaveChanges();
            }
        }

        /// <summary>
        /// The update entities.
        /// </summary>
        /// <param name="entity">
        /// The entity.
        /// </param>
        /// <param name="isSubmit">
        /// The is submit.
        /// </param>
        /// <typeparam name="T">
        /// </typeparam>
        public override void UpdateEntities<T>(T entity, bool isSubmit = false)
        {
            DBContext.Set<T>().Attach(entity);
            DBContext.Entry(entity).State = EntityState.Modified;
            if (isSubmit)
            {
                DBContext.SaveChanges();
            }
        }

        /// <summary>
        /// The delete entities.
        /// </summary>
        /// <param name="entity">
        /// The entity.
        /// </param>
        /// <param name="isSubmit">
        /// The is submit.
        /// </param>
        /// <typeparam name="T">
        /// </typeparam>
        public override void DeleteEntities<T>(T entity, bool isSubmit = false)
        {
            DBContext.Set<T>().Attach(entity);
            DBContext.Entry(entity).State = EntityState.Deleted;
            if (isSubmit)
            {
                DBContext.SaveChanges();
            }
        }

        /// <summary>
        /// The load entities m.
        /// </summary>
        /// <param name="wherelambda">
        /// The wherelambda.
        /// </param>
        /// <typeparam name="T">
        /// </typeparam>
        /// <returns>
        /// The <see cref="IQueryable"/>.
        /// </returns>
        public override IQueryable<T> LoadEntitiesM<T>(Func<T, bool> wherelambda)
        {
            return DBContext.Set<T>().Where<T>(wherelambda).AsQueryable();
        }

        /// <summary>
        /// The load pager entities.
        /// </summary>
        /// <param name="pageSize">
        /// The page size.
        /// </param>
        /// <param name="pageIndex">
        /// The page index.
        /// </param>
        /// <param name="total">
        /// The total.
        /// </param>
        /// <param name="whereLambda">
        /// The where lambda.
        /// </param>
        /// <param name="isAsc">
        /// The is asc.
        /// </param>
        /// <param name="orderByLambda">
        /// The order by lambda.
        /// </param>
        /// <typeparam name="TSource">
        /// </typeparam>
        /// <typeparam name="T">
        /// </typeparam>
        /// <returns>
        /// The <see cref="IQueryable"/>.
        /// </returns>
        public override IQueryable<T> LoadPagerEntities<TSource, T>(int pageSize, int pageIndex, out int total, Func<T, bool> whereLambda, bool isAsc, Func<T, TSource> orderByLambda)
        {
            var tempData = DBContext.Set<T>().Where<T>(whereLambda);
            total = tempData.Count();

            // 排序获取当前页的数据
            tempData = isAsc ? tempData.OrderBy(orderByLambda).Skip(pageSize * (pageIndex - 1)).Take(pageSize).AsQueryable() : tempData.OrderByDescending(orderByLambda).Skip(pageSize * (pageIndex - 1)).Take(pageSize).AsQueryable();
            return tempData.AsQueryable();
        }
    }
}
