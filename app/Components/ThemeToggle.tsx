"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle(){
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(()=> setMounted(true), []);
    if (!mounted) return null;

    return(
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
            {theme === "dark" ? (
                <i className="bi bi-sun w-6 h-6 text-yellow-400"></i>
            ) : (
                <i className="bi bi-moon w-6 h-6 text-gray-800"></i>
            )}
        </button>
    );
}