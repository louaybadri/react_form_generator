export interface Pages {
    pages: Page[]
}

export interface Page {
    id: string
    title: string
    fields: Field[]
    buttons?: Button[]
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
    pastOnly: boolean
}

export interface Button {
    label: string
    action: string
}

export interface Conditional {
    field: string
    value: boolean
}
