module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1060px',
      xl: '1440px',
    },
    fontSize: {
      sm: '0.9rem',
      base: '1.125rem',
      xl: '1.375rem',
      xxl: '1.5rem',
      xxxl: '1.953rem',
      xxxxl: '2.441rem',
      "5xl": '3.052rem',
    },
    extend: {
      fontFamily: {
         'Grotesk': 'Space Grotesk, Arial'
      },
      colors:{
        border_error: 'hsl(0, 100%, 66%)',
        border_active: 'bg-gradient-to-r from-[hsl(249, 99%, 64%)] to-[hsl(278, 94%, 30%)]'
      }
    },
  },
  plugins: [
     require('@tailwindcss/forms')({
       strategy: 'base', // only generate global styles
     }),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/aspect-ratio')
  ]
}
