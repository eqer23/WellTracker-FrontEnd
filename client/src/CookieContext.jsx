import React, { createContext, useState, useEffect, useContext } from "react";

const CookieContext = createContext();

export const CookieProvider = ({ children }) => {
    const [cookie, setCookie] = useState(null);

    useEffect(() => {
        // Check if the cookie is cleared or expired
        const cookieExists = document.cookie.includes("session-token");
        if (!cookieExists) {
            // Cookie is cleared or expired, update the cookie state
            setCookie(null);
        }
    }, []);

    return (
        <CookieContext.Provider value={{ cookie, setCookie }}>
            {children}
        </CookieContext.Provider>
    );
};

export const useCookie = () => useContext(CookieContext);
