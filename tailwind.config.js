/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // Include all necessary file types
    ],
    theme: {
        extend: {
            colors: {
                hoverColor: "#FFC000",
                brightColor: "#dd8036",
                backgroundColor: "#36ae9a",
            },
        },
    },
    plugins: [],
};