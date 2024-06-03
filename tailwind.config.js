const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
    "bg-stone-500",
    "border-stone-500",
    "bg-cyan-500",
    "border-cyan-500",
    "bg-green-500",
    "border-green-500",
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite.plugin()],
};
