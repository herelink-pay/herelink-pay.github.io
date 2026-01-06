// tailwind.config.js
module.exports = {
    content: ['./public/**/*.{html,js}'],
    theme: {
        extend: {
            colors: {
                primary: '#3B82F6',
                secondary: '#10B981',
                danger: '#EF4444',
                neutral: '#64748B',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        }
    },
    plugins: [],
}