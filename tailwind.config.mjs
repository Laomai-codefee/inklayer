export default {
    content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}'],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#f5f3ff',
                    100: '#ede9fe',
                    200: '#ddd6fe',
                    300: '#c4b5fd',
                    400: '#a78bfa',
                    500: '#8b5cf6',
                    600: '#6e56cf', // 主品牌色
                    700: '#5b46b2',
                    800: '#4c3a95',
                    900: '#2e1065'
                }
            }
        }
    },
    plugins: []
}
