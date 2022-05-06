import React, { Component } from "react";
import { connect } from "react-redux";
import {
  calc_clear,
  calc_result,
  calc_save_input,
  calc_save_operation,
} from "../../../redux/actions/calcActions";
import CalcButton from "../calcButton/CalcButton";
import CalcDisplay from "../calcDisplay/CalcDisplay";

//style
import "./Calculator.css";

class CalcBody extends Component {
  render() {
    return (
      <div className="Calc">
        <div className="Calc-display">
          <CalcDisplay display={this.props.display} />
        </div>
        <div className="Calc-btns">
          <CalcButton value={"C"} handleClick={this.props.handleClear} />
          <CalcButton value={"/"} handleClick={this.props.handleOperation} />
          <CalcButton value={"*"} handleClick={this.props.handleOperation} />
          <CalcButton value={"-"} handleClick={this.props.handleOperation} />
          <CalcButton value={"7"} handleClick={this.props.handleNumInput} />
          <CalcButton value={"8"} handleClick={this.props.handleNumInput} />
          <CalcButton value={"9"} handleClick={this.props.handleNumInput} />
          <CalcButton value={"4"} handleClick={this.props.handleNumInput} />
          <CalcButton value={"5"} handleClick={this.props.handleNumInput} />
          <CalcButton value={"6"} handleClick={this.props.handleNumInput} />
          <CalcButton value={"1"} handleClick={this.props.handleNumInput} />
          <CalcButton value={"2"} handleClick={this.props.handleNumInput} />
          <CalcButton value={"3"} handleClick={this.props.handleNumInput} />
          <CalcButton value={"."} handleClick={this.props.handleNumInput} />
          <CalcButton value={"0"} handleClick={this.props.handleNumInput} />
          <CalcButton value={"+"} handleClick={this.props.handleOperation} />
          <CalcButton value={"="} handleClick={this.props.handleResult} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    display: state.calculator.display,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleClear: () => dispatch(calc_clear()),
    handleNumInput: (val) => dispatch(calc_save_input(val)),
    handleOperation: (op) => dispatch(calc_save_operation(op)),
    handleResult: () => dispatch(calc_result()),
  };
};

const Calculator = connect(mapStateToProps, mapDispatchToProps)(CalcBody);

export default Calculator;
