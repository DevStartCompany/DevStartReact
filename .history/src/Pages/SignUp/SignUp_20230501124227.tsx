import "./styles.css";

export function SignUp() {
  return (
    <div className="container">
      <h1>Criar conta</h1>
      <form>
        <label>
          <p>nome:</p>
          <input />
        </label>

        <label>
          <p>usuário:</p>
          <input />
        </label>

        <label>
          <p>email:</p>
          <input />
        </label>

        <label>
          <p>senha</p>
          <input type="password" />
        </label>
        <button>Criar conta</button>
        <a>Entrar</a>
      </form>
    </div>
  );
}
