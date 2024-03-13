/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      blur: {
        xs: '2px',
      },
      screens: {
        mobile: { max: '639px' },
      },
      spacing: {
        18: '4.5rem',
      },
      letterSpacing: {
        tight: '-0.028125em',
        tightLg: '-0.034375em',
        tightXl: '-0.040625em',
      }
    },
    fontFamily: {
      heading: ['museo-sans'],
      sans: ['Nunito'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar-hide')
  ],
}
