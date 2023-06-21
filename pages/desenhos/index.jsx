import React, { useEffect, useState } from "react";
import Pagina from "../../components/Pagina";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "@/services/data";
import { Row, Col, Card, Button } from "react-bootstrap";
import MeuCard from "@/components/MeuCard";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { query } from "firebase/database";
import { useRouter } from "next/router";

const index = () => {
  // const desenhos = data.desenhos;
  const { push, query } = useRouter();

  const [desenhos, setDesenhos] = useState([]);
  const [aliens, setAliens] = useState([]);
  const [viloes, setViloes] = useState([]);

  useEffect(() => {
    getAll();
    getAllAliens();
    getAllViloes();
  }, []);

  function getAll() {
    axios.get("/api/desenhos").then((res) => {
      setDesenhos(res.data);
    });
  }

  function getAllAliens() {
    axios.get("/api/transformacoes").then((res) => {
      setAliens(res.data);
    });
  }
  function getAllViloes() {
    axios.get("/api/viloes").then((res) => {
      setViloes(res.data);
    });
  }

  function excluir(item) {
    if (confirm("Você tem certeza?")) {
      axios.delete(`/api/desenhos/${item}`);
    }
    push("/desenhos");
  }

  return (
    <Pagina titulo="Desenhos">
      <Row className="mb-5">
        {desenhos.map((item) => (
          <Row key={item.id} className="mb-4">
            <MeuCard>
              <Row>
                <Col md={4}>
                  <Card.Img
                    variant="top"
                    src={item.imagem}
                    style={{ marginTop: 10, marginBottom: 10 }}
                  />
                </Col>
                <Col>
                  <Card.Body>
                    <Row>
                      <Col>
                        <Card.Title>{item.nome}</Card.Title>
                        <Card.Text style={{ color: "grey" }}>
                          {item.temporadas} temporadas
                        </Card.Text>
                        <Card.Text style={{ color: "grey" }}>
                          {item.episodios} episódios
                        </Card.Text>
                      </Col>
                      <Col>
                        <div style={{ color: "grey" }}>
                          Primeiras aparições de transformações:
                          <ul key={item.id}>
                            {aliens.map((item2) =>
                              item2.desenho == item.nome ? (
                                <li style={{ color: "grey" }}>{item2.nome}</li>
                              ) : (
                                <></>
                              )
                            )}
                          </ul>
                        </div>
                      </Col>
                      <Col>
                        <div style={{ color: "grey" }}>
                          Primeiras aparições de vilões:
                          <ul key={item.id}>
                            {viloes.map((item2) =>
                              item2.desenho == item.nome ? (
                                <li style={{ color: "grey" }}>{item2.nome}</li>
                              ) : (
                                <></>
                              )
                            )}
                          </ul>
                        </div>
                      </Col>
                      <Col>
                        <Card.Footer>
                          <Row>
                            <Button
                              variant="success"
                              href={`/desenhos/${item.id}`}
                              style={{ marginRight: 50 }}
                            >
                              <FaPencilAlt color="white" size={14} /> Editar
                            </Button>
                            <Button
                              variant="danger"
                              onClick={() => excluir(item.id)}
                            >
                              <FaTrashAlt color="white" size={14} /> Excluir
                            </Button>
                          </Row>
                        </Card.Footer>
                      </Col>
                    </Row>
                  </Card.Body>
                </Col>
              </Row>
            </MeuCard>
          </Row>
        ))}
        <Row className="mb-4">
          <MeuCard>
            <Row>
              <Col md={4}>
                <Card.Img
                  variant="top"
                  src="https://static.vecteezy.com/ti/vetor-gratis/t1/4968473-upload-or-add-a-picture-jpg-file-concept-illustration-flat-design-vector-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-etc-vetor.jpg"
                  style={{ marginTop: 10, marginBottom: 10, height: 220 }}
                />
              </Col>
              <Col>
                <Card.Body>
                  <Row>
                    <Col>
                      <Card.Title>Nome</Card.Title>
                      <Card.Text style={{ color: "grey" }}>
                        Quantidade de temporadas
                      </Card.Text>
                      <Card.Text style={{ color: "grey" }}>
                        Quantidade de episódios
                      </Card.Text>
                    </Col>
                    <Col>
                      <div style={{ color: "grey" }}>
                        Primeiras aparições de transformações:
                      </div>
                    </Col>
                    <Col>
                      <div style={{ color: "grey" }}>
                        Primeiras aparições de vilões:
                      </div>
                    </Col>
                    <Col>
                      <Card.Footer>
                        <Row>
                          <Button
                            style={{ backgroundColor: "grey" }}
                            href="/desenhos/form"
                          >
                            Adicionar
                          </Button>
                        </Row>
                      </Card.Footer>
                    </Col>
                  </Row>
                </Card.Body>
              </Col>
            </Row>
          </MeuCard>
        </Row>
      </Row>
    </Pagina>
  );
};

export default index;
