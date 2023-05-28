import React, { useEffect, useState } from "react";
import Pagina from "../../components/Pagina";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "@/services/data";
import { Row, Col, Card, Button } from "react-bootstrap";

const index = () => {
  const transformacoes = data.transformacoes;

  return (
    <Pagina titulo="Transformações">
      <Row className="mb-5">
        {transformacoes.map((item) => (
          <Col key={item.id} md={3} className="mb-4">
            <Card className="mb-3" style={{ width: 262 }}>
              <Card.Img
                variant="top"
                src={item.imagem}
                style={{ width: 259, height: 259 }}
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
            </Card>
          </Col>
        ))}
        <Col md={3} className="mb-4">
          <Card className="mb-3" style={{ width: 262 }}>
            <Card.Img
              variant="top"
              src="https://lojastalim.com.br/894-large_default/placa-decorativa-personalizada-sua-imagem-aqui.jpg"
              style={{ width: 259, height: 259 }}
            />
            <Card.Body>
              <Card.Title>Nome</Card.Title>
              <Card.Text style={{ color: "grey" }}>Espécie</Card.Text>
            </Card.Body>
            <Button style={{ backgroundColor: "grey" }}>Adicionar</Button>
          </Card>
        </Col>
      </Row>
    </Pagina>
  );
};

export default index;
