import React, { ReactHTMLElement, useState } from "react";
import { Camera } from "phosphor-react";

import DevStartLogo from "../../assets/devstart-logo.png";
import "./styles.css";
import { toBase64 } from "../../utils/toBase64";

export function SignUp() {
  const [avatar, setAvatar] = useState<string | null>(null); //Depois usar no lugar do useState, o react-hook-form.

  function handleLoadAvatar(event: any) {
    toBase64(event.target.files[0])
      .then((base64Image) => setAvatar(base64Image as string))
      .catch((error) => {
        console.log(error);
        alert("error ao carregar o avatar");
      });
  }

  return (
    <div className="container">
      <h1>Criar conta</h1>
      <img className="logo" src={DevStartLogo} />
      <form>
        <label className="avatar-input-field" htmlFor="input-avatar">
          {avatar ? (
            <img src={avatar} />
          ) : (
            <>
              <Camera size={32} />
              selecionar avatar
              <input
                id="input-avatar"
                type="file"
                onChange={(event) => handleLoadAvatar(event)}
              />
            </>
          )}
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
