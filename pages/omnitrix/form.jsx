import Pagina from "@/components/Pagina";
import React, { useState, useEffect } from "react";
import { Button, Col, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Link from "next/link";
import data from "@/services/data";
import axios from "axios";
import { FaSave, FaTimes } from "react-icons/fa";
import omnitrixValidator from "@/validators/omnitrixValidator";

const form = () => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [omnitrix, setOmnitrix] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/omnitrix").then((res) => {
      setOmnitrix(res.data);
    });
  }

  function salvar(dados) {
    axios.post("/api/omnitrix", dados);
    push("/omnitrix");
  }

  return (
    <Pagina titulo="Novo Omnitrix">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control
            type="text"
            {...register("nome", omnitrixValidator.nome)}
          />
          {errors.nome && (
            <Form.Text className="text-danger">{errors.nome.message}</Form.Text>
          )}
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

        <Form.Group className="mb-3" controlId="detalhes">
          <Form.Label>Detalhes: </Form.Label>
          <Form.Control
            type="text"
            {...register("detalhes", omnitrixValidator.detalhes)}
          />
          {errors.detalhes && (
            <Form.Text className="text-danger">
              {errors.detalhes.message}
            </Form.Text>
          )}
        </Form.Group>

        <div className="text-center">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <FaSave color="white" size={14} /> Salvar
          </Button>
          <Link className="ms-2 btn btn-danger" href="/omnitrix">
            <FaTimes color="white" size={14} /> Cancelar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;
