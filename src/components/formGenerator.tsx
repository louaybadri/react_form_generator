import React, { useContext } from "react";
import "./formGenerator.css";
import { FormDataContext } from "../context/FormContext";
import Pages from '../pages.json';
import {Field, Page} from "../models/interfaces";
import useConditionalNavigation from "../hooks/conditional_nav";
import FieldRenderer from "./field_renderer";
import ButtonRenderer from "./button_renderer";

const GenerateForm: React.FC = () => {
    const context = useContext(FormDataContext);
    if (!context) {
        throw new Error("FormDataContext must be used within a FormDataProvider");
    }
    const { formData, addFormData, currentPage, handleNext } = context;
    const page = Pages.pages[currentPage];

    useConditionalNavigation(page, formData, handleNext);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleNext();
        const form = e.currentTarget as HTMLFormElement;
        const data = new FormData(form);
        const newFormData: { [key: string]: FormDataEntryValue } = {};
        data.forEach((value, key) => {
            newFormData[key] = value;
        });
        addFormData(newFormData);
    };

    if (page.id === "review") {
        const pages: Page[] = Pages.pages;
        const fields: Field[] = pages.flatMap(page => {
            if (page.conditional) {
                const field = page.conditional.field;
                const value = page.conditional.value.toString();
                const fieldValue = formData[field];
                if (!fieldValue || fieldValue !== value) {
                    return []; // Skip fields from this page
                }
            }
            return page.fields;
        });

        return (
            <div className="review-page">
                <h1>Review</h1>
                <div className="review-fields">
                    {fields.map(field => {
                        const value = formData[field.name];
                        const isMissing = field.required && !value;
                        const validationMessage = field.validation?.pastOnly && value && new Date(value.toString()) > new Date() ? " (Invalid date)" : "";
                        return (
                            <div key={field.name} className={`review-field ${isMissing ? 'missing' : ''}`}>
                                <strong>{field.name}</strong>: {value?.toString() || "Missing"}{validationMessage}
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }

    return (
        <form className="form" onSubmit={handleSubmit} id={page.id}>
            <h1>{page.title}</h1>
            {page.fields.map(field => <FieldRenderer key={field.name} field={field} />)}
            {page.buttons?.map(button => <ButtonRenderer key={button.label} button={button} />)}
            <button type="submit" className="btn btn-success">Next</button>
            <button type="button" className="btn btn-info" onClick={() => {
                console.log(formData);
            }}>All</button>
        </form>
    );
};

export default GenerateForm;