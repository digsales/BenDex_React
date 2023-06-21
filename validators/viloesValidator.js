const transformacoesValidator = {
  nome: {
    required: "Campo obrigatório",
    minLength: {
      value: 3,
      message: "A quantidade de caracteres mínima é 3",
    },
    maxLength: {
      value: 50,
      message: "A quantidade de caracteres máxima é 50",
    },
  },
  raca: {
    required: "Campo obrigatório",
    minLength: {
      value: 3,
      message: "A quantidade de caracteres mínima é 3",
    },
    maxLength: {
      value: 50,
      message: "A quantidade de caracteres máxima é 50",
    },
  },
  poderes: {
    required: "Campo obrigatório",
    minLength: {
      value: 10,
      message: "A quantidade de caracteres mínima é 10",
    },
  },
  plano: {
    required: "Campo obrigatório",
    minLength: {
      value: 10,
      message: "A quantidade de caracteres mínima é 10",
    },
  },
};
export default transformacoesValidator;
