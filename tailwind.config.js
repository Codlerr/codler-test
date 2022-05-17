module.exports = {
    darkMode: "media",
    content: ["./src/**/*.{js,jsx,ts,tsx}",],
    theme: {
        screens: {
            'xs':'270px',
            'sm': '360px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1270px',
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
          fontFamily: {
             gilroybold:['gilroybold',"cursive"],
             gilroylight:["gilroylight","cursive"],
             gilroysemibold:["gilroysemibold","cursive"],
             gilroythin:["gilroythin","cursive"],
             gilroymedium:["gilroymedium","cursive"]

          },
         
      },
  },
  plugins: [],
}
