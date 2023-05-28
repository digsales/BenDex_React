import React from "react";
import Cabecalho from "./Cabecalho";
import { Container } from "react-bootstrap";
import Rodape from "./Rodape";

const Pagina = (props) => {
  return (
    <>
      <Cabecalho />

      <div
        className="py-3 text-center text-white mb-3"
        style={{ backgroundColor: "black" }}
      >
        <Container>
          <h1>{props.titulo}</h1>
        </Container>
      </div>

      <Container style={{ marginBottom: 100 }}>{props.children}</Container>

      <Rodape />
    </>
  );
};

export default Pagina;
