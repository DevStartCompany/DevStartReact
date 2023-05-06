import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export function SignIn() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Entrar</h1>

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
          <Link to={"/criar-conta"}>Ainda não tenho uma conta</Link>
          <button className={styles.submit_button} type="submit">
            Criar conta
          </button>
        </div>
      </form>
    </div>
  );
}
