import React, {createContext, useState, useContext, ReactNode} from 'react';
import styleConfig from '../style_config.json';
import {StyleConfig, Theme} from '../models/interfaces';

interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
    allTheme: StyleConfig;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [theme, setTheme] = useState<Theme>(styleConfig.themes.light);
    const allTheme: StyleConfig = styleConfig;
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === styleConfig.themes.light ? styleConfig.themes.dark : styleConfig.themes.light);
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme, allTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};