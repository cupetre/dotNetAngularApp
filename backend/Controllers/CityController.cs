using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using backend.Interfaces;
using Microsoft.CodeAnalysis.Diagnostics;
using Microsoft.EntityFrameworkCore;
using backend.DTOs;

namespace backend.Controllers

{
    [ApiController]
    [Route("api/[controller]")]
    public class CityController : ControllerBase
    {
        private readonly IUnitOfWork iuw;
        private readonly ILogger<CityController> _logger;

        public CityController(IUnitOfWork iuw,ILogger<CityController> logger )
        {
            this.iuw = iuw;
            _logger = logger;
        }

        [HttpGet("getcities")]
        public async Task<IActionResult> GetCities()
        {
            _logger.LogInformation("Getting cities on endpoint ");

            var cities = await iuw.CityRepository.GetCitiesAsync();

            var citiesDto = from cts in cities 
            select new CityDTO()
            {
                Id = cts.Id,
                Name = cts.Name
            };
            
            return Ok(cities);
        }

        [HttpPost("addcity")]
        public async Task<IActionResult> AddCities(CityDTO cityDto)
        {
            var city = new City
            {
                Name = cityDto.Name,
                LastUpdatedBy = 1,
                LastUpdatedOn = DateTime.Now
            };
            
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