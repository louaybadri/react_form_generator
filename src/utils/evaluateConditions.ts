import { Conditional } from "../models/interfaces";
import { FormDataContextType } from "../context/form_context";

export const evaluateCondition = (condition: Conditional, formData: FormDataContextType["formData"]): boolean => {
    switch (condition.type) {
        case 'and':
            return condition.conditions?.every(cond => evaluateCondition(cond, formData)) ?? true;
        case 'or':
            return condition.conditions?.some(cond => evaluateCondition(cond, formData)) ?? false;
        case 'not':
            return !(condition.conditions?.every(cond => evaluateCondition(cond, formData)) ?? true);
        case 'field':
            return formData[condition.field!] === condition.value;
        default:
            return true;
    }
};