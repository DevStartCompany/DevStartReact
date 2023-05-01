import DevStartLogo from "../../assets/devstart-logo.png";
import "./styles.css";

export function SignUp() {
  return (
    <div className="container">
      <h1>Criar conta</h1>
      <img className="logo" src={DevStartLogo} />
      <form>
        <label>
          avatar
          <input type="file" />
        </label>

        <label>
          nome
          <input className="text-input" />
        </label>

        <label>
          usuário
          <input className="text-input" />
        </label>

        <label>
          email
          <input className="text-input" />
        </label>

        <label>
          senha
          <input className="text-input" type="password" />
        </label>
        <div>
          <a>entrar</a>
          <button type="submit">Criar conta</button>
        </div>
      </form>
    </div>
  );
}
