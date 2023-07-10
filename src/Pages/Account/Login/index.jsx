import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { Container, CardForm } from "../../../Styles/Container";
import { Form, ButtonForm, LabelStyled } from "../../../Styles/Form";
import Input from "../../../Components/Input/index";
import Image from "../../../assets/logo.png";

import { UserGlobalContext } from "../../../Context/UserContext";
import { Parag } from "../../../Styles/Text";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer/FooterGeral/index";

const Login = () => {
  const { loginUser, verifyLogin, load, error, loged, user } =
    useContext(UserGlobalContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    verifyLogin();
  }, []);

  const loginUserSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password);
  };

  if (loged) return navigate(`/notes/${user.id}`);

  return (
    <>
      <Header />
      <Container align="left">
        <CardForm onSubmit={loginUserSubmit}>
          <img src={Image} alt="" />
          {error && <Parag color="#6713CF">{error}</Parag>}
          <Form>
            <LabelStyled>Email</LabelStyled>
            <Input
              type="email"
              name="email"
              value={email}
              placeholder="Insira seu email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <LabelStyled>Senha</LabelStyled>
            <Input
              type="password"
              name="password"
              value={password}
              placeholder="Insira sua senha"
              onChange={(e) => setPassword(e.target.value)}
            />

            {load ? (
              <ButtonForm background="#6713CF">Carregando...</ButtonForm>
            ) : (
              <ButtonForm background="#6713CF">Entrar</ButtonForm>
            )}
          </Form>
          <Link to="/register">Cadastre-se?</Link>
        </CardForm>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
