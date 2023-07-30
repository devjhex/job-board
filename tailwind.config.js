/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    'index.html',
    'jobs.html',
    'details.html'
  ],
  theme: {

    screens:{
      'xs':'320px',
      's':'360px',
      'largeP':'390px',
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl':'1536px',

    },
    extend: {
      fontFamily:{
        sofia:"sofia"
      },
    },
  },
  plugins: [],
}

