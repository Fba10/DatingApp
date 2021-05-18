using System.ComponentModel.DataAnnotations;

namespace Api.Dto
{
    public class RegistrarUsuarioDto
    {
        [Required(ErrorMessage = "O nome do usuário é obrigatório", AllowEmptyStrings = false)]
        public string NomeUsuario { get; set; }
        [Required(ErrorMessage = "A senha é obrigatório", AllowEmptyStrings = false)]
        [StringLength(8, MinimumLength = 4)]
        public string Senha { get; set; }
    }
}