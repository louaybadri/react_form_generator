export interface Pages {
    pages: Page[]
}

export interface Page {
    id: string
    title: string
    fields: Field[]
    conditional?: Conditional
}

export interface Field {
    name: string
    type: string
    options?: string[]
    required?: boolean
    validation?: Validation
    label?: string,
    value?: any
}

export interface Validation {
    type: 'regex' | 'required' | 'pastOnly'| string;
    pattern?: string;
    message: string;
}

export interface Conditional {
    type: 'and' | 'or' | 'not' | 'field'| string;
    conditions?: Conditional[];
    field?: string;
    value?: string;
}


// theme interfaces
interface LabelStyles {
    fontSize: string;
    color: string;
    border?: string;
}

interface InputFieldStyles {
    border: string;
    backgroundColor: string;
}

export interface Theme {
    name: string;
    primaryColor: string;
    secondaryColor: string;
    labelStyles: LabelStyles;
    inputFieldStyles: InputFieldStyles;
    color?: string;
}

export interface StyleConfig {
    themes: {
        light: Theme;
        dark: Theme;
    };
}