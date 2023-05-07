import "./styles.css";
import userLogo from "../../assets/user.png";
import { BtnNavigation } from "../../components/btn-navigation";
import { Stacks } from "../../components/stacks";
import * as PhosphorIcons from "phosphor-react";
import  NestImage  from "../../assets/nest-og.png"

//import { useNavigate } from "react-router-dom";

export function Home() {
//const navigate = useNavigate()
//const token = localStorage.getItem("token");
//if (!token) {
 // navigate('/entrar')
//}


  return (
    <section id="main">
      <section className="left-sec">
        <div className="flex userdiv">
          <img className="userlogo" src={userLogo} />
          <div className="userinfo column">
            <p className="username">NOME</p>
            <p className="userlogin">USUÁRIO</p>
          </div>
        </div>
        <div className="btn-navigation">
          <BtnNavigation icon={<PhosphorIcons.ShieldCheck size={32}/>} content="Principal" />
          <BtnNavigation icon={<PhosphorIcons.MonitorPlay size={32}/>} content="Cursos pendentes" />
          <BtnNavigation icon={<PhosphorIcons.UserCircleGear size={32}/>} content="Perfil" />
          <BtnNavigation icon={<PhosphorIcons.Gear size={32}/>} content="Configurações" />
          <BtnNavigation icon={<PhosphorIcons.SignOut size={32}/>} content="Logout" />
        </div>
      </section>

      <section className="mid-sec">
        <div className="flex mid2">
            <img className="userlogo" src={userLogo} />
            <div className="userinfo-2">
            <p className="hello">Bem vindo,</p>
            <p className="username2">NOME</p>
          </div>
        </div>

        <p className="cursos-title">Cursos</p>
        <div className="flex stacks">
          <Stacks
            color="yellow"
            content="Front End"
            icon={<PhosphorIcons.Browsers size={32} />}
          />
          <Stacks
            color="green"
            content="Back End"
            icon={<PhosphorIcons.HardDrives size={32} />}
          />
          <Stacks
            color="blue"
            content="DevOps"
            icon={<PhosphorIcons.Cloud size={32} />}
          />
          <Stacks
            color="pink"
            content="Data Science"
            icon={<PhosphorIcons.TreeStructure size={32} />}
          />
          <Stacks
            color="orange"
            content="Cyber Security"
            icon={<PhosphorIcons.ShieldCheck size={32} />}
          />
        </div>


        <div className="courses flex space-around">
            <div className="course">
              <img className="course-image cursor" src={NestImage}></img>
              
              <div className="course-text">
                <div className="flex">              
                  <PhosphorIcons.Users size={24} />
                  <p className="students ">PuxarBanco Estudantes</p>
                </div>

                  <h1 className="course-name cursor underline">Curso de PuxarBanco do Básico ao Avançado</h1>
                    <div className="teacher">
                      <img className="teacher-image cursor" src={userLogo}></img>
                      <p className="teacher-name cursor underline">PuxarBanco (Professor)</p>
                    </div>
                  </div>

            </div>

            <div className="curso-2">

            </div>

            <div className="curso-3">

            </div>
        </div>
      </section>

      <section className="right-sec">


      </section>
    </section>

    
  );

}

