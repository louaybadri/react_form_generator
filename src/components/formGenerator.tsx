import React, { useContext, useState } from "react";
import "../styles/formGenerator.css";
import { FormDataContext } from "../context/FormContext";
import Pages from '../pages.json';
import { evaluateCondition } from "../utils/evaluateConditions";
import { Field, Page } from "../models/interfaces";
import useConditionalNavigation from "../hooks/conditional_nav";
import FormPage from "../pages/form";
import WelcomePage from "../pages/welcome";
import ReviewPage from "../pages/review";
import handleSubmit from "../utils/handleSubmit";

import styleConfig from '../styleConfig.json';
import FieldRenderer from "./field_renderer";
const GenerateForm: React.FC = () => {
    const context = useContext(FormDataContext);
    if (!context) {
        throw new Error("FormDataContext must be used within a FormDataProvider");
    }
    const { formData, addFormData, currentPage, handleNext } = context;
    const page = Pages.pages[currentPage];
    const [errors, setErrors] = useState<{ [key: string]: string[] }>({});

    useConditionalNavigation(page, formData, handleNext);



    if (page.id === "review") {
        const fields = Pages.pages.flatMap(page => {
            if (page.conditional && !evaluateCondition(page.conditional, formData)) {
                return [];
            }
            return page.fields;
        });

        return <ReviewPage fields={fields} formData={formData} errors={errors} />;
    }

    if (page.id === "welcome") {
        return <WelcomePage handleNext={handleNext} />;
    }

    return (
        <form className="form" onSubmit={(e) => handleSubmit(e, page, addFormData, handleNext, setErrors)} id={page.id}>
            <h1>{page.title}</h1>
            {page.fields.map(field => (
                <div key={field.name}>
                    <label>{//capitalise first letter
                        field.name.charAt(0).toUpperCase() + field.name.slice(1)
                         }</label>
                    <FieldRenderer field={field} />
                    {errors[field.name] && errors[field.name].map((error, index) => (
                        <div key={index} className="error-message">{error}</div>
                    ))}
                </div>
            ))}
            <button type="submit" className="btn btn-success">Next</button>
        </form>
    );
};
export default GenerateForm;