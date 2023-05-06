import { Link } from "react-router-dom";
// import styles from "./styles.module.css";
import {
  Form,
  FooterForm,
  SignInContainer,
  SubmitButton,
  TextFormField,
  TextInput,
  Title,
} from "./styles";

export function SignIn() {
  return (
    <SignInContainer>
      <Title>Entrar</Title>

      <Form>
        <TextFormField>
          Email
          <TextInput />
        </TextFormField>

        <TextFormField>
          Senha
          <TextInput />
        </TextFormField>
        <FooterForm>
          <Link to={"/criar-conta"}>Ainda não tenho uma conta</Link>
          <SubmitButton>Criar conta</SubmitButton>
        </FooterForm>
      </Form>
    </SignInContainer>
  );
}
