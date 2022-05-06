const calc_clear = () => {
  return {
    type: "CALC_CLEAR",
  };
};

const calc_save_input = (val) => {
  return {
    type: "CALC_SAVE_INPUT",
    payload: {
      val,
    },
  };
};

const calc_save_operation = (op) => {
  return {
    type: "CALC_SAVE_OPERATION",
    payload: {
      op,
    },
  };
};

const calc_result = () => {
  return {
    type: "CALC_RESULT",
  };
};

export { calc_clear, calc_save_input, calc_save_operation, calc_result };
