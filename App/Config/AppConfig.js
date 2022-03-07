// Simple React Native specific changes

export default {
  // font scaling override - RN default is on
  allowTextFontScaling: true,
  server: {
    baseUrl: '',
  },
  fontStyle: {
    fonts: {},
  },
  colors: {
    white: 'white',
    baseColor: '#ff9603',
    baseColor2: 'gray',

    rgbaBlack: (opacity) => `rgba(0, 0, 0,${opacity})`,
  },
};
