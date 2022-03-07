import i18next from 'i18next';
import React, { useContext, useState } from 'react';

const LanguageContext = React.createContext();
export const LanguageTogglerContext = React.createContext();
export const useLanguage = () => {
    return useContext(LanguageContext);
}
export const useLanguageToggler = () => {
    return useContext(LanguageTogglerContext);
}


export default (props) => {
    const [lang, setLang] = useState('en');
    const toggleLanguage = (t) => {
        i18next.changeLanguage(i18next.language=='en'?'fr':'en', (err, t) => {
            if (err) return console.log('something went wrong loading', err);
            setLang(t);
          })
    }
    return (
        <LanguageContext.Provider value={lang} >
            <LanguageTogglerContext.Provider value={toggleLanguage} >
                {props.children}
            </LanguageTogglerContext.Provider>
        </LanguageContext.Provider>
    );
}