using System.ComponentModel.DataAnnotations;

namespace Api.Dto
{
    public class RegistrarUsuarioDto
    {   
        [Required]
         public string NomeUsuario { get; set; }
        [Required]
         public string Senha { get; set; }
    }
}