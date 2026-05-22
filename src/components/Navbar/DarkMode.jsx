import React, { useEffect, useState } from 'react'
import lightbtn from '../../../src/assets/images/img/light-mode-button.png'
import darktbtn from '../../../src/assets/images/img/dark-mode-button.png'

const DarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    const element = document.documentElement;

    useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");

        }
    }, [theme])
    
    return (
        <div className='relative '>
            {/*light btn */}
            <img
                src={lightbtn}
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className={`w-12 cursor-pointer absolute right-0 transition-all z-10 ${theme === "dark" ? "opacity-0 " : "opacity-100 "
                    }`}
            />
            {/*dark btn */}
            <img
                src={darktbtn}
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className={`w-12 cursor-pointer transition-all z-10`}
            />
        </div>
    )
}

export default DarkMode
