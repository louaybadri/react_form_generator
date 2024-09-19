import React from "react";
import { Button } from "../models/interfaces";

interface ButtonRendererProps {
    button: Button;
}

const ButtonRenderer: React.FC<ButtonRendererProps> = ({ button }) => (
    <button key={button.label} type="button" className="btn btn-primary" onClick={() => console.log(button.action)}>
        {button.label}
    </button>
);

export default ButtonRenderer;