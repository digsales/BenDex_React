import Pagina from "@/components/Pagina";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import data from "@/services/data";

const form = () => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function salvar(dados) {
    const transformacoes =
      JSON.parse(window.localStorage.getItem("transformacoes")) || [];
    transformacoes.push(dados);
    window.localStorage.setItem(
      "transformacoes",
      JSON.stringify(transformacoes)
    );
    push("/transformacoes");
  }

  return (
    <Pagina titulo="Nova Transformação">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>*Nome: </Form.Label>
          <Form.Control type="text" {...register("nome", { required: true })} />
          {errors.nome && (
            <Form.Text className="text-danger">Campo obrigatório.</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="raca">
          <Form.Label>*Raça: </Form.Label>
          <Form.Control type="text" {...register("raca", { required: true })} />
          {errors.nome && (
            <Form.Text className="text-danger">Campo obrigatório.</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="poderes">
          <Form.Label>*Poderes: </Form.Label>
          <Form.Control
            type="text"
            {...register("poderes", { required: true })}
          />
          {errors.nome && (
            <Form.Text className="text-danger">Campo obrigatório.</Form.Text>
          )}
        </Form.Group>

        {/* <Form.Group className="mb-3" controlId="desenhos">
          <Form.Label>Desenhos: </Form.Label>
          <Form.Control type="text" {...register("desenhos")} />
        </Form.Group> */}

        <Form.Group className="mb-3" controlId="imagem">
          <Form.Label>*Imagem: </Form.Label>
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
          <Link className="ms-2 btn btn-danger" href="/cursos">
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;
