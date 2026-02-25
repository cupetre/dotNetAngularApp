using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;
using Microsoft.EntityFrameworkCore;

namespace backend.Data.Repo
{
    public class CityRepository : ICityRepository

    {
        private readonly DataContext dc;

        public CityRepository(DataContext dc)
        {
            this.dc = dc;
        }

        public async Task<IEnumerable<City>> GetCitiesAsync()
        {
            return await dc.Cities.ToListAsync();
        }

        public void AddCity(City city)
        {
            dc.Cities.AddAsync(city);
        }

        public void DeleteCity(int CityId)
        {
            var city = dc.Cities.Find(CityId);

            if (city != null)
            {
                dc.Cities.Remove(city);
            }
        }

        public async Task<City?> FindCityASync(int id)
        {
            return await dc.Cities.FindAsync(id);
        }
    }
}