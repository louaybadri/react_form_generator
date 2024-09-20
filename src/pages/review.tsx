import React from "react";
import {Field} from "../models/interfaces";

const ReviewPage: React.FC<{ fields: Field[], formData: any, errors: { [key: string]: string[] } }> = ({ fields, formData, errors }) => (
    <div className="review-page">
        <h1>Review</h1>
        <div className="review-fields">
            <div className="review-header review-header-title">Title</div>
            <div className="review-header review-header-value">Value</div>
            <div className="review-header review-header-remark">Remark</div>

            {fields.map(field => {
                const value = formData[field.name];

                return (
                    <div key={field.name} className={`review-field ${field.required ? 'required' : ''}`}>
                        <div className="review-field-name">{field.name}</div>
                        <div className="review-field-value">{value?.toString() || "Missing"}</div>

                        <div className="review-field-remark">
                            {errors[field.name] && errors[field.name].length > 0 && (
                            <div className="error-messages">
                                {errors[field.name].map((error: string, index: number) => (
                                    <div key={index} className="error-message">{error}

                                    </div>
                                ))}
                                <br/>
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

export default ReviewPage;