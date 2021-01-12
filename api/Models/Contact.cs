using System.ComponentModel.DataAnnotations;
using System;
namespace api.Models
{
    public class Contact
    {
        [Key]
        public int Id { get; set; }

        [MinLength(3, ErrorMessage = "Este campo deve conter entre 3 e 80 caracteres")]
        [MaxLength(80, ErrorMessage = "Este campo deve conter entre 3 e 80 caracteres")]
        public string Name { get; set; }

        [MinLength(3, ErrorMessage = "Este campo deve conter entre 3 e 80 caracteres")]
        [MaxLength(80, ErrorMessage = "Este campo deve conter entre 3 e 80 caracteres")]
        public string Email { get; set; }

        public DateTime? Birth { get; set; }

        public DateTime? Created_at { get; set; }

        public DateTime? Updated_at { get; set; }
    }
}