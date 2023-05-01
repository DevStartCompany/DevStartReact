export function SignIn() {
  return (
    <div>
      <h1>Criar conta</h1>
      {/* <img className="logo" src={DevStartLogo} /> */}
      <form>
        <label className="avatar-input-field" htmlFor="input-avatar">
          {avatar ? (
            <img className="avatar-img" src={avatar} />
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
