import Pagina from "@/components/Pagina";
import React, { useState, useEffect } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import data from "@/services/data";
import axios from "axios";
import { FaSave, FaTimes } from "react-icons/fa";
import transformacoesValidator from "@/validators/transformacoesValidator";

const form = () => {
  const { push, query } = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [desenhos, setDesenhos] = useState([]);

  useEffect(() => {
    if (query.id) {
      axios.get(`/api/transformacoes/${query.id}`).then((res) => {
        const trans = res.data;

        for (let atributo in trans) {
          setValue(atributo, trans[atributo]);
        }
      });
    }
    getAll();
  }, [query.id]);

  function getAll() {
    axios.get("/api/desenhos").then((res) => {
      setDesenhos(res.data);
    });
  }

  function salvar(dados) {
    axios.put(`/api/transformacoes/${query.id}`, dados);
    push(`/transformacoes/${query.id}`);
  }

  return (
    <Pagina titulo="Editando Transformação">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control
            type="text"
            {...register("nome", transformacoesValidator.nome)}
          />
          {errors.nome && (
            <Form.Text className="text-danger">{errors.nome.message}</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="raca">
          <Form.Label>Raça: </Form.Label>
          <Form.Control
            type="text"
            {...register("raca", transformacoesValidator.raca)}
          />
          {errors.raca && (
            <Form.Text className="text-danger">{errors.raca.message}</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="poderes">
          <Form.Label>Poderes: </Form.Label>
          <Form.Control
            type="text"
            {...register("poderes", transformacoesValidator.poderes)}
          />
          {errors.poderes && (
            <Form.Text className="text-danger">
              {errors.poderes.message}
            </Form.Text>
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
          {errors.imagem && (
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
            <FaSave color="white" size={14} /> Salvar
          </Button>
          <Link
            className="ms-2 btn btn-danger"
            href={`/transformacoes/${query.id}`}
          >
            <FaTimes color="white" size={14} /> Cancelar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;
