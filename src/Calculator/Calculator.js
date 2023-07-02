import React from "react";
import "./Calculator.css";
import { Operation } from "./Utils/MathOperation.js"
import CalculatorButton from "./CalculatorButton/CalculatorButton";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayedValue: '0',
            storedValue: 0,
            currentOperation: null,
            currentOperand: null
        };
    }

    performOperation() {
        let result;
        let invalidOperation = false;

        const operand = this.state.currentOperand !== null ? this.state.currentOperand : parseFloat(this.state.displayedValue);

        switch (this.state.currentOperation) {
            case Operation.ADD:
                result = parseFloat(this.state.storedValue) + operand;
                break;
            case Operation.SUBTRACT:
                result = parseFloat(this.state.storedValue) - operand;
                break;
            case Operation.MULTIPLY:
                result = parseFloat(this.state.storedValue) * operand;
                break;
            case Operation.DIVIDE:
                result = parseFloat(this.state.storedValue) / operand;
                break;
            default:
                invalidOperation = true;
                break;
        }

        if (invalidOperation) {
            return;
        }

        this.setState({
            displayedValue: result.toString(),
            storedValue: result,
            currentOperand: operand
        });
    }

    handleOperationClicked(operation) {
        const operand = parseFloat(this.state.displayedValue);

        this.setState({
            storedValue: operand,
            displayedValue: '0',
            currentOperation: operation,
            currentOperand: operand
        });
    }

    handleNumberClicked(value) {
        this.setState({currentOperand: null});
        if (this.state.displayedValue === '0' && value === 0) {
            return;
        } else if (this.state.displayedValue === '0') {
            this.setState({displayedValue: value.toString()});
        } else {
            this.setState({displayedValue: String(this.state.displayedValue) + value })
        }
    }

    handleDecimalClicked() {
        this.setState({currentOperand: null});
        if (this.state.displayedValue[this.state.displayedValue.length - 1] === '.') {
            return;
        }
        this.setState({displayedValue: String(this.state.displayedValue) + '.'})
    }

    handleDeleteClicked() {
        if (this.state.displayedValue.length === 1 ||
            (this.state.displayedValue.length === 2 && this.state.displayedValue[0] === '-')) {
            this.setState({displayedValue: '0'})
        } else {
            const updatedValue = this.state.displayedValue.slice(0, -1);
            this.setState({displayedValue: updatedValue})
        }
    }

    handlePlusMinusClicked() {
        if (this.state.displayedValue === '0') {
            return;
        }
        if (this.state.displayedValue[0] === '-') {
            this.setState({displayedValue: this.state.displayedValue.slice(1)})
        } else {
            this.setState({displayedValue: '-' + this.state.displayedValue})
        }
    }

    clear() {
        if (this.state.displayedValue === '0') {
            this.clearEverything();
        } else {
            this.setState({displayedValue: '0'});
        }
    }

    clearEverything() {
        this.setState({
            displayedValue: '0',
            storedValue: 0,
            currentOperation: null,
            currentOperand: null
        });
    }

    render() {
        return (
            <div className="calculator-container">
                <div className="calculator">
                    <div className="number-display">{this.state.displayedValue}</div>
                    <hr className="separator" />
                    <div className="button-grid">
                        <CalculatorButton buttonText="←" onClick={() => this.handleDeleteClicked()}></CalculatorButton>
                        <CalculatorButton buttonText="C" onClick={() => this.clear()}></CalculatorButton>
                        <CalculatorButton buttonText="CE" onClick={() => this.clearEverything()}></CalculatorButton>
                        <CalculatorButton buttonText="÷" onClick={() => this.handleOperationClicked(Operation.DIVIDE)}></CalculatorButton>

                        <CalculatorButton buttonText="7" onClick={() => this.handleNumberClicked(7)}></CalculatorButton>
                        <CalculatorButton buttonText="8" onClick={() => this.handleNumberClicked(8)}></CalculatorButton>
                        <CalculatorButton buttonText="9" onClick={() => this.handleNumberClicked(9)}></CalculatorButton>
                        <CalculatorButton buttonText="×" onClick={() => this.handleOperationClicked(Operation.MULTIPLY)}></CalculatorButton>

                        <CalculatorButton buttonText="4" onClick={() => this.handleNumberClicked(4)}></CalculatorButton>
                        <CalculatorButton buttonText="5" onClick={() => this.handleNumberClicked(5)}></CalculatorButton>
                        <CalculatorButton buttonText="6" onClick={() => this.handleNumberClicked(6)}></CalculatorButton>
                        <CalculatorButton buttonText="-" onClick={() => this.handleOperationClicked(Operation.SUBTRACT)}></CalculatorButton>

                        <CalculatorButton buttonText="1" onClick={() => this.handleNumberClicked(1)}></CalculatorButton>
                        <CalculatorButton buttonText="2" onClick={() => this.handleNumberClicked(2)}></CalculatorButton>
                        <CalculatorButton buttonText="3" onClick={() => this.handleNumberClicked(3)}></CalculatorButton>
                        <CalculatorButton buttonText="+" onClick={() => this.handleOperationClicked(Operation.ADD)}></CalculatorButton>

                        <CalculatorButton buttonText="0" onClick={() => this.handleNumberClicked(0)}></CalculatorButton>
                        <CalculatorButton buttonText="±" onClick={() => this.handlePlusMinusClicked()}></CalculatorButton>
                        <CalculatorButton buttonText="." onClick={() => this.handleDecimalClicked()}></CalculatorButton>
                        <CalculatorButton buttonText="=" onClick={() => this.performOperation()}></CalculatorButton>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calculator;