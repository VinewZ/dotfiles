/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vs-topbar': 'var(--vs-dark-900)',
        'vs-footer': 'var(--vs-dark-900)',
        'vs-tabs': 'var(--vs-dark-900)',
        'vs-sidebar': 'var(--vs-dark-800)',
        'vs-content': 'var(--vs-dark-700)',
        'vs-sidebar-tabs': 'var(--vs-dark-900)',
      }
    },
  },
  plugins: [],
}