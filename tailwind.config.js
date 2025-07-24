/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{jsx,js}"], // Adjust this to match your file patterns
    theme: {
        extend: {
            fontFamily: {
                sans: ["k24", "ui-sans-serif", "system-ui", "sans-serif"],
            },
        },
    },
    plugins: [],
};