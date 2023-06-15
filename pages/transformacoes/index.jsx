import React, { useEffect, useState } from "react";
import Pagina from "../../components/Pagina";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import data from "@/services/data";
import { Row, Col, Card, Button } from "react-bootstrap";
import MeuCard from "@/components/MeuCard";

const index = () => {
  // const transformacoes = data.transformacoes;
  const [transformacoes, setTransformacoes] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/transformacoes").then((res) => {
      setTransformacoes(res.data);
    });
  }

  return (
    <Pagina titulo="Transformações">
      <Row className="mb-5">
        {transformacoes.map((item) => (
          <Col key={item.id} md={3} className="mb-4">
            <MeuCard>
              <Card.Img
                variant="top"
                src={item.imagem}
                style={{ height: 259, justifyContent: "center" }}
              />
              <Card.Body>
                <Card.Title>{item.nome}</Card.Title>
                <Card.Text style={{ color: "grey" }}>{item.raca}</Card.Text>
              </Card.Body>
              <Button
                style={{ backgroundColor: "green" }}
                href={"/transformacoes/" + item.id}
              >
                Mais Informações
              </Button>
            </MeuCard>
          </Col>
        ))}
        <Col md={3} className="mb-4">
          <MeuCard>
            <Card.Img
              variant="top"
              src="https://static.vecteezy.com/ti/vetor-gratis/t1/4968473-upload-or-add-a-picture-jpg-file-concept-illustration-flat-design-vector-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-etc-vetor.jpg"
              style={{ height: 259, justifyContent: "center" }}
            />
            <Card.Body>
              <Card.Title>Nome</Card.Title>
              <Card.Text style={{ color: "grey" }}>Espécie</Card.Text>
            </Card.Body>
            <Button
              style={{ backgroundColor: "grey" }}
              href="/transformacoes/form"
            >
              Adicionar
            </Button>
          </MeuCard>
        </Col>
      </Row>
    </Pagina>
  );
};

export default index;
