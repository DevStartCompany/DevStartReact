import startLogo from "../../assets/react.svg";
import "../../App.css";

export function Home() {
  return (
    <header>
      <div className="background">
        <img src={startLogo} className="logo" alt="DevStart Logo" />
      </div>

      <div className="buttons">
        <a href="">EQUIPE</a>
        <a href="">SOBRE</a>
        <a href="">CURSOS</a>
      </div>

      <div className="login">
        <a href="">ENTRAR</a>
      </div>
    </header>
  );
}
