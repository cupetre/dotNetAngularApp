using backend.Models;
using Microsoft.AspNetCore.Mvc;
using backend.Interfaces;
using backend.DTOs;
using AutoMapper;
using Azure;
using Microsoft.AspNetCore.JsonPatch;

namespace backend.Controllers

{
    [ApiController]
    [Route("api/[controller]")]
    public class CityController : ControllerBase
    {
        private readonly IUnitOfWork uow;
        private readonly ILogger<CityController> _logger;
        private readonly IMapper mapper;

        public CityController(IUnitOfWork uow, ILogger<CityController> logger, IMapper mapper)
        {
            this.uow = uow;
            _logger = logger;
            this.mapper = mapper;
        }

        [HttpGet("getcities")]
        public async Task<IActionResult> GetCities()
        {
            _logger.LogInformation("Getting cities on endpoint ");

            var cities = await uow.CityRepository.GetCitiesAsync();

            var citiesDto = mapper.Map<IEnumerable<CityDTO>>(cities);

            return Ok(citiesDto);
        }

        [HttpPost("addcity")]
        public async Task<IActionResult> AddCities(CityDTO cityDto)
        {
            var city = mapper.Map<City>(cityDto);
            city.LastUpdatedBy = 1;
            city.LastUpdatedOn = DateTime.Now;
            uow.CityRepository.AddCity(city);
            await uow.SaveAsync();
            return StatusCode(201);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCity(int id)
        {
            uow.CityRepository.DeleteCity(id);
            await uow.SaveAsync();
            return Ok(id);
        }

        [HttpPut("update/{id}")]
        public async Task<IActionResult> UpdateCity(int id, CityDTO cityDTO)
        {
            var cityFromDB = await uow.CityRepository.FindCityASync(id);

            if (cityFromDB == null)
            {
                return NotFound();
            }

            cityFromDB.LastUpdatedBy = 1;
            cityFromDB.LastUpdatedOn = DateTime.Now;
            mapper.Map(cityDTO, cityFromDB);
            await uow.SaveAsync();
            return StatusCode(200);
        }

        [HttpPatch("{id}")]
        public async Task<IActionResult> PatchCity(
    int id,
    [FromBody] JsonPatchDocument<CityDTO> patchDoc)
        {
            if (patchDoc == null)
                return BadRequest();

            var cityFromDb = await uow.CityRepository.FindCityASync(id);

            if (cityFromDb == null)
                return NotFound();

            var cityDto = mapper.Map<CityDTO>(cityFromDb);

            patchDoc.ApplyTo(cityDto, ModelState);

            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            mapper.Map(cityDto, cityFromDb);

            cityFromDb.LastUpdatedOn = DateTime.Now;
            cityFromDb.LastUpdatedBy = 1;

            await uow.SaveAsync();

            return NoContent();
        }
    }
}