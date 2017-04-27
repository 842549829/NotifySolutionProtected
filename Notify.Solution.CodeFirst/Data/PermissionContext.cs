using System.Data.Entity;

namespace Notify.Solution.CodeFirst
{
    /// <summary>
    /// The permission entities.
    /// </summary>
    public class PermissionEntities : DbContext
    {
        /// <summary>
        /// Gets or sets the users.
        /// </summary>
        public DbSet<User> Users { get; set; }

        /// <summary>
        /// Gets or sets the user role relationships.
        /// </summary>
        public DbSet<UserRoleRelationship> UserRoleRelationships { get; set; }

        /// <summary>
        /// Gets or sets the roles.
        /// </summary>
        public DbSet<Role> Roles { get; set; }

        /// <summary>
        /// Gets or sets the role permission relationships.
        /// </summary>
        public DbSet<RolePermissionRelationship> RolePermissionRelationships { get; set; }

        /// <summary>
        /// Gets or sets the permissions.
        /// </summary>
        public DbSet<Permission> Permissions { get; set; }

        /// <summary>
        /// Gets or sets the menu permissions.
        /// </summary>
        public DbSet<MenuPermission> MenuPermissions { get; set; }

        /// <summary>
        /// Gets or sets the module permissions.
        /// </summary>
        public DbSet<ModulePermission> ModulePermissions { get; set; }
    }
}
