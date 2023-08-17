import type {Config} from 'tailwindcss'

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
        require('autoprefixer')
    ],
}
export default config
