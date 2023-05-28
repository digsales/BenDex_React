import React from "react";
import Pagina from "../../components/Pagina";
import data from "@/services/data";
import { Card, Col, Row } from "react-bootstrap";

const Detalhes = ({ index }) => {
  const vilao = data.viloes;
  var i = 0;
  var inimigo = "";
  {
    while (true) {
      if (vilao[i].id == index) {
        inimigo = vilao[i];
        break;
      }
      i += 1;
    }
  }
  return (
    <Pagina titulo={inimigo.nome}>
      <Row style={{ marginBottom: 50 }}>
        <Col md={3}>
          <Card.Img variant="top" src={inimigo.imagem} />
        </Col>

        <Col md={9}>
          <p>
            <strong style={{ fontSize: 18 }}>Raça: </strong>
            <br />
            {inimigo.raca}
          </p>
          <p>
            <strong style={{ fontSize: 18 }}>Habilidades: </strong>
            <br />
            {inimigo.poderes}
          </p>
          <div>
            <strong style={{ fontSize: 18 }}>Aparições: </strong>
            <ul>
              {inimigo.desenho.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
      <p>
        <strong style={{ fontSize: 18 }}>Planos: </strong>
        <br />
        {inimigo.plano}
      </p>
    </Pagina>
  );
};

export default Detalhes;

export async function getServerSideProps(context) {
  const index = context.params.id;
  return { props: { index } };
}
