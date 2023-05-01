import "./styles.css";

export function SignUp() {
  return (
    <div className="container">
      <h1>Criar conta</h1>
      <form>
        <label>
          <p>avatar:</p>
          <input type="file" />
        </label>

        <label>
          <p>nome:</p>
          <input placeholder="nome" />
        </label>

        <label>
          <p>usuário:</p>
          <input placeholder="usuário" />
        </label>

        <label>
          <p>email:</p>
          <input />
        </label>

        <label>
          <p>senha</p>
          <input type="password" />
        </label>
        <div>
          <a>entrar</a>
          <button type="submit">Criar conta</button>
        </div>
      </form>
    </div>
  );
}
