import React from "react";
import Pagina from "../../../components/Pagina";
import data from "@/services/data";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import MinhaArea from "@/components/MinhaArea";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { useRouter } from "next/router";

const Detalhes = ({ index }) => {
  const { push, query } = useRouter();

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

  function excluir() {
    if (confirm("Você tem certeza?")) {
      axios.delete(`/api/viloes/${query.id}`);
    }
    push("/viloes");
  }

  return (
    <Pagina titulo={inimigo.nome}>
      <MinhaArea>
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
      </MinhaArea>
      <div className="text-center" style={{ marginTop: 50 }}>
        <Button
          variant="success"
          href={`/viloes/${query.id}/form`}
          style={{ marginRight: 50 }}
        >
          <FaPencilAlt color="white" size={14} /> Editar
        </Button>
        <Button variant="danger" onClick={excluir}>
          <FaTrashAlt color="white" size={14} /> Excluir
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
