import React, { useEffect, useState } from "react";
import Pagina from "../../components/Pagina";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "@/services/data";
import { Row, Col, Card, Button } from "react-bootstrap";
import MeuCard from "@/components/MeuCard";

const index = () => {
  // const omnitrix = data.omnitrix;
  const [omnitrix, setOmnitrix] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/omnitrix").then((res) => {
      setOmnitrix(res.data);
    });
  }

  return (
    <Pagina titulo="Omnitrix">
      <Row className="mb-5">
        {omnitrix.map((item) => (
          <Row key={item.id} className="mb-4">
            <MeuCard>
              <Row>
                <Col md={3}>
                  <Card.Img
                    variant="top"
                    src={item.imagem}
                    style={{ height: 200, width: "auto" }}
                  />
                </Col>
                <Col>
                  <Card.Body>
                    <Card.Title>{item.nome}</Card.Title>
                    <Card.Text style={{ color: "grey" }}>
                      {item.detalhes}
                    </Card.Text>
                  </Card.Body>
                </Col>
              </Row>
            </MeuCard>
          </Row>
        ))}
      </Row>
    </Pagina>
  );
};

export default index;
