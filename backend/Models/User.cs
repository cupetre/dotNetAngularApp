using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Humanizer;

namespace backend.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required(ErrorMessage ="Username not entered")]
        public string? Username {  get; set; }
        
        [Required(ErrorMessage ="Password not entered")]
        public string? Password { get; set; }
    }
}