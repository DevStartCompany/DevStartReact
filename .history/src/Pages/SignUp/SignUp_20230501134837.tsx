import { Camera } from "phosphor-react";

import DevStartLogo from "../../assets/devstart-logo.png";
import "./styles.css";

export function SignUp() {
  return (
    <div className="container">
      <h1>Criar conta</h1>
      <img className="logo" src={DevStartLogo} />
      <form>
        <label className="input-avatar" htmlFor="input-avatar">
          <input id="input-avatar" type="file" />
        </label>

        <label>
          <Camera size={23} />
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
        <div className="footer-form">
          <a>Já possui uma conta</a>
          <button className="submit-button" type="submit">
            Criar conta
          </button>
        </div>
      </form>
    </div>
  );
}
