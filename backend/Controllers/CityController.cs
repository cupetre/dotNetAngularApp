using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers

{
    [ApiController]
    [Route("api/[controller]")]
    public class CityController : ControllerBase 
    {
        public readonly DataContext dc;

        public CityController(DataContext dc)
        {
            this.dc = dc;
        }

        [HttpGet("cities")]
        public IActionResult GetCities()
        {
            var cities = dc.Cities.ToList();
            return Ok(cities);
        }
    }
}