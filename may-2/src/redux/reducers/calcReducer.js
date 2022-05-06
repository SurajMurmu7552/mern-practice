const initialState = {
  nums: [],
  operation: [],
  input: "",
  result: "",
  display: "",
};

const calcReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "CALC_CLEAR": {
      return {
        ...state,
        nums: [],
        operation: [],
        input: "",
        result: "",
        display: "",
      };
    }
    case "CALC_SAVE_INPUT": {
      return {
        ...state,
        display: state.display + payload.val,
        input: state.input + payload.val,
      };
    }
    case "CALC_SAVE_OPERATION": {
      let num = Number(state.input);
      return {
        ...state,
        nums: [...state.nums, num],
        operation: [...state.operation, payload.op],
        input: "",
        display: state.display + payload.op,
      };
    }

    case "CALC_RESULT": {
      //initialize result with nums[0] in the state
      let result = state.nums[0];

      //loop runs from index 1 of nums to end and calculates the result
      for (let i = 1; i <= state.nums.length; i++) {
        if (i === state.nums.length) {
          if (state.operation[i - 1] === "+") result += Number(state.input);
          if (state.operation[i - 1] === "-") result -= Number(state.input);
          if (state.operation[i - 1] === "*") result *= Number(state.input);
          if (state.operation[i - 1] === "/") result /= Number(state.input);
        } else {
          if (state.operation[i - 1] === "+") result += state.nums[i];
          if (state.operation[i - 1] === "-") result -= state.nums[i];
          if (state.operation[i - 1] === "*") result *= state.nums[i];
          if (state.operation[i - 1] === "/") result /= state.nums[i];
        }
      }

      //on submition(=) if there is no second num with operation result equals to the input
      if (state.nums.length === 0) result = Number(state.input);

      //if no operation is entered result is not result is not saved
      if (state.operation.length > 0) {
        return {
          ...state,
          result,
          input: result.toString(),
          nums: [],
          operation: [],
          display: result,
        };
      }

      break;
    }
    default: {
      return state;
    }
  }
};

export default calcReducer;
