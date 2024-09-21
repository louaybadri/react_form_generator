import React from "react";
import { Field } from "../models/interfaces";
import { useTheme } from "../context/theme_context";

interface FieldRendererProps {
    field: Field;
    inputStyle: React.CSSProperties;
}

const FieldRenderer: React.FC<FieldRendererProps> = ({ field, inputStyle }) => {
    const { theme } = useTheme();

    const labelStyle = {
        color: theme.labelStyles.color,
    };

    return (
        <div className="form-group" key={field.name}>
            <label htmlFor={field.name} className="form-label" style={labelStyle}>{field.label}</label>
            {field.type === "text" && (
                <input
                    placeholder={field.label}
                    type="text"
                    id={field.name}
                    name={field.name}
                    style={inputStyle}
                    className="form-control"
                />
            )}
            {field.type === "select" && (
                <select id={field.name} name={field.name} className="form-control" style={inputStyle}>
                    {field.options?.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            )}
            {field.type === "email" && (
                <input
                    placeholder={field.label}
                    type="email"
                    id={field.name}
                    name={field.name}
                    className="form-control"
                    style={inputStyle}
                />
            )}
            {field.type === "date" && (
                <input
                    type="date"
                    placeholder={field.label}
                    id={field.name}
                    name={field.name}
                    className="form-control"
                    style={inputStyle}
                />
            )}
            {field.type === "checkbox" && (
                <div className="form-check">
                    <input
                        type="checkbox"
                        id={field.name}
                        placeholder={field.label}
                        name={field.name}
                        className="form-check-input"
                        value={field.value}
                        style={inputStyle}
                    />
                </div>
            )}
        </div>
    );
};

export default FieldRenderer;