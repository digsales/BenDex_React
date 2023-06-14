import React from "react";
import Pagina from "../../components/Pagina";
import data from "@/services/data";
import { Card, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";

const Detalhes = ({ index }) => {
  // const vilao = data.viloes;

  const [inimigo, setInimigo] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get(`/api/viloes/${index}`).then((res) => {
      setInimigo(res.data);
    });
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
              {inimigo.desenho?.map((item) => (
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
