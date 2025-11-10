/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all files that contain Nativewind classes.
    content: ['./app/**/*.tsx', './components/**/*.{js,jsx,ts,tsx}', './teste/**/*.{js,jsx,ts,tsx}'],
    presets: [require('nativewind/preset')],
    theme: {
        extend: {
            colors: {
                nubank: '#8308d1',
            },
            fontFamily: {
                roboto: ['Roboto-Regular', 'sans-serif'],
                'roboto-bold': ['Roboto-Bold', 'sans-serif'],
                'roboto-black': ['Roboto-Black', 'sans-serif'],
                'roboto-medium': ['Roboto-Medium', 'sans-serif'],
                'roboto-light': ['Roboto-Light', 'sans-serif'],
                'roboto-thin': ['Roboto-Thin', 'sans-serif'],
                'roboto-semiBold': ['Roboto-SemiBold', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
