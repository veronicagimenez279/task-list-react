import React, { useEffect } from 'react'
import UseLocalStorage from '../../hooks/UseLocalStorage'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import styles from "./index.module.css"

export const ThemeButton = () => {
    const initialValue = window.matchMedia('(prefers-color-scheme: dark)').matches
    const [isDarkMode, setIsDarkMode] = UseLocalStorage('colorScheme', initialValue)

    const toggleColorScheme = () => {
        setIsDarkMode((prevState) => !prevState);
    };

    useEffect(() => {
        const colorScheme = isDarkMode ? 'dark' : 'light';
        document.documentElement.setAttribute('color-scheme', colorScheme);
        localStorage.setItem('colorScheme', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    return (
        <button
            onClick={toggleColorScheme}
            className={styles.btn}
            aria-label='Dark/Light Mode Button'
        >
            {isDarkMode
                ?
                <SunIcon />
                :
                <MoonIcon />
            }
        </button>
    );
}
