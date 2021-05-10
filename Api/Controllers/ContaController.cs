using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Api.Data;
using Api.Dto;
using Api.Entidades;
using Api.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers
{
    public class ContaController : BaseController
    {
        private readonly DataContext _context;
        private readonly ITokenService _tokenService;
        public ContaController(DataContext context, ITokenService tokenService)
        {
            _tokenService = tokenService;
            _context = context;
        }

        [HttpPost("registrar")]
        public async Task<ActionResult<UsuarioDto>> Registrar(RegistrarUsuarioDto registroDto)
        {


            if (await UsuarioExiste(registroDto.NomeUsuario)) return BadRequest("Usuário Já Existe");


            using var hmac = new HMACSHA512();

            var user = new Usuario
            {
                NomeUsuario = registroDto.NomeUsuario.ToLower(),
                HashSenha = hmac.ComputeHash(Encoding.UTF8.GetBytes(registroDto.Senha)),
                SaltSenha = hmac.Key
            };

            _context.Usuarios.Add(user);
            await _context.SaveChangesAsync();

            return new UsuarioDto{
                NomeUsuario = user.NomeUsuario,
                Token = _tokenService.CriarToken(user)
            };

        }

        [HttpPost("login")]
        public async Task<ActionResult<UsuarioDto>> Logar(LoginUsuarioDto loginDto)
        {

            var user = await _context.Usuarios.
            SingleOrDefaultAsync(x => x.NomeUsuario == loginDto.NomeUsuario.ToLower());

            if (user == null) return Unauthorized("Usuário inválido");

            using var hmac = new HMACSHA512(user.SaltSenha);

            var computeHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Senha));

            for (int i = 0; i < computeHash.Length; i++)
            {

                if (computeHash[i] != user.HashSenha[i]) return Unauthorized("Senha inválida");
            }
            return new UsuarioDto{
                NomeUsuario = user.NomeUsuario,
                Token = _tokenService.CriarToken(user)
            };
        }
        private async Task<bool> UsuarioExiste(string nomeUsuario)
        {
            return await _context.Usuarios.AnyAsync(x => x.NomeUsuario == nomeUsuario.ToLower());
        }
    }
}