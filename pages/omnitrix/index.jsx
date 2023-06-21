import React, { useEffect, useState } from "react";
import Pagina from "../../components/Pagina";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "@/services/data";
import { Row, Col, Card, Button } from "react-bootstrap";
import MeuCard from "@/components/MeuCard";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { useRouter } from "next/router";

const index = () => {
  // const omnitrix = data.omnitrix;
  const [omnitrix, setOmnitrix] = useState([]);
  const { push } = useRouter();

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/omnitrix").then((res) => {
      setOmnitrix(res.data);
    });
  }

  function excluir(item) {
    if (confirm("Você tem certeza?")) {
      axios.delete(`/api/omnitrix/${item}`);
    }
    push("/omnitrix");
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
                <Col md={6}>
                  <Card.Body>
                    <Card.Title>{item.nome}</Card.Title>
                    <Card.Text style={{ color: "grey" }}>
                      {item.detalhes}
                    </Card.Text>
                  </Card.Body>
                </Col>
                <Col md={3}>
                  <Card.Footer>
                    <Row>
                      <Button
                        variant="success"
                        href={`/omnitrix/${item.id}`}
                        style={{ marginRight: 50 }}
                      >
                        <FaPencilAlt color="white" size={14} /> Editar
                      </Button>
                      <Button variant="danger" onClick={() => excluir(item.id)}>
                        <FaTrashAlt color="white" size={14} /> Excluir
                      </Button>
                    </Row>
                  </Card.Footer>
                </Col>
              </Row>
            </MeuCard>
          </Row>
        ))}
        <Row className="mb-4">
          <MeuCard>
            <Row>
              <Col md={3}>
                <Card.Img
                  variant="top"
                  src="https://static.vecteezy.com/ti/vetor-gratis/t1/4968473-upload-or-add-a-picture-jpg-file-concept-illustration-flat-design-vector-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-etc-vetor.jpg"
                  style={{ height: 200, width: "auto" }}
                />
              </Col>
              <Col md={6}>
                <Card.Body>
                  <Card.Title>Nome</Card.Title>
                  <Card.Text style={{ color: "grey" }}>Detalhes</Card.Text>
                </Card.Body>
              </Col>
              <Col md={3}>
                <Card.Footer>
                  <Row>
                    <Button
                      style={{ backgroundColor: "grey" }}
                      href="/omnitrix/form"
                    >
                      Adicionar
                    </Button>
                  </Row>
                </Card.Footer>
              </Col>
            </Row>
          </MeuCard>
        </Row>
      </Row>
    </Pagina>
  );
};

export default index;
