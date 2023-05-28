import React from "react";
import Pagina from "../../components/Pagina";
import data from "@/services/data";
import { Card, Col, Row } from "react-bootstrap";

const Detalhes = ({ index }) => {
  const transformacoes = data.transformacoes;
  var i = 0;
  var alien = "";
  {
    while (true) {
      if (transformacoes[i].id == index) {
        alien = transformacoes[i];
        break;
      }
      i += 1;
    }
  }
  return (
    <Pagina titulo={alien.nome}>
      <Row style={{ marginBottom: 50 }}>
        <Col md={3}>
          <Card.Img variant="top" src={alien.imagem} />
        </Col>

        <Col md={9}>
          <p>
            <strong>Raça: </strong>
            {alien.raca}
          </p>
          <p>
            <strong>Habilidades: </strong>
            {alien.poderes}
          </p>
          <div>
            <strong>Aparições: </strong>
            <ul>
              {alien.desenho.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
      {/* <h1 style={{ marginTop: 30 }}>
        <strong>Elenco</strong>
      </h1>
      <br />
      <Row>
        {atores.map((ator) => (
          <Col key={ator.id} md={3} className="my-3">
            <Link
              href={`../ator/${ator.id}`}
              style={{ textDecoration: "none" }}
              className="text-black"
            >
              <Card className="p-1">
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${ator.profile_path}`}
                />
                <Card.Title>
                  <em>{ator.name}</em>
                </Card.Title>
              </Card>
            </Link>
          </Col>
        ))}
      </Row> */}
      {alien.supremo ? (
        <>
          <Row>
            <Col md={3}>
              <Card.Img variant="top" src={alien.supremoImagem} />
            </Col>
            <Col md={9}>
              <h3>Supremo:</h3>
              <p>{alien.supremo}</p>
            </Col>
          </Row>
        </>
      ) : (
        ""
      )}
    </Pagina>
  );
};

export default Detalhes;

export async function getServerSideProps(context) {
  const index = context.params.id;
  return { props: { index } };
}
