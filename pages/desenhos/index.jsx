import React, { useEffect, useState } from "react";
import Pagina from "../../components/Pagina";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "@/services/data";
import { Row, Col, Card, Button } from "react-bootstrap";
import MeuCard from "@/components/MeuCard";

const index = () => {
  // const desenhos = data.desenhos;

  const [desenhos, setDesenhos] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/desenhos").then((res) => {
      setDesenhos(res.data);
    });
  }

  return (
    <Pagina titulo="Desenhos">
      <Row className="mb-5">
        {desenhos.map((item) => (
          <Col key={item.id} md={3} className="mb-4">
            <MeuCard>
              <Card.Img
                variant="top"
                src={item.imagem}
                // style={{ width: 259, height: 180 }}
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
                  Aparições:
                  <ul key={item.id}>
                    {item.aliens.map((item2) => (
                      <li style={{ color: "grey" }}>{item2}</li>
                    ))}
                  </ul>
                </div>
              </Card.Body>
            </MeuCard>
          </Col>
        ))}
      </Row>
    </Pagina>
  );
};

export default index;
