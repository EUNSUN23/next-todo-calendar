import type {Config} from 'tailwindcss'
import plugin from "tailwindcss/plugin";
require('tailwindcss/plugin');

const config: Config = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html", "./app/**/*.{js,jsx,ts,tsx}", "./index.html"],
    theme: {
        extend: {
            colors:{
                'gray-light-1': '#f7f7f7',
                'gray-light-2': '#eee',
                'gray-dark':'#777',
                'gray-dark-2': '#999',
                'gray-dark-3': '#333',
                'neutral': '#C1BDC4',
                'neutral-light-1': '#EEF1F5',
                'neutral-light-2': '#EAEEF3',
                'neutral-light-3': '#E6EAF0',
                'neutral-dark': '#676767',
                'common': '#2998ff',
                'minor': '#ffb900',
                'important': '#D22E1D',
                'shadow-dark': '0 2rem 6rem rgba(0, 0, 0, .3)',
                'shadow-light': '0 2rem 5rem rgba(0, 0, 0, .06)'
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            }
        },
    },
    plugins: [
        require('postcss-import'),
        require('tailwindcss/nesting'),
        require('tailwindcss'),
        require('autoprefixer'),
        plugin(function ({ addComponents, matchUtilities,theme}) {
           addComponents({
                '.checkbox': {
                    position: 'relative',
                    'input,svg': {
                        width: '21px',
                        height: '21px',
                        display: 'block'
                    },
                    'input': {
                        '-webkit-appearance': 'none',
                        '-moz-appearance': 'none',
                        position: 'relative;',
                        outline: 'none;',
                        backgroundColor: '#fff',
                        border: 'none',
                        margin: '0',
                        padding: '0',
                        cursor: 'pointer',
                        borderRadius: '4px',
                        boxShadow: 'inset 0 0 0 1px #D1D6EE',
                        '&:hover': {
                            boxShadow: 'inset 0 0 0 2px, #BBC1E1'
                        },
                        '&:checked': {
                            boxShadow: 'inset 0 0 0 2px #1E2235'
                        },
                        '&:disabled':{
                            boxShadow:'inset 0 0 0 2px #999',
                            cursor:'default',
                            '& + svg':{
                                stroke:'#999',
                                'stroke-dasharray': '16.1 86.12',
                                'stroke-dashoffset': '102.22'
                            }
                        }
                    },
                    'svg': {
                        pointerEvents: 'none',
                        fill: 'none',
                        'stroke-width': '2px',
                        'stroke-linecap': 'round',
                        'stroke-linejoin': 'round',
                        stroke:'#999',
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        width: '21px',
                        height: '21px',
                        'stroke-dasharray': '16.1 86.12',
                        'stroke-dashoffset': '102.22'
                    }

                },


            })
            matchUtilities({
                hoverColorChange:(value) => ({
                    border: '1px solid white',
                    borderRadius: '0.25rem',
                    '&:hover': {
                        border: `1px solid ${value}`,
                        borderRadius: '0.25rem',
                        backgroundColor: `${value}`,
                        transitionTimingFunction: 'transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)',
                        transitionDuration: '120ms',
                        transitionProperty: 'background-color'
                    }
                })
            },
                {values:theme('colors')}
            )
        })
    ],
}
export default config
