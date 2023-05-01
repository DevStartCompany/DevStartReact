import { Link } from "react-router-dom";

export function SignIn() {
  return (
    <div>
      <h1>Entrar</h1>

      <form>
        <label className="text-form-field">
          nome
          <input className="text-input" />
        </label>

        <label className="text-form-field">
          email
          <input className="text-input" />
        </label>

        <label className="text-form-field">
          senha
          <input className="text-input" type="password" />
        </label>
        <div className="footer-form">
          <Link to={"/entrar"}>Já possui uma conta</Link>
          <button className="submit-button" type="submit">
            Criar conta
          </button>
        </div>
      </form>
    </div>
  );
}
