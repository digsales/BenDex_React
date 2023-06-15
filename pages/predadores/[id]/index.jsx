import React, { useEffect, useState } from "react";
import Pagina from "../../../components/Pagina";
import axios from "axios";
import data from "@/services/data";
import { Button, Card, Col, Row } from "react-bootstrap";
import { query } from "firebase/database";
import { useRouter } from "next/router";

const Detalhes = ({ index }) => {
  // const predadores = data.predadores;

  const { push, query } = useRouter();

  const [predador, setPredador] = useState([]);

  useEffect(() => {
    if (query.id) {
      axios.get(`/api/predadores/${query.id}`).then((res) => {
        setPredador(res.data);
      });
    }
  }, [query.id]);

  function excluir() {
    axios.delete(`/api/predadores/${query.id}`);
    push("/predadores");
  }

  return (
    <Pagina titulo={predador.nome}>
      <Row style={{ marginBottom: 50 }}>
        <Col md={3}>
          <Card.Img variant="top" src={predador.imagem} />
        </Col>

        <Col md={9}>
          {predador.raca ? (
            <p>
              <strong style={{ fontSize: 18 }}>Raça: </strong>
              <br />
              {predador.raca}
            </p>
          ) : (
            <></>
          )}
          <p>
            <strong style={{ fontSize: 18 }}>Presa: </strong>
            <br />
            {predador.presaNome} ({predador.presaRaca})
          </p>
          <p>
            <strong style={{ fontSize: 18 }}>Habilidades: </strong>
            <br />
            {predador.poderes}
          </p>
        </Col>
      </Row>
      {predador.fraquezas ? (
        <Row>
          <p>
            <strong style={{ fontSize: 18 }}>Fraquezas: </strong>
            <br />
            {predador.fraquezas}
          </p>
        </Row>
      ) : (
        <></>
      )}
      <div className="text-center" style={{ marginTop: 50 }}>
        <Button
          variant="primary"
          href={`/predadores/${query.id}/form`}
          style={{ marginRight: 50 }}
        >
          Editar
        </Button>
        <Button variant="danger" onClick={excluir}>
          Excluir
        </Button>
      </div>
    </Pagina>
  );
};

export default Detalhes;

export async function getServerSideProps(context) {
  const index = context.params.id;
  return { props: { index } };
}
