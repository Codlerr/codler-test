module.exports = {
    darkMode: "media",
    content: ["./src/**/*.{js,jsx,ts,tsx}",],
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
        },
      extend: {
          width: {
              '1/7': '13%',
              '2/3':'80%',
              '3/5': '110% ',
              '2/5':'120%',
              '3/5':'750px'
          },
          height: {
              '2/3':'95%',
              '4/5':'120vh'
          },
          marginLeft: {
              '2/3':'50%',
              '4/5':'750px'
          },
          marginTop: {
             
          },
      }
  },
  plugins: [],
}
