import { useEffect } from "react";
import { FormDataContextType } from "../context/form_context";
import { Page } from "../models/interfaces";
import { evaluateCondition } from "../utils/evaluate_conditions";

const useConditionalNavigation = (page: Page, formData: FormDataContextType["formData"], handleNext: FormDataContextType["handleNext"]) => {
    useEffect(() => {
        if (page.conditional && !evaluateCondition(page.conditional, formData)) {
            handleNext();
        }
    }, [page, formData, handleNext]);
};

export default useConditionalNavigation;