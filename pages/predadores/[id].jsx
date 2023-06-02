import React from "react";
import Pagina from "../../components/Pagina";
import data from "@/services/data";
import { Card, Col, Row } from "react-bootstrap";

const Detalhes = ({ index }) => {
  const predadores = data.predadores;
  var i = 0;
  var predador = "";
  {
    while (true) {
      if (predadores[i].id == index) {
        predador = predadores[i];
        break;
      }
      i += 1;
    }
  }
  return (
    <Pagina titulo={predador.nome}>
      <Row style={{ marginBottom: 50 }}>
        <Col md={3}>
          <Card.Img variant="top" src={predador.imagem} />
        </Col>

        <Col md={9}>
          <p>
            <strong style={{ fontSize: 18 }}>Raça: </strong>
            <br />
            {predador.raca}
          </p>
          <p>
            <strong style={{ fontSize: 18 }}>Habilidades: </strong>
            <br />
            {predador.poderes}
          </p>
          <p>
            <strong style={{ fontSize: 18 }}>Presa: </strong>
            <br />
            {predador.presaNome} ({predador.presaRaca})
          </p>
        </Col>
      </Row>
      <Row>
        <p>
          <strong style={{ fontSize: 18 }}>Fraquezas: </strong>
          <br />
          {predador.fraquezas}
        </p>
      </Row>
    </Pagina>
  );
};

export default Detalhes;

export async function getServerSideProps(context) {
  const index = context.params.id;
  return { props: { index } };
}
