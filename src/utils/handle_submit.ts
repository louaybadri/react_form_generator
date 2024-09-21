import {Field, Page} from "../models/interfaces";
import {validateField} from "./validate_field";
import React from "react";

const handleSubmit = (e: React.FormEvent<HTMLFormElement>, page: Page, addFormData: (data: any) => void, handleNext: () => void, setErrors: React.Dispatch<React.SetStateAction<{ [key: string]: string[] }>>) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const data = new FormData(form);
    const newFormData: { [key: string]: FormDataEntryValue } = {};
    const newErrors: { [key: string]: string[] } = {};

    data.forEach((value, key) => {
        newFormData[key] = value;
        const fields: Field[] = page.fields;
        const field = fields.find((f: Field) => f.name === key);
        if (field?.validation) {
            newErrors[key] = validateField(value, field.validation);
        }
    });

    if (Object.values(newErrors).flat().length !== 0) {
        setErrors(newErrors);
    }
    addFormData(newFormData);
    handleNext();
};
export default handleSubmit;