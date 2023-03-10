import { Container, Form, Background } from "./styles";
import { Link } from "react-router-dom";


import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { FiLock, FiMail, FiUser } from "react-icons/fi";


export function SignUp(){
  return(
    <Container>
      <Background />

      <Form>
        <h1>RocketNotes</h1>
        <p>Aplicação para organizar e gerenciar seus links úteis</p>
        <h2>Crie sua conta</h2>

        <Input placeholder="Nome" type="text" icon={FiUser}/>
        <Input placeholder="Email" type="email" icon={FiMail}/>
        <Input placeholder="Senha" type="password" icon={FiLock}/>

        <Button title="Cadastrar"/>
        <Link to="/">
          Voltar para o login
        </Link>
      </Form>


    </Container>
    )
}