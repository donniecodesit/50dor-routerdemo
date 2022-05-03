import React, { createContext, useContext, useState, useEffect } from "react";

const Theme = createContext();

export const Provider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    // This runs when the state of theme changes, including when Provider is mounted.
    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const values = { theme, setTheme };

    return <Theme.Provider value={values}>{children}</Theme.Provider>;
}

export const useTheme = () => useContext(Theme);