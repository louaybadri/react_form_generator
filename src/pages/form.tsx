import FieldRenderer from "../components/field_renderer";
import { Page } from "../models/interfaces";
import React from "react";
import { useTheme } from "../context/theme_context";

const FormPage: React.FC<{ page: Page, errors: { [key: string]: string[] }, handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void }> = ({ page, errors, handleSubmit }) => {
    const { theme } = useTheme();

    const inputStyle = {
        border: theme.inputFieldStyles.border,
        backgroundColor: theme.inputFieldStyles.backgroundColor,
        color: theme.primaryColor
    };

    const formStyle = {
        backgroundColor: theme.secondaryColor,
        color: "red",
        padding: "20px",
        borderRadius: "5px"
    };



    return (
        <div style={formStyle}>
            <form className="form"  onSubmit={handleSubmit} id={page.id}>
                <h1>{page.title}</h1>
                {page.fields.map(field => (
                    <div key={field.name}>
                        <FieldRenderer field={field} inputStyle={inputStyle} />
                    </div>
                ))}
                <button type="submit" className="btn btn-success">ELI BA3DOU</button>
            </form>
        </div>
    );
};

export default FormPage;