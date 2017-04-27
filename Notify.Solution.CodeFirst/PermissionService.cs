using System;
using System.Data.Entity;
using System.Transactions;

using CodeFirst.Repository;

namespace Notify.Solution.CodeFirst
{
    using System.Linq;

    /// <summary>
    /// The permission service.
    /// </summary>
    public class PermissionService
    {
        /*
         测试环境 需要在本地创建一个数据库  名称见app.config
         */

        /// <summary>
        /// 测试事务提交
        /// </summary>
        public static void AddTransactionScope()
        {
            User u = new User
            {
                Id = Guid.NewGuid(),
                DepartmentId = Guid.NewGuid(),
                Email = "45514544@qq.com",
                Enabled = true,
                Mobile = "1254555555",
                NickName = "小久",
                Password = "sdsdsdsdsdsdsds",
                UserName = "kokkskskdj",
                RegisterDate = DateTime.Now,
                Remark = string.Empty,
                IsAdministrator = false,
            };

            Role r = new Role
            {
                Name = "sdsd",
                Id = Guid.NewGuid(),
                Enabled = true,
                ParentId = Guid.NewGuid(),
                Remark = "sdsdsd"
            };

            UserRoleRelationship ur = new UserRoleRelationship
            {
                Id = Guid.NewGuid(),
                RoleId = r.Id,
                UserId = u.Id
            };

            using (BaseRepository repository = PermissionService.Factory())
            {
                using (TransactionScope trans = new TransactionScope())
                {
                    try
                    {
                        repository.AddEntities(u);
                        repository.AddEntities(r);
                        repository.AddEntities(ur, true);
                        trans.Complete();
                    }
                    catch (Exception exception)
                    {
                        throw new Exception(exception.Message);
                    }
                    finally
                    {
                        trans.Dispose();
                    }
                }
            }
        }

        /// <summary>
        /// 测试链接数据库.
        /// </summary>
        public static void AddPermission()
        {
            Role r = new Role
            {
                Name = "sdsd",
                Id = Guid.NewGuid(),
                Enabled = true,
                ParentId = Guid.NewGuid(),
                Remark = "sdsdsd"
            };

            // 一定要引用 EntityFramework跟EntityFramework.SqlServer 这个2个dll
            // 也可以直接使用当前上下文实现(不推荐此方法)
            using (PermissionEntities p = new PermissionEntities())
            {
                p.Roles.Add(r);
                p.SaveChanges();
            }
        }

        /// <summary>
        /// 测试查询
        /// </summary>
        public static void Query()
        {
            using (BaseRepository repository = PermissionService.Factory())
            {
                var reulst = repository.LoadEntitiesM<Role>(role => role.Enabled);
            }
        }

        /// <summary>
        /// The querys.
        /// </summary>
        public static void Querys()
        {
            using (BaseRepository repository = PermissionService.Factory())
            {
                var user = repository.LoadEntitiesM<User>(a => true);
                var role = repository.LoadEntitiesM<Role>(a => true);
                var ship = repository.LoadEntitiesM<UserRoleRelationship>(a => true);
                var rel = from u in user
                          join s in ship on u.Id equals s.UserId
                          join r in role on s.RoleId equals r.Id
                          select new { u, r, s };
            }
        }

        /// <summary>
        /// 工厂方法
        /// </summary>
        /// <returns>数据仓储</returns>
        public static BaseRepository Factory()
        {
            DbContext dbContext = new PermissionEntities();

            // 默认sqlserver仓储 也可以改用mysql仓储
            BaseRepository repository = new SqlRepository(dbContext);
            return repository;
        }
    }
}
