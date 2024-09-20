import { useEffect } from "react";
import { FormDataContextType } from "../context/FormContext";
import { Page } from "../models/interfaces";
import { evaluateCondition } from "../utils/evaluateConditions";

const useConditionalNavigation = (page: Page, formData: FormDataContextType["formData"], handleNext: FormDataContextType["handleNext"]) => {
    useEffect(() => {
        if (page.conditional && !evaluateCondition(page.conditional, formData)) {
            handleNext();
        }
    }, [page, formData, handleNext]);
};

export default useConditionalNavigation;