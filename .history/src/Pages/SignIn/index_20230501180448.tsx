import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export function SignIn() {
  return (
    <div className={styles.conatiner}>
      <h1>Entrar</h1>

      <form>
        <label className={styles.text_form_field}>
          email
          <input className={styles.text_input} />
        </label>

        <label className={styles.text_form_field}>
          senha
          <input className={styles.text_input} type="password" />
        </label>
        <div className={styles.footer_form}>
          <Link to={"/entrar"}>Já possui uma conta</Link>
          <button className={styles.submit_button} type="submit">
            Criar conta
          </button>
        </div>
      </form>
    </div>
  );
}
