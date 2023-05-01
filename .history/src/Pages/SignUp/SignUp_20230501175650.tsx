import { ChangeEvent, useState } from "react";
import { Camera } from "phosphor-react";
import { Link } from "react-router-dom";
import DevStartLogo from "../../assets/devstart-logo.png";
import styles from "./styles.module.css";
import { toBase64 } from "../../utils/toBase64";

export function SignUp() {
  const [avatar, setAvatar] = useState<string | null>(null); //Depois usar no lugar do useState o react-hook-form.

  function handleLoadAvatar(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      toBase64(event.target.files[0])
        .then((base64Image) => setAvatar(base64Image as string))
        .catch((error) => {
          console.log(error);
          alert("error ao carregar o avatar");
        });
    }
  }

  return (
    <div className="styles.container">
      <h1>Criar conta</h1>
      {/* <img className="logo" src={DevStartLogo} /> */}
      <form>
        <label className={styles.avatar_input_field} htmlFor="input-avatar">
          {avatar ? (
            <img className={styles.avatar - img} src={avatar} />
          ) : (
            <>
              <Camera size={32} />
              selecionar avatar
            </>
          )}
          <input
            id="input-avatar"
            type="file"
            onChange={(event) => handleLoadAvatar(event)}
          />
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
          <Link to={"/entrar"}>Já possui uma conta</Link>
          <button className="submit-button" type="submit">
            Criar conta
          </button>
        </div>
      </form>
    </div>
  );
}
