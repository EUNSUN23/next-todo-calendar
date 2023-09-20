import type {Config} from 'tailwindcss'
import plugin from "tailwindcss/plugin";
require('tailwindcss/plugin');

const config: Config = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html", "./app/**/*.{js,jsx,ts,tsx}", "./index.html"],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [
        require('postcss-import'),
        require('tailwindcss/nesting'),
        require('tailwindcss'),
        require('autoprefixer'),
        plugin(function ({addUtilities, addComponents}) {
            addUtilities({
                '.hover-neutral-light-1': {
                    border: '1px solid white',
                    borderRadius: '0.25rem',
                    '&:hover': {
                        border: '1px solid #EEF1F5',
                        borderRadius: '0.25rem',
                        backgroundColor: '#EEF1F5',
                        transitionTimingFunction: 'transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)',
                        transitionDuration: '120ms',
                        transitionProperty: 'background-color'
                    }
                }
            })
        })
    ],
}
export default config
