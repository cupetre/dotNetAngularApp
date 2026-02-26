using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Build.Tasks;

namespace backend.DTOs
{
    public class CityDTO
    {
        public int Id { get; set; }

        [Required(ErrorMessage ="Name is not entered correctly.")]
        public string? Name { get; set; }

        [Required(ErrorMessage = "Country is not entered correctly.")]
        public string? Country { get; set; }
    }
}