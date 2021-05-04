using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Data;
using Api.Entidades;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsuariosController : ControllerBase
    {
        private readonly DataContext _context;
        public UsuariosController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Usuario>>> GetUsuarios(){
            
             return  await _context.Usuarios.ToListAsync();
              
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Usuario>> GetUsuario( int id){
            
              return   await _context.Usuarios.FindAsync(id);
              
        }
    }
}