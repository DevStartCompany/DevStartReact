import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export function SignIn() {
  return (
    <div>
      <h1>Entrar</h1>

      <form>
        <label className={styles.text_form_field}>
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
