import React, { Component } from "react";
import CalcButton from "../calcButton/CalcButton";
import CalcDisplay from "../calcDisplay/CalcDisplay";

//style
import "./Calculator.css";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nums: [],
      operation: [],
      input: "",
      result: "",
      display: "",
    };
  }

  handleClear = () => {
    this.setState({
      nums: [],
      operation: [],
      input: "",
      result: "",
      display: "",
    });
  };

  handleNum = (val) => {
    this.setState({
      display: this.state.display + val,
      input: this.state.input + val,
    });
  };

  handleOperation = (op) => {
    let num = Number(this.state.input);
    this.setState({
      nums: [...this.state.nums, num],
      operation: [...this.state.operation, op],
      input: "",
      display: this.state.display + op,
    });
  };

  handleResult = () => {
    let result = this.state.nums[0];

    for (let i = 1; i <= this.state.nums.length; i++) {
      if (i === this.state.nums.length) {
        if (this.state.operation[i - 1] === "+")
          result += Number(this.state.input);
        if (this.state.operation[i - 1] === "-")
          result -= Number(this.state.input);
        if (this.state.operation[i - 1] === "*")
          result *= Number(this.state.input);
        if (this.state.operation[i - 1] === "/")
          result /= Number(this.state.input);
      } else {
        if (this.state.operation[i - 1] === "+") result += this.state.nums[i];
        if (this.state.operation[i - 1] === "-") result -= this.state.nums[i];
        if (this.state.operation[i - 1] === "*") result *= this.state.nums[i];
        if (this.state.operation[i - 1] === "/") result /= this.state.nums[i];
      }
    }

    if (this.state.nums.length === 0) result = Number(this.state.input);

    if (this.state.operation.length > 0) {
      this.setState({
        result,
        input: "",
        nums: [],
        operation: [],
        display: result,
      });
    }
  };

  render() {
    return (
      <div className="Calc">
        <div className="Calc-display">
          <CalcDisplay display={this.state.display} />
        </div>
        <div className="Calc-btns">
          <CalcButton value={"C"} handleClick={this.handleClear} />
          <CalcButton value={"/"} handleClick={this.handleOperation} />
          <CalcButton value={"*"} handleClick={this.handleOperation} />
          <CalcButton value={"-"} handleClick={this.handleOperation} />
          <CalcButton value={"7"} handleClick={this.handleNum} />
          <CalcButton value={"8"} handleClick={this.handleNum} />
          <CalcButton value={"9"} handleClick={this.handleNum} />
          <CalcButton value={"4"} handleClick={this.handleNum} />
          <CalcButton value={"5"} handleClick={this.handleNum} />
          <CalcButton value={"6"} handleClick={this.handleNum} />
          <CalcButton value={"1"} handleClick={this.handleNum} />
          <CalcButton value={"2"} handleClick={this.handleNum} />
          <CalcButton value={"3"} handleClick={this.handleNum} />
          <CalcButton value={"."} handleClick={this.handleNum} />
          <CalcButton value={"0"} handleClick={this.handleNum} />
          <CalcButton value={"+"} handleClick={this.handleOperation} />
          <CalcButton value={"="} handleClick={this.handleResult} />
        </div>
      </div>
    );
  }
}
