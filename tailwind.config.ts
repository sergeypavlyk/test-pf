import type { Config } from 'tailwindcss';

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                black: '#171717',
                indigo: '#818CF8',
                accent: '#525252',
                green: '#6EE7B7',
                orange: '#FDBA7480',
                'dark-orange': '#9A3412',
                'light-green': '#6EE7B780',
                'dark-green': '#065F46',
                'dark-indigo': '#3730A3',
                'light-gray': '#F5F5F5',
                'medium-gray': '#E9E9E9',
                'dark-gray': '#CBD5E1',
                'light-blue': '#A5B4FC',
            },
            borderRadius: {
                '6': '6px',
                '4': '4px',
                '50': '50px',
            },
            fontSize: {
                m: '16px',
                sm: '14px',
                xs: '12px',
            },
        },
    },
    plugins: [],
} satisfies Config;
