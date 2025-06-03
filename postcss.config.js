export default {
  plugins: {
    'postcss-import': {}, // needs to come first
    tailwindcss: {},  // Revert to standard Tailwind plugin
    autoprefixer: {},
  },
}