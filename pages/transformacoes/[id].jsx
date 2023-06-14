import React from "react";
import Pagina from "../../components/Pagina";
import data from "@/services/data";
import { Card, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const Detalhes = ({ index }) => {
  // const transformacoes = data.transformacoes;

  const [alien, setAlien] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get(`/api/transformacoes/${index}`).then((res) => {
      setAlien(res.data);
    });
  }

  return (
    <Pagina titulo={alien.nome}>
      <Row style={{ marginBottom: 50 }}>
        <Col md={3}>
          <Card.Img variant="top" src={alien.imagem} />
        </Col>

        <Col md={9}>
          <p>
            <strong style={{ fontSize: 18 }}>Raça: </strong>
            <br />
            {alien.raca}
          </p>
          <p>
            <strong style={{ fontSize: 18 }}>Habilidades: </strong>
            <br />
            {alien.poderes}
          </p>
          <div>
            <strong style={{ fontSize: 18 }}>Aparições: </strong>
            <ul>
              {alien.desenho?.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
      {alien.supremo ? (
        <>
          <Row>
            <Col md={3}>
              <Card.Img variant="top" src={alien.supremoImagem} />
            </Col>
            <Col md={9}>
              <strong style={{ fontSize: 18 }}>Supremo: </strong>
              <br />
              {alien.supremo}
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
