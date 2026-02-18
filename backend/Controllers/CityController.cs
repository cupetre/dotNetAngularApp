using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace backend.Controllers

{
    [ApiController]
    [Route("api/[controller]")]
    public class CityController : ControllerBase {

        private static readonly string[] Cities = new[]
        {
            "London" , "Koper", "Prilep" , "Skopje"
        };
        
        [HttpGet("cities")]
        public IEnumerable<string> GetCities()
        {
            return Cities; 
        }

        [HttpGet]
        public IEnumerable<City> Get()
        {
            var rng = new Random();

            return Enumerable.Range(1, 5).Select(i => new City
            {
                Date = DateTime.Now.AddDays(i),
                TemperatureC = rng.Next(-20, 35),
                Summary = "Sample"
            }).ToArray();
        }
    }

    public class City
    {
        public int TemperatureC { get; set; }
        public string Summary { get; set; }
        public DateTime Date { get; set; }
    }
}