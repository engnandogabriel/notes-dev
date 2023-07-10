// import React from "react";

import { Container, CardForm } from "../../../Styles/Container";
import { Form, ButtonForm } from "../../../Styles/Form";
import { Parag } from "../../../Styles/Text";
import Header from "../../../Components/Header";
import Input from "../../../Components/Input";
import Image from "../../../assets/logo.png";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserGlobalContext } from "../../../Context/UserContext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { createUser, user, error, load } = useContext(UserGlobalContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const create = await createUser(name, email, password);
    if (create) return navigate(`/notes/${window.localStorage.getItem("id")}`);
  };

  return (
    <>
      <Header />
      <Container align="left">
        <CardForm>
          <img src={Image} alt="" />
          {error && <Parag color="#6713CF">{error}</Parag>}
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              label="Nome"
              value={name}
              placeholder="Insira seu nome"
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email"
              label="Email"
              value={email}
              placeholder="Insira seu email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              type="Password"
              label="Senha"
              value={password}
              placeholder="Insira sua senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            {load ? (
              <ButtonForm background="#6713CF">Carregando...</ButtonForm>
            ) : (
              <ButtonForm background="#6713CF">Cadastrar</ButtonForm>
            )}
          </Form>
          <Link to="/login">Ja possui conta?</Link>
        </CardForm>
      </Container>
    </>
  );
};

export default Register;
