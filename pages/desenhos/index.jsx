import React, { useEffect, useState } from "react";
import Pagina from "../../components/Pagina";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "@/services/data";
import { Row, Col, Card, Button } from "react-bootstrap";

const index = () => {
  const desenhos = data.desenhos;

  return (
    <Pagina titulo="Transformações">
      <Row className="mb-5">
        {desenhos.map((item) => (
          <Col key={item.id} md={3} className="mb-4">
            <Card className="mb-3" style={{ width: 262 }}>
              <Card.Img
                variant="top"
                src={item.imagem}
                style={{ width: 259, height: 259 }}
              />
              <Card.Body>
                <Card.Title>{item.nome}</Card.Title>
                <Card.Text style={{ color: "grey" }}>
                  {item.temporadas} temporadas
                </Card.Text>
                <Card.Text style={{ color: "grey" }}>
                  {item.episodios} episódios
                </Card.Text>
                <div style={{ color: "grey" }}>
                  <strong>Aparições: </strong>
                  <ul>
                    {item.aliens.map((item2) => (
                      <li style={{ color: "grey" }}>{item2}</li>
                    ))}
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Pagina>
  );
};

export default index;
