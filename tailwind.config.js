module.exports = {
  darkMode: 'class',
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    container: {
      center: true,
      padding: '12px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT:'#198754',
          light: '#1fa366',
        },
        gray: {
          100: '#F8F9FA',
          400: '#CED4DA',
          600: '#6C757D',
          900: '#212529',
        },
      },
      fontSize: {
        xs: ['12px', '1.5'],
        sm: ['14px', '1.5'],
        base: ['16px', '1.5'],
        lg: ['18px', '1.5'],
        xl: ['20px', '1.5'],
        '2xl': ['24px', '1.5'],
        '3xl': ['30px', '1.5'],
        '4xl': ['36px', '1.5'],
        '5xl': ['48px', '1.5'],
        '6xl': ['64px', '1.5'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}