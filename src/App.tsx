import React, { useState, useContext } from 'react';
import './App.css';
import Pages from './pages.json'; // Ensure pages.json is typed correctly or add types
import GenerateForm from "./components/formGenerator";
import { FormDataContext, FormDataProvider } from './context/FormContext';

function App() {

    return (
        <div className="App">
            <GenerateForm />
        </div>
    );
}

export default function AppWithProvider() {
    return (
        <FormDataProvider>
            <App />
        </FormDataProvider>
    );
}