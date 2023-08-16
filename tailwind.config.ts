import type {Config} from 'tailwindcss'

const config: Config = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
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
        require('@tailwindcss/nesting'),
        require('postcss-import'),
        require('postcss-nested')
    ],
}
export default config
