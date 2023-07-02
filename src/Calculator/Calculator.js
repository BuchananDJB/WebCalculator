import React from "react";
import "./Calculator.css";
import CalculatorButton from "./CalculatorButton/CalculatorButton";

function Calculator(props) {
    return (
        <div className="calculator-container">
            <div className="calculator">
                <div className="number-display">0</div>
                <hr className="separator" />
                <div className="button-grid">
                    <CalculatorButton buttonText="←" buttonWidthClassName="single-width-button" onClick={() => console.log("← button.")}></CalculatorButton>
                    <CalculatorButton buttonText="C" buttonWidthClassName="single-width-button" onClick={() => console.log("C button.")}></CalculatorButton>
                    <CalculatorButton buttonText="%" buttonWidthClassName="single-width-button" onClick={() => console.log("% button.")}></CalculatorButton>
                    <CalculatorButton buttonText="÷" buttonWidthClassName="single-width-button" onClick={() => console.log("÷ button.")}></CalculatorButton>
                    <CalculatorButton buttonText="7" buttonWidthClassName="single-width-button" onClick={() => console.log("7 button.")}></CalculatorButton>
                    <CalculatorButton buttonText="8" buttonWidthClassName="single-width-button" onClick={() => console.log("8 button.")}></CalculatorButton>
                    <CalculatorButton buttonText="9" buttonWidthClassName="single-width-button" onClick={() => console.log("9 button.")}></CalculatorButton>
                    <CalculatorButton buttonText="×" buttonWidthClassName="single-width-button" onClick={() => console.log("× button.")}></CalculatorButton>
                    <CalculatorButton buttonText="4" buttonWidthClassName="single-width-button" onClick={() => console.log("4 button.")}></CalculatorButton>
                    <CalculatorButton buttonText="5" buttonWidthClassName="single-width-button" onClick={() => console.log("5 button.")}></CalculatorButton>
                    <CalculatorButton buttonText="6" buttonWidthClassName="single-width-button" onClick={() => console.log("6 button.")}></CalculatorButton>
                    <CalculatorButton buttonText="-" buttonWidthClassName="single-width-button" onClick={() => console.log("- button.")}></CalculatorButton>
                    <CalculatorButton buttonText="1" buttonWidthClassName="single-width-button" onClick={() => console.log("1 button.")}></CalculatorButton>
                    <CalculatorButton buttonText="2" buttonWidthClassName="single-width-button" onClick={() => console.log("2 button.")}></CalculatorButton>
                    <CalculatorButton buttonText="3" buttonWidthClassName="single-width-button" onClick={() => console.log("3 button.")}></CalculatorButton>
                    <CalculatorButton buttonText="+" buttonWidthClassName="single-width-button" onClick={() => console.log("+ button.")}></CalculatorButton>
                    <CalculatorButton buttonText="0" buttonWidthClassName="single-width-button" onClick={() => console.log("0 button.")}></CalculatorButton>
                    <CalculatorButton buttonText="±" buttonWidthClassName="single-width-button" onClick={() => console.log("± button.")}></CalculatorButton>
                    <CalculatorButton buttonText="." buttonWidthClassName="single-width-button" onClick={() => console.log(". button.")}></CalculatorButton>
                    <CalculatorButton buttonText="=" buttonWidthClassName="single-width-button" onClick={() => console.log("= button.")}></CalculatorButton>
                </div>
            </div>
        </div>
        

    );
}

export default Calculator;