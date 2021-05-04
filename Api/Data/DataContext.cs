using Api.Entidades;
using Microsoft.EntityFrameworkCore;

namespace Api.Data
{
    //instalar Microsoft.EntityFrameworkCore 
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options){}
        public DbSet<Usuario> Usuarios { get; set; }
    }
}