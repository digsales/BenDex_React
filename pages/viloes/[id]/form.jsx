import Pagina from "@/components/Pagina";
import React, { useState, useEffect } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import data from "@/services/data";
import axios from "axios";
import { FaSave, FaTimes } from "react-icons/fa";
import viloesValidator from "@/validators/viloesValidator";

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
      axios.get(`/api/viloes/${query.id}`).then((res) => {
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
    axios.put(`/api/viloes/${query.id}`, dados);
    push(`/viloes/${query.id}`);
  }

  return (
    <Pagina titulo="Editando Vilão">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control
            type="text"
            {...register("nome", viloesValidator.nome)}
          />
          {errors.nome && (
            <Form.Text className="text-danger">{errors.nome.message}</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="raca">
          <Form.Label>Raça: </Form.Label>
          <Form.Control
            type="text"
            {...register("raca", viloesValidator.raca)}
          />
          {errors.raca && (
            <Form.Text className="text-danger">{errors.raca.message}</Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="poderes">
          <Form.Label>Poderes: </Form.Label>
          <Form.Control
            type="text"
            {...register("poderes", viloesValidator.poderes)}
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

        <Form.Group className="mb-3" controlId="plano">
          <Form.Label>Planos: </Form.Label>
          <Form.Control
            type="text"
            {...register("plano", viloesValidator.plano)}
          />
          {errors.plano && (
            <Form.Text className="text-danger">
              {errors.plano.message}
            </Form.Text>
          )}
        </Form.Group>

        <div className="text-center">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <FaSave color="white" size={14} /> Salvar
          </Button>
          <Link className="ms-2 btn btn-danger" href={`/viloes/${query.id}`}>
            <FaTimes color="white" size={14} /> Cancelar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;
