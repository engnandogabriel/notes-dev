import { useContext, useEffect, useState } from "react";
import Header from "../../Components/Header/index";
import { Container } from "../../Styles/Container";
import { Title, Parag } from "../../Styles/Text";
import { Link } from "react-router-dom";
import Load from "../../Components/Load/index";
import { Button } from "../../Styles/Button";
import Presentation from "../../assets/presentation.png";
import { UserGlobalContext } from "../../Context/UserContext";
import Footer from "../../Components/Footer/FooterGeral/index";

const Home = () => {
  const { loadInitial, verifyLogin, loged, user } =
    useContext(UserGlobalContext);

  useEffect(() => {
    verifyLogin();
  }, []);

  if (loadInitial) return <Load />;

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>Crie notas facilmente e acesse quando quiser na nuvem!</Title>
          <Parag>
            Crie incríveis notas e armazene de forma gratuita e tenha a acesso a
            qualquer momento{" "}
          </Parag>
          {loged === true ? (
            <Link to={`/notes/${user.id}`}>
              <Button>Acessar notas</Button>
            </Link>
          ) : (
            <Link to="/register">
              <Button>Registre-se agora!</Button>
            </Link>
          )}
        </div>
        <img src={Presentation} alt="" />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
