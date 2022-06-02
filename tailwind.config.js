module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   theme: {
      extend: {
         boxShadow: {
            'event-card': '0px 0px 13.567913055419922px 0px #00000033',
         },
      },
      colors: {
         accent: '#572148',
         transparent: 'transparent',
         white: '#fff',
      },
      screens: {
         xs: '0px',
         sm: '640px',
         // => @media (min-width: 640px) { ... }

         md: '768px',
         // => @media (min-width: 768px) { ... }

         lg: '1024px',
         // => @media (min-width: 1024px) { ... }

         xl: '1280px',
         // => @media (min-width: 1280px) { ... }

         '2xl': '1536px',
      },
   },
   plugins: [],
};
