import React, { useContext, useState } from "react";
import "../styles/form_generator.css";
import { FormDataContext } from "../context/form_context";
import Pages from "../config/pages";
import { evaluateCondition } from "../utils/evaluate_conditions";
import useConditionalNavigation from "../hooks/conditional_nav";
import WelcomePage from "../pages/welcome";
import ReviewPage from "../pages/review";
import handleSubmit from "../utils/handle_submit";
import { useTheme } from "../context/theme_context";
import FieldRenderer from "./field_renderer";

const GenerateForm: React.FC = () => {
    const context = useContext(FormDataContext);
    if (!context) {
        throw new Error("FormDataContext must be used within a FormDataProvider");
    }
    const { formData, addFormData, currentPage, handleNext } = context;
    const { theme } = useTheme();
    const page = Pages.pages[currentPage];
    const [errors, setErrors] = useState<{ [key: string]: string[] }>({});

    useConditionalNavigation(page, formData, handleNext);

    const labelStyle = {
        fontSize: theme.labelStyles.fontSize,
        color: theme.labelStyles.color,
        border: theme.labelStyles.border
    };
    const formPageStyle = {
        backgroundColor: theme.secondaryColor,
        color: theme.labelStyles.color,
        padding: "20px",
        borderRadius: "5px"
    };
    const inputStyle = {
        border: theme.inputFieldStyles.border,
        backgroundColor: theme.inputFieldStyles.backgroundColor
    };

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
        <div style={formPageStyle}>
            <form className="form" onSubmit={(e) => handleSubmit(e, page, addFormData, handleNext, setErrors)} id={page.id}>
                <h1>{page.title}</h1>
                {page.fields.map(field => (
                    <div key={field.name}>
                        <label style={labelStyle}>{field.name}</label>
                        <FieldRenderer field={field} inputStyle={inputStyle} />
                        {errors[field.name] && errors[field.name].map((error, index) => (
                            <div key={index} className="error-message">{error}</div>
                        ))}
                    </div>
                ))}
                <button type="submit" className="btn btn-success">Next</button>
            </form>
        </div>
    );
};

export default GenerateForm;