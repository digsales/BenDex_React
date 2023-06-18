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
import { mask } from "remask";

const form = () => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
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

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const mascara = event.target.getAttribute("mask");
    setValue(name, mask(value, mascara));
  }

  return (
    <Pagina titulo="Nova Transformação">
      <Form>
        <Form.Group className="mb-3" controlId="alienCpf">
          <Form.Label>CPF (exemplo de máscara): </Form.Label>
          <Form.Control
            type="text"
            mask="999.999.999-99"
            {...register("alienCpf")}
            onChange={handleChange}
          />
          {errors.cpf && (
            <Form.Text className="text-danger">{errors.cpf.message}</Form.Text>
          )}
        </Form.Group>

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
          <Link className="ms-2 btn btn-danger" href="/transformacoes">
            <FaTimes color="white" size={14} /> Cancelar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;
