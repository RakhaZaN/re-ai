/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        poppins: 'Poppins, sans-serif',
        righteous: 'Righteous, cursive',
      },
      aspectRatio: {
        photo: '9 / 16',
        post: '2 / 3',
      },
    },
  },
  plugins: [],
}

