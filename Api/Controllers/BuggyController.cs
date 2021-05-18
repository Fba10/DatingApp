using Api.Data;
using Api.Entidades;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    public class BuggyController : BaseController
    {
        private readonly DataContext _context;
        public BuggyController(DataContext context)
        {
            _context = context;

        }
        [Authorize]
        [HttpGet("auth")]
        public ActionResult<string> GetSecrets() {
            return "secret text";
        }
      
        [HttpGet("not-found")]
        public ActionResult<Usuario> GetNotFaund() {
            var thing = _context.Usuarios.Find(-1);
            if(thing == null) return NotFound();
            return Ok(thing);
        }
         
        [HttpGet("server-error")]
        public ActionResult<string> GetSeverError() {
             var thing = _context.Usuarios.Find(-1);
             var thingToReturn = thing.ToString();
            
            return thingToReturn;
        }
        [HttpGet("bad-request")]
        public ActionResult<string> GetBadRequest() {
            return BadRequest("Bad Request");
        }

    }
}