import FieldRenderer from "../components/field_renderer";
import { Page } from "../models/interfaces";
import React from "react";
import styleConfig from '../styleConfig.json';

const FormPage: React.FC<{ page: Page, errors: { [key: string]: string[] }, handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void }> = ({ page, errors, handleSubmit }) => {


    return (
        <form className="form" onSubmit={handleSubmit} id={page.id}>
            <h1>{page.title}</h1>
            {page.fields.map(field => (
                <div key={field.name}>
                    <FieldRenderer field={field}  />
                    {errors[field.name] && errors[field.name].map((error, index) => (
                        <div key={index} className="error-message">{error}</div>
                    ))}
                </div>
            ))}
            <button type="submit" className="btn btn-success">Next</button>
        </form>
    );
};

export default FormPage;