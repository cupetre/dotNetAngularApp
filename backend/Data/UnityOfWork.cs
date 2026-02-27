using backend.Data.Repo;
using backend.Interfaces;

namespace backend.Data

{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DataContext dc;
        public UnitOfWork(DataContext dc)
        {
            this.dc = dc;
            
        }
        public ICityRepository CityRepository => 
            new CityRepository(dc);
        public IUserRepository UserRepository => 
            new UserRepository(dc);

        public async Task<bool> SaveAsync()
        {   
            return await dc.SaveChangesAsync() > 0; // if above 0 changes are successfull
        }
    }
}