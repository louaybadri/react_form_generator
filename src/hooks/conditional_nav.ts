import { useEffect } from "react";
import { FormDataContextType } from "../context/FormContext";
import {Page} from "../models/interfaces";

const useConditionalNavigation = (page: Page, formData: FormDataContextType["formData"], handleNext: FormDataContextType["handleNext"]) => {
    useEffect(() => {
        if (page.conditional) {
            const field = page.conditional.field;
            const value = page.conditional.value.toString();
            const fieldValue = formData[field];
            console.log(fieldValue);
            console.log(value);

            if (!fieldValue || fieldValue !== value) {
                handleNext();
            }
        }
    }, [page, formData, handleNext]);
};

export default useConditionalNavigation;