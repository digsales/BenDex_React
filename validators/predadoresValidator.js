const predadoresValidator = {
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
    minLength: {
      value: 3,
      message: "A quantidade de caracteres mínima é 3",
    },
    maxLength: {
      value: 50,
      message: "A quantidade de caracteres máxima é 50",
    },
  },
  presaNome: {
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
  presaRaca: {
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
  fraquezas: {
    minLength: {
      value: 10,
      message: "A quantidade de caracteres mínima é 10",
    },
  },
};
export default predadoresValidator;
