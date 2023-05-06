// import "./styles.css";
import userLogo from "../../assets/user.png";
import { BtnNavigation } from "../../components/btn-navigation";
import { Stacks } from "../../components/stacks";
import * as PhosphorIcons from "phosphor-react";
import { useNavigate } from "react-router-dom";
import {
  HomeContainer,
  LeftSection,
  UserDiv,
  UserInfo,
  MindSec,
  UserLogo,
  UserInfo2,
  UserInfoText,
  CourseTitle,
  StacksField,
  MindUserInformation,
} from "./styles";
import { Header } from "../../components/Header";

export function Home() {
  // const navigate = useNavigate();
  // const token = localStorage.getItem("token");
  // if (!token) {
  //   navigate("/entrar");
  // }

  return (
    <HomeContainer>
      <LeftSection>
        <UserDiv>
          <img src={userLogo} />
          <UserInfo>
            <p className="username">NOME</p>
            <p className="userlogin">USUÁRIO</p>
          </UserInfo>
        </UserDiv>
        <div>
          <BtnNavigation content="Principal" />
          <BtnNavigation content="Cursos pendentes" />
          <BtnNavigation content="Perfil" />
          <BtnNavigation content="Configurações" />
          <BtnNavigation content="Logout" />
        </div>
      </LeftSection>

      <MindSec>
        <MindUserInformation>
          <UserLogo src={userLogo} />
          <UserInfo2>
            <UserInfoText typeOfText={"hello"}>Bem vindo,</UserInfoText>
            <UserInfoText typeOfText={"username"}>NOME</UserInfoText>
          </UserInfo2>
        </MindUserInformation>

        <CourseTitle>Cursos</CourseTitle>
        <StacksField>
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
        </StacksField>
      </MindSec>

      <section className="right-sec"></section>
    </HomeContainer>
  );
}
