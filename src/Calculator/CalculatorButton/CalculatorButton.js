import React from "react";
import "./CalculatorButton.css";

function CalculatorButton(props) {
    return (
        <button 
            className={props.buttonWidthClassName}
            onClick={props.onClick}
        >
            {props.buttonText}
        </button>
    );
}

export default CalculatorButton;