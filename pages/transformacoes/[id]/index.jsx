import React from "react";
import Pagina from "../../../components/Pagina";
import data from "@/services/data";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { useForm } from "react-hook-form";
import MinhaArea from "@/components/MinhaArea";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

const Detalhes = ({ index }) => {
  const { push, query } = useRouter();
  // const transformacoes = data.transformacoes;

  const [alien, setAlien] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (query.id) {
      axios.get(`/api/transformacoes/${query.id}`).then((res) => {
        setAlien(res.data);
      });
    }
  }, [query.id]);

  const Aparicoes = (dados) => {
    try {
      return dados?.map((item) => <li>{item}</li>);
    } catch {
      return <li>{dados}</li>;
    }
  };

  function excluir() {
    axios.delete(`/api/transformacoes/${query.id}`);
    push("/transformacoes");
  }

  // useEffect(() => {
  //   getAll();
  // }, []);

  // function getAll() {
  //   axios.get(`/api/transformacoes/${index}`).then((res) => {
  //     setAlien(res.data);
  //   });
  // }

  return (
    <Pagina titulo={alien.nome}>
      <Row>
        <Col style={{ marginBottom: 50 }}>
          <MinhaArea>
            {alien.supremo ? (
              <Col>
                <Col md={3}>
                  <Card.Img
                    variant="top"
                    src={alien.imagem}
                    style={{ marginBottom: 20, height: 300, width: "auto" }}
                  />
                </Col>
                <Col md={9} className="align-text-bottom">
                  <p>
                    <strong style={{ fontSize: 18 }}>Raça: </strong>
                    <br />
                    {alien.raca}
                  </p>
                  <p>
                    <strong style={{ fontSize: 18 }}>Habilidades: </strong>
                    <br />
                    {alien.poderes}
                  </p>
                  <div>
                    <strong style={{ fontSize: 18 }}>Aparições: </strong>
                    <ul>{Aparicoes(alien.desenho)}</ul>
                  </div>
                </Col>
              </Col>
            ) : (
              <Row>
                <Col md={3}>
                  <Card.Img
                    variant="top"
                    src={alien.imagem}
                    style={{ marginRight: 20, height: 300, width: "auto" }}
                  />
                </Col>
                <Col md={9} className="align-text-bottom">
                  <p>
                    <strong style={{ fontSize: 18 }}>Raça: </strong>
                    <br />
                    {alien.raca}
                  </p>
                  <p>
                    <strong style={{ fontSize: 18 }}>Habilidades: </strong>
                    <br />
                    {alien.poderes}
                  </p>
                  <div>
                    <strong style={{ fontSize: 18 }}>Aparições: </strong>
                    <ul>{Aparicoes(alien.desenho)}</ul>
                  </div>
                </Col>
              </Row>
            )}
          </MinhaArea>
        </Col>
        {alien.supremo ? (
          <Col>
            <MinhaArea>
              <Col md={3}>
                <Card.Img
                  variant="top"
                  src={alien.supremoImagem}
                  style={{ marginBottom: 20, height: 300, width: "auto" }}
                />
              </Col>
              <Col md={9}>
                <strong style={{ fontSize: 18 }}>Supremo: </strong>
                <br />
                {alien.supremo}
              </Col>
            </MinhaArea>
          </Col>
        ) : (
          ""
        )}
      </Row>
      <div className="text-center" style={{ marginTop: 50 }}>
        <Button
          variant="primary"
          href={`/transformacoes/${query.id}/form`}
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
