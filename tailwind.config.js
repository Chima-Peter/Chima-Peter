export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sen: "var(--font-sen)",
      },
      backgroundImage: {
        'background': "url('/background.png')",
      }
    },
    screens: {
      xs: '360px', // Small phones (iPhone SE, Galaxy A series)
      sm: '640px', // Standard phones
      md: '768px', // Tablets
      lg: '1024px', // Laptops
      xl: '1440px', // Larger desktops
      '2xl': '2560px', // Very large desktops
    },
  },
  plugins: [],
}