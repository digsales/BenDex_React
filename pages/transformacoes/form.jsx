import Pagina from "@/components/Pagina";
import React, { useState, useEffect } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import data from "@/services/data";
import axios from "axios";

const form = () => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [desenhos, setDesenhos] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/desenhos").then((res) => {
      setDesenhos(res.data);
    });
  }

  function salvar(dados) {
    axios.post("/api/transformacoes", dados);
    push("/transformacoes");
  }

  return (
    <Pagina titulo="Nova Transformação">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control type="text" {...register("nome", { required: true })} />
          {errors.nome && (
            <Form.Text className="text-danger">Campo obrigatório.</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="raca">
          <Form.Label>Raça: </Form.Label>
          <Form.Control type="text" {...register("raca", { required: true })} />
          {errors.nome && (
            <Form.Text className="text-danger">Campo obrigatório.</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="poderes">
          <Form.Label>Poderes: </Form.Label>
          <Form.Control
            type="text"
            {...register("poderes", { required: true })}
          />
          {errors.nome && (
            <Form.Text className="text-danger">Campo obrigatório.</Form.Text>
          )}
        </Form.Group>

        <Form.Group as={Col} controlId="desenhos">
          <Form.Label>Primeira aparição: </Form.Label>
          <Form.Select defaultValue="Selecione" {...register("desenho")}>
            <option>Selecione</option>
            {desenhos?.map((item) => (
              <option key={item.id}>{item.nome}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="imagem">
          <Form.Label>Imagem: </Form.Label>
          <Form.Control
            type="text"
            {...register("imagem", { required: true })}
          />
          {errors.nome && (
            <Form.Text className="text-danger">Campo obrigatório.</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="supremo">
          <Form.Label>Supremo: </Form.Label>
          <Form.Control type="text" {...register("supremo")} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="supremoImagem">
          <Form.Label>Supremo imagem: </Form.Label>
          <Form.Control type="text" {...register("supremoImagem")} />
        </Form.Group>

        <div className="text-center">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            Salvar
          </Button>
          <Link className="ms-2 btn btn-danger" href="/transformacoes">
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;
