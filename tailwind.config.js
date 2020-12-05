module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },

  purge: [],
  theme: {
    extend: {

      outline: {
        green: '1px solid green',
      },
      fontSize: {
        'tiny' : '0.35rem',
        'xl': '1.25rem',
        '2.5xl': '1.825rem',
        '3xl': '1.875rem',
       },
       spacing: {
        '28': '7.00rem',
        '44':	'11rem',
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '108': '27rem',
        '120': '30rem',
        '132': '33rem',
        '144': '37rem',
        '156': '40rem',
        '216': '54rem',
      }


    },
  },
  variants: {

    padding: ['responsive','hover', 'focus', 'active'],
    margin: ['responsive','hover', 'focus', 'active'],
    backgroundColor: ["responsive", "hover", "focus", "active"],
    boxShadow: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
