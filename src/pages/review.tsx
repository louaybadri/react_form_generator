import React from "react";
import { Field } from "../models/interfaces";
import { useTheme } from "../context/theme_context";

const ReviewPage: React.FC<{ fields: Field[], formData: any, errors: { [key: string]: string[] } }> = ({ fields, formData, errors }) => {
    const { theme } = useTheme();

    const reviewPageStyle = {
        backgroundColor: theme.secondaryColor,
        color: theme.labelStyles.color,
        padding: "20px",
        borderRadius: "5px",
        border: `1px solid ${theme.secondaryColor}`
    };
    const textStyle = {
        color: theme.labelStyles.color
    }
    const headerStyle = {
        backgroundColor: theme.secondaryColor,
        color: theme.labelStyles.color,
        padding: "10px",
        borderRadius: "3px",
        marginBottom: "10px"
    };

    const fieldStyle = {
        padding: "10px",
        borderBottom: `1px solid ${theme.secondaryColor}`
    };

    return (
        <div className="review-page" style={reviewPageStyle}>
            <h1>Review</h1>
            <div className="review-fields">
                <div className="review-header review-header-title" style={headerStyle}>Title</div>
                <div className="review-header review-header-value" style={headerStyle}>Value</div>
                <div className="review-header review-header-remark" style={headerStyle}>Remark</div>

                {fields.map(field => {
                    const value = formData[field.name];

                    return (
                        <div key={field.name} className={`review-field ${field.required ? 'required' : ''}`} style={fieldStyle}>
                            <div className="review-field-name">{field.name}</div>
                            <div className="review-field-value" style={textStyle}>{value?.toString() || "Missing"}</div>
                            <div className="review-field-remark">
                                {errors[field.name] && errors[field.name].length > 0 && (
                                    <div className="error-messages">
                                        {errors[field.name].map((error: string, index: number) => (
                                            <div key={index} className="error-message">{error}</div>
                                        ))}
                                        <br />
                                        {field.required && !value ? "Required" : ""}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ReviewPage;