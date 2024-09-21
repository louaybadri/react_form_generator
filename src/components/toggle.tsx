import React from 'react';
import { useTheme } from '../context/theme_context';

const ToggleButton: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="flex items-center justify-center p-4">
            <label
                htmlFor="theme-toggle"
                className="relative inline-flex items-center cursor-pointer"
                style={{
                    width: '3rem',
                    height: '1.5rem',
                    backgroundColor: theme.name === 'dark' ? '#4CAF50' : '#ccc',
                    borderRadius: '1.5rem',
                    padding: '0.25rem',
                    transition: 'background-color 0.3s'
                }}
            >
                <input
                    type="checkbox"
                    id="theme-toggle"
                    className="sr-only"
                    onChange={toggleTheme}
                    checked={theme.name === 'dark'}
                />
                <span
                    className="absolute left-0 top-0 bottom-0 m-auto w-5 h-5 bg-white rounded-full shadow-sm transform transition-transform"
                    style={{
                        transform: theme.name === 'dark' ? 'translateX(1.5rem)' : 'translateX(0)',
                        transition: 'transform 0.3s'
                    }}
                />
            </label>
            <div style={{
                marginLeft: '1rem',
                padding: '0.5rem',
                color: theme.name === 'dark' ? 'white' : 'black',
            }}>Toggle Theme</div>
        </div>
    );
};

export default ToggleButton;