import "../../App.css";
import userLogo from "../../assets/user.png"
import { BtnNavigation } from "../../components/btn-navigation";
import { Stacks } from "../../components/stacks";
import PhosphorIcons from "phosphor-react";

export function Home() {
  return (
      <section id="main">
        <section className="left-sec">
          <div className="flex userdiv">
          <img className="userlogo" src={userLogo}/>
          <div className="userinfo column">
            <p className="username">NOME</p>
            <p className="userlogin">USUÁRIO</p>
          </div>
          </div>
      <div className="btn-navigation">
          <BtnNavigation content="Principal"/> 
          <BtnNavigation content="Cursos pendentes"/>
          <BtnNavigation content="Perfil"/>
          <BtnNavigation content="Configurações"/>
          <BtnNavigation content="Logout"/>

      </div>
        </section>

        <section className="mid-sec">
        <div className="flex mid2">
          <img className="userlogo" src={userLogo}/>
          <div className="userinfo-2">
          <p className="hello">Bem vindo,</p>
          <p className="username2">NOME</p>
          </div>
        </div>


        <p className="cursos-title">Cursos</p>
        <div className="flex stacks">
        <Stacks  color="yellow" content="Front End" icon={undefined}/>
        <Stacks color="green" content="Back End" icon={undefined}/>
        <Stacks color="blue" content="DevOps" icon={undefined}/>
        <Stacks color="pink" content="Data Science" icon={undefined} />
        <Stacks color="orange" content="Cyber Security" icon={undefined}/>
        </div>
        </section>

        <section className="right-sec">

        </section>
      </section>

      
  );
}
