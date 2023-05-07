import { Outlet } from "react-router-dom";
import devstartLogo from "../../assets/devstart-logo.png";
import { AuthField, HeaderContainer, Logo, RoutersField } from "./styles";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <>
      <HeaderContainer>
        <div className="background">
          <Link to={"/"}>
            <Logo src={devstartLogo} alt="DevStart Logo" />
          </Link>
        </div>

        <RoutersField>
          <a href="">equipe</a>
          <a href="">sobre</a>
          <Link to="/curso">cursos</Link>
        </RoutersField>

        <AuthField>
          <Link to={"/entrar"}>entrar</Link>
          <Link to={"/criar-conta"}>criar conta</Link>
        </AuthField>
      </HeaderContainer>
      <Outlet />
    </>
  );
}
