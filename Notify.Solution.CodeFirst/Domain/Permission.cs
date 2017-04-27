using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Notify.Solution.CodeFirst
{
    /// <summary>
    /// 用户
    /// </summary>
    public class User
    {
        /// <summary>
        /// 编号
        /// </summary>
        [Key]
        public Guid Id { get; set; }

        /// <summary>
        /// 部门Id
        /// </summary>
        public Guid DepartmentId { get; set; }

        /// <summary>
        /// 用户名
        /// </summary>
        [Required]
        [MaxLength(255)]
        [Column(TypeName = "Varchar")]
        public string UserName { get; set; }

        /// <summary>
        /// 密码
        /// </summary>
        [Required]
        [MaxLength(32)]
        [Column(TypeName = "Char")]
        public string Password { get; set; }

        /// <summary>
        /// /昵称
        /// </summary>
        [Required]
        [MaxLength(255)]
        public string NickName { get; set; }

        /// <summary>
        /// 邮件
        /// </summary>
        [Required]
        [MaxLength(255)]
        [Column(TypeName = "Varchar")]
        public string Email { get; set; }

        /// <summary>
        /// 手机
        /// </summary>
        [Required]
        [MaxLength(11)]
        [Column(TypeName = "Char")]
        public string Mobile { get; set; }

        /// <summary>
        /// 启用 禁用
        /// </summary>
        [Required]
        public bool Enabled { get; set; }

        /// <summary>
        /// 是否是管理员账号
        /// </summary>
        [Required]
        public bool IsAdministrator { get; set; }

        /// <summary>
        /// 注册时间
        /// </summary>
        [Required]
        public DateTime RegisterDate { get; set; }

        /// <summary>
        /// 禁用登录Ip
        /// </summary>
        public string IpLimitation { get; set; }

        /// <summary>
        /// 备注
        /// </summary>
        public string Remark { get; set; }

        /// <summary>
        /// Gets or sets the user role relationships.
        /// </summary>
        public ICollection<UserRoleRelationship> UserRoleRelationships { get; set; }
    }

    /// <summary>
    /// 用户角色关系
    /// </summary>
    public class UserRoleRelationship
    {
        /// <summary>
        /// Id
        /// </summary>
        [Key]
        public Guid Id { get; set; }

        /// <summary>
        /// 角色Id
        /// </summary>
        [Required]
        public Guid RoleId { get; set; }

        /// <summary>
        /// 用户Id
        /// </summary>
        [Required]
        public Guid UserId { get; set; }

        /// <summary>
        /// Gets or sets the user.
        /// </summary>
        public virtual User User { get; set; }

        /// <summary>
        /// Gets or sets the role.
        /// </summary>
        public virtual Role Role { get; set; }
    }

    /// <summary>
    /// 角色
    /// </summary>
    public class Role
    {
        /// <summary>
        /// 编号
        /// </summary>
        [Key]
        public Guid Id { get; set; }

        /// <summary>
        /// 父角色Id
        /// </summary>
        public Guid? ParentId { get; set; }

        /// <summary>
        /// 角色名称
        /// </summary>
        [Required]
        [MaxLength(255)]
        public string Name { get; set; }

        /// <summary>
        /// 是否禁用
        /// </summary>
        [Required]
        public bool Enabled { get; set; }

        /// <summary>
        /// 备注
        /// </summary>
        public string Remark { get; set; }

        /// <summary>
        /// Gets or sets the user role relationships.
        /// </summary>
        public ICollection<UserRoleRelationship> UserRoleRelationships { get; set; }

        /// <summary>
        /// Gets or sets the role permission relationships.
        /// </summary>
        public ICollection<RolePermissionRelationship> RolePermissionRelationships { get; set; }
    }

    /// <summary>
    /// 角色权限关系
    /// </summary>
    public class RolePermissionRelationship
    {
        /// <summary>
        /// Gets or sets the id.
        /// </summary>
        [Key]
        public Guid Id { get; set; }

        /// <summary>
        /// 角色Id
        /// </summary>
        [Required]
        public Guid RoleId { get; set; }

        /// <summary>
        /// 权限Id
        /// </summary>
        [Required]
        public Guid PermissionId { get; set; }

        /// <summary>
        /// Gets or sets the role.
        /// </summary>
        public virtual Role Role { get; set; }

        /// <summary>
        /// Gets or sets the permission.
        /// </summary>
        public virtual Permission Permission { get; set; }
    }

    /// <summary>
    /// 权限
    /// </summary>
    public class Permission
    {
        /// <summary>
        /// 编号
        /// </summary>
        [Key]
        public Guid Id { get; set; }

        /// <summary>
        /// 权限名称
        /// </summary>
        [Required]
        [MaxLength(255)]
        public string Name { get; set; }

        /// <summary>
        /// 是否禁用
        /// </summary>
        [Required]
        public bool Enabled { get; set; }

        /// <summary>
        /// 备注
        /// </summary>
        public string Remark { get; set; }

        /// <summary>
        /// Gets or sets the role permission relationships.
        /// </summary>
        public ICollection<RolePermissionRelationship> RolePermissionRelationships { get; set; }

        /// <summary>
        /// Gets or sets the menu permissions.
        /// </summary>
        public ICollection<MenuPermission> MenuPermissions { get; set; }
    }

    /// <summary>
    /// 菜单权限
    /// </summary>
    public class MenuPermission
    {
        /// <summary>
        /// 编号
        /// </summary>
        [Key]
        public Guid Id { get; set; }

        /// <summary>
        /// 菜单父级菜单
        /// </summary>
        public Guid? ParentId { get; set; }

        /// <summary>
        /// 权限Id(属于那个权限)
        /// </summary>
        [Required]
        public virtual Guid PermissionId { get; set; }

        /// <summary>
        /// 名字
        /// </summary>
        [Required]
        [MaxLength(255)]
        public string Name { get; set; }

        /// <summary>
        /// 菜单地址
        /// </summary>
        [Required]
        [MaxLength(255)]
        public string Address { get; set; }

        /// <summary>
        /// 是否禁用
        /// </summary>
        [Required]
        public bool Enabled { get; set; }

        /// <summary>
        /// 菜单类型
        /// </summary>
        [Required]
        public byte Type { get; set; }

        /// <summary>
        /// 是否显示菜单
        /// </summary>
        [Required]
        public bool Display { get; set; }

        /// <summary>
        /// 排序
        /// </summary>
        [Required]
        public int Sort { get; set; }

        /// <summary>
        /// 深度
        /// </summary>
        [Required]
        public int Depth { get; set; }

        /// <summary>
        /// 备注
        /// </summary>
        public string Remark { get; set; }

        /// <summary>
        /// Gets or sets the module permissions.
        /// </summary>
        public ICollection<ModulePermission> ModulePermissions { get; set; }
    }

    /// <summary>
    /// 模块
    /// </summary>
    public class ModulePermission
    {
        /// <summary>
        /// 编号
        /// </summary>
        [Key]
        public Guid Id { get; set; }

        /// <summary>
        /// 父级模块Id
        /// </summary>
        public Guid? ParentId { get; set; }

        /// <summary>
        /// 菜单Id(属性那个菜单)
        /// </summary>
        [Required]
        public virtual Guid MenuPermissionId { get; set; }

        /// <summary>
        /// 名字
        /// </summary>
        [Required]
        [MaxLength(255)]
        public string Name { get; set; }

        /// <summary>
        /// 模块内容(比如Id)
        /// </summary>
        [Required]
        [MaxLength(255)]
        public string Content { get; set; }

        /// <summary>
        /// 类型(增删改查)
        /// </summary>
        [Required]
        public byte Type { get; set; }

        /// <summary>
        /// 是否禁用
        /// </summary>
        [Required]
        public bool Enabled { get; set; }

        /// <summary>
        /// 备注
        /// </summary>
        public string Remark { get; set; }
    }
}
