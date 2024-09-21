import React, { createContext, useState, ReactNode } from 'react';

import Pages from '../config/pages';
export interface FormDataContextType {
    formData: { [key: string]: FormDataEntryValue };
    addFormData: (newData: { [key: string]: FormDataEntryValue }) => void;
    handleNext: () => void;
    currentPage: number;
}

export const FormDataContext = createContext<FormDataContextType | undefined>(undefined);

export const FormDataProvider = ({ children }: { children: ReactNode }) => {
    const [formData, setFormData] = useState<{ [key: string]: FormDataEntryValue }>({});
    const [currentPage, setCurrentPage] = useState(0);

    const pages = Pages.pages;
    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };
    const addFormData = (newData: { [key: string]: FormDataEntryValue }) => {
        setFormData(prevData => ({ ...prevData, ...newData }));
    };

    return (
        <FormDataContext.Provider value={{ formData, addFormData,handleNext,currentPage }}>
            {children}
        </FormDataContext.Provider>
    );
};