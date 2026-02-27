using backend.Interfaces;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data.Repo
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext dc;
        public UserRepository ( DataContext dc ) {
            
            this.dc = dc;
            
        }
        public async Task<User> Authenticate(string username, string password)
        {
            var user = await dc.Users.FirstOrDefaultAsync(x => x.Username == username
            && x.Password == password );

            if ( user == null )
            {
                throw new UnauthorizedAccessException();
            }

            return user;

        }
    }
}