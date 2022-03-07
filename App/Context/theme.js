import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext();
export const ThemeTogglerContext = React.createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
}

export const useThemeToggler = () => {
    return useContext(ThemeTogglerContext);
}


export default (props) => {
    const [isDark, toggleIsDark] = useState(false);
    const toggleTheme = () => {
        
        toggleIsDark(prevIsDark => !prevIsDark);
    }
    return (
        <ThemeContext.Provider value={isDark} >
            <ThemeTogglerContext.Provider value={toggleTheme} >
                {props.children}
            </ThemeTogglerContext.Provider>
        </ThemeContext.Provider>
    );
}