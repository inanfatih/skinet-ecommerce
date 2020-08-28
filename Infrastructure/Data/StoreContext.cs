using System.Reflection;
using Core.Entities;
using Microsoft.EntityFrameworkCore;

// Namespace, project.klasoradi olarak yaziliyor. 
// Bu klasorde olan dosyalara direkt olarak ulasabiliriz fakat farkli klasordekine ulasabilmek icin o namespace i yukaridaki gibi using ile import etmek gerekiyor
namespace Infrastructure.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions<StoreContext> options) : base(options)
        { }
        public DbSet<Product> Products { get; set; }
        public DbSet<ProductBrand> ProductBrands { get; set; }
        public DbSet<ProductType> ProductTypes { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.ApplyConfigurationsFromAssembly(Assembly.GetExecutingAssembly());
        }
    }
}