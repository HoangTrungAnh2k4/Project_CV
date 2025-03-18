/** @type {import('tailwindcss').Config} */
import tailwindcssAnimated from 'tailwindcss-animated';

export default {
    content: ['./src/**/*.{html,js,jsx}'],
    theme: {
        extend: {
            colors: {
                primary: '#04293A',
                second: '#A6ACBE',
                textColor1: '#3a3a3a',
                textColor2: '#575757',
                background: '#e2e2e2',
                redColor: '#e31223',
            },
        },
    },
    plugins: [tailwindcssAnimated],
};
