
import { Validation } from "../models/interfaces";

export const validateField = (value: any, rule: Validation): string[] => {
    const errors: string[] = [];
        switch (rule.type) {
            case 'required':
                if (!value) {
                    errors.push(rule.message);
                }
                break;
            case 'regex':
                if (rule.pattern && !new RegExp(rule.pattern).test(value)) {
                    errors.push(rule.message);
                }
                break;
            case 'pastOnly':
                if (value && new Date(value.toString()) > new Date()) {
                    errors.push(rule.message);
                }
                break;
            default:
                break;
        }
    return errors;
};