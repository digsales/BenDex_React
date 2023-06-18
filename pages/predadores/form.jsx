import Pagina from "@/components/Pagina";
import React, { useState, useEffect } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import data from "@/services/data";
import axios from "axios";
import { FaSave, FaTimes } from "react-icons/fa";
import predadoresValidator from "@/validators/predadoresValidator";

const form = () => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [predadores, setPredadores] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/predadores").then((res) => {
      setPredadores(res.data);
    });
  }

  function salvar(dados) {
    axios.post("/api/predadores", dados);
    push("/predadores");
  }

  return (
    <Pagina titulo="Novo Predador">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control
            type="text"
            {...register("nome", predadoresValidator.nome)}
          />
          {errors.nome && (
            <small className="text-danger">{errors.nome.message}</small>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="raca">
          <Form.Label>Raça: </Form.Label>
          <Form.Control
            type="text"
            {...register("raca", predadoresValidator.raca)}
          />
          {errors.raca && (
            <small className="text-danger">{errors.raca.message}</small>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="poderes">
          <Form.Label>Poderes: </Form.Label>
          <Form.Control
            type="text"
            {...register("poderes", predadoresValidator.poderes)}
          />
          {errors.poderes && (
            <Form.Text className="text-danger">
              {errors.poderes.message}
            </Form.Text>
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
            {...register("presaNome", predadoresValidator.presaNome)}
          />
          {errors.presaNome && (
            <small className="text-danger">{errors.presaNome.message}</small>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="presaRaca">
          <Form.Label>Raça da Presa: </Form.Label>
          <Form.Control
            type="text"
            {...register("presaRaca", predadoresValidator.presaRaca)}
          />
          {errors.presaRaca && (
            <small className="text-danger">{errors.presaRaca.message}</small>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="fraquezas">
          <Form.Label>Fraquezas: </Form.Label>
          <Form.Control
            type="text"
            {...register("fraquezas", predadoresValidator.fraquezas)}
          />
          {errors.fraquezas && (
            <Form.Text className="text-danger">
              {errors.fraquezas.message}
            </Form.Text>
          )}
        </Form.Group>

        <div className="text-center">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <FaSave color="white" size={14} /> Salvar
          </Button>
          <Link className="ms-2 btn btn-danger" href="/predadores">
            <FaTimes color="white" size={14} /> Cancelar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;
