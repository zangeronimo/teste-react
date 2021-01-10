using Microsoft.EntityFrameworkCore;
using api.Models;

namespace api.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
            : base(options)
        {
        }

        public DbSet<Contact> contacts { get; set; }
    }
}