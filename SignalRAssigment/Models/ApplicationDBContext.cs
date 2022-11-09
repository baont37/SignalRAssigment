using Microsoft.EntityFrameworkCore;

namespace SignalRAssigment.Models;
public class ApplicationDBContext:DbContext
{
    public ApplicationDBContext(DbContextOptions options) : base(options)
    {
    }
    public DbSet<Post> Posts { get; set; }
}
