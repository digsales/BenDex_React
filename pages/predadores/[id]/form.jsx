import Pagina from "@/components/Pagina";
import React, { useState, useEffect } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import data from "@/services/data";
import axios from "axios";
import { query } from "firebase/database";

const form = () => {
  const { push, query } = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (query.id) {
      axios.get(`/api/predadores/${query.id}`).then((res) => {
        const preda = res.data;

        for (let atributo in preda) {
          setValue(atributo, preda[atributo]);
        }
      });
    }
  }, [query.id]);

  function salvar(dados) {
    axios.put(`/api/predadores/${query.id}`, dados);
    push("/predadores");
  }

  return (
    <Pagina titulo="Novo Predador">
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
          <Form.Control type="text" {...register("raca")} />
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

        <Form.Group className="mb-3" controlId="presaNome">
          <Form.Label>Nome da presa: </Form.Label>
          <Form.Control
            type="text"
            {...register("presaNome", { required: true })}
          />
          {errors.nome && (
            <Form.Text className="text-danger">Campo obrigatório.</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="presaRaca">
          <Form.Label>Raça da Presa: </Form.Label>
          <Form.Control
            type="text"
            {...register("presaRaca", { required: true })}
          />
          {errors.nome && (
            <Form.Text className="text-danger">Campo obrigatório.</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="fraquezas">
          <Form.Label>Fraquezas: </Form.Label>
          <Form.Control type="text" {...register("fraquezas")} />
        </Form.Group>

        <div className="text-center">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            Salvar
          </Button>
          <Link className="ms-2 btn btn-danger" href="/predadores">
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;
