namespace Api.Entidades
{
    public class Usuario
    {
        public int Id { get; set; }
        public string NomeUsuario { get; set; }
        public byte[] HashSenha { get; set; }
        public byte[] SaltSenha { get; set; }
    }
}