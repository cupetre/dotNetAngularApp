using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using backend.Interfaces;
using Microsoft.CodeAnalysis.Diagnostics;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers

{
    [ApiController]
    [Route("api/[controller]")]
    public class CityController : ControllerBase
    {
        private readonly IUnitOfWork iuw;

        public CityController(IUnitOfWork iuw)
        {
            this.iuw = iuw;
        }

        [HttpGet("cities")]
        public async Task<IActionResult> GetCities()
        {
            var cities = await iuw.CityRepository.GetCitiesAsync();
            return Ok(cities);
        }

        [HttpPost("addcity")]
        public async Task<IActionResult> AddCities(City city)
        {
            iuw.CityRepository.AddCity(city);
            await iuw.SaveAsync();
            return StatusCode(201);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCity(int id)
        {
            iuw.CityRepository.DeleteCity(id);
            await iuw.SaveAsync();
            return Ok(id);
        }
    }
}