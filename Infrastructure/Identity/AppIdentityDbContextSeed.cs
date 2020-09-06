using System.Linq;
using System.Threading.Tasks;
using Core.Entities.Identity;
using Microsoft.AspNetCore.Identity;

namespace Infrastructure.Identity
{
    public class AppIdentityDbContextSeed
    {
        public static async Task SeedUsersAsync(UserManager<AppUser> userManager)
        {
            if (!userManager.Users.Any())
            {
                var user = new AppUser
                {
                    DisplayName = "Fatih",
                    Email = "fatih@inan.com",
                    UserName = "fatih@inan.com",
                    Address = new Address
                    {
                        FirstName = "Fatih",
                        LastName = "Inan",
                        Street = "10 street",
                        City = "Toronto",
                        State = "ON",
                        ZipCode = "12321"
                    }
                };

                await userManager.CreateAsync(user, "Pa$$w0rd");
            }

        }
    }
}