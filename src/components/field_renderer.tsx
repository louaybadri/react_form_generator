import React from "react";
import { Field } from "../models/interfaces";

interface FieldRendererProps {
    field: Field;
}

const FieldRenderer: React.FC<FieldRendererProps> = ({ field  }) => {
    switch (field.type) {        case "text":
            return (
                <div className="form-group" key={field.name}>
                    <label htmlFor={field.name} className="form-label">{field.label}</label>
                    <input
                        placeholder={field.name}
                        type="text"
                        id={field.name}
                        name={field.name}
                        className="form-control"
                    />
                </div>
            );
        case "select":
            return (
                <div className="form-group" key={field.name}>
                    <label htmlFor={field.name} className="form-label">{field.label}</label>
                    <select id={field.name} name={field.name} className="form-control">
                        {field.options?.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            );
        case "email":
            return (
                <div className="form-group" key={field.name}>
                    <label htmlFor={field.name} className="form-label">{field.label}</label>
                    <input
                        placeholder={field.name}
                        type="email"
                        id={field.name}
                        name={field.name}
                        className="form-control"
                    />
                </div>
            );
        case "date":
            return (
                <div className="form-group" key={field.name}>
                    <label htmlFor={field.name} className="form-label">{field.label}</label>
                    <input
                        placeholder={field.name}
                        type="date"
                        id={field.name}
                        name={field.name}
                        className="form-control"
                    />
                </div>
            );
        case "checkbox":
            return (
                <div className="form-group form-check" key={field.name}>
                    <input
                        type="checkbox"
                        id={field.name}
                        name={field.name}
                        className="form-check-input"
                        value={field.value}
                    />
                    <label htmlFor={field.name} className="form-check-label">
                        {field.label}
                    </label>
                </div>
            );
        default:
            return null;
    }
};

export default FieldRenderer;