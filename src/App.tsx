import React from 'react';
import './styles/App.css';
import GenerateForm from "./components/form_generator";
import { useTheme } from './context/theme_context';
import ToggleButton from "./components/toggle";

function App() {
    const { theme } = useTheme();

    return (
        <div className="App" style={{ backgroundColor: theme.secondaryColor }}>
            <ToggleButton />
            <GenerateForm />
        </div>
    );
}

export default App;