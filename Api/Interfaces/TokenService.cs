using Api.Entidades;

namespace Api.Interfaces
{
    public interface ITokenService
    {
         string CriarToken(Usuario usuer);
    }
}