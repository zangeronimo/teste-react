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

        [MinLength(10, ErrorMessage = "Este campo deve conter 10 caracteres")]
        [MaxLength(10, ErrorMessage = "Este campo deve conter 10 caracteres")]
        public string Birthday { get; set; }

        // public DateTime CreateDate { get; set; }

        // public DateTime LastUpdateDate { get; set; }
    }
}