using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using backend.Interfaces;
using Microsoft.CodeAnalysis.Diagnostics;
using Microsoft.EntityFrameworkCore;
using backend.DTOs;
using backend.Helpers;
using AutoMapper;
using System.Collections;

namespace backend.Controllers

{
    [ApiController]
    [Route("api/[controller]")]
    public class CityController : ControllerBase
    {
        private readonly IUnitOfWork iuw;
        private readonly ILogger<CityController> _logger;
        private readonly IMapper mapper;

        public CityController(IUnitOfWork iuw,ILogger<CityController> logger, IMapper mapper)
        {
            this.iuw = iuw;
            _logger = logger;
            this.mapper = mapper;
        }

        [HttpGet("getcities")]
        public async Task<IActionResult> GetCities()
        {
            _logger.LogInformation("Getting cities on endpoint ");

            var cities = await iuw.CityRepository.GetCitiesAsync();

            var citiesDto = mapper.Map<IEnumerable<CityDTO>>(cities);

            return Ok(citiesDto);
        }

        [HttpPost("addcity")]
        public async Task<IActionResult> AddCities(CityDTO cityDto)
        {
            var city = mapper.Map<City>(cityDto);
            city.LastUpdatedBy = 1;
            city.LastUpdatedOn = DateTime.Now;

            // var city = new City
            // {
            //     Name = cityDto.Name,
            //     LastUpdatedBy = 1,
            //     LastUpdatedOn = DateTime.Now
            // };
            
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