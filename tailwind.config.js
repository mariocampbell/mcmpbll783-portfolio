module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      logotipo: [ 'Open Sans', 'sans-serif' ],
      headers: [ 'Roboto', 'sans-serif' ],
      body: [ 'Lato', 'sans-serif' ]
    },
    extend: {
      spacing: {
        '14': '3.5rem'
      },
      colors: {
        primary: {
          '100': '#EBF4FF',
          '200': '#B5D1F2',
          '300': '#95BCE6',
          '400': '#629DD9',
          '500': '#3182CE',
          '600': '#356599',
          '700': '#2A4365',
          '800': '#273747',
          '900': '#1A2533',
        }
      }
    },
  },
  variants: {},
  plugins: [],
}
