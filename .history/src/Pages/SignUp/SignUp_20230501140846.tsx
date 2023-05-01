import { Camera } from "phosphor-react";

import DevStartLogo from "../../assets/devstart-logo.png";
import "./styles.css";

export function SignUp() {
  return (
    <div className="container">
      <h1>Criar conta</h1>
      <img className="logo" src={DevStartLogo} />
      <form>
        <label className="avatar-input-field" htmlFor="input-avatar">
          <Camera size={32} />
          selecionar avatar
          <input id="input-avatar" type="file" />
        </label>

        <label className="text-form-field">
          nome
          <input className="text-input" />
        </label>

        <label className="text-form-field">
          usuário
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
          <a>Já possui uma conta</a>
          <button className="submit-button" type="submit">
            Criar conta
          </button>
        </div>
      </form>
    </div>
  );
}
