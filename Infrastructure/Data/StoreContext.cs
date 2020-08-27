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
    }
}