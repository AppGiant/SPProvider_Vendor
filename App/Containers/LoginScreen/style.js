import {I18nManager, StyleSheet} from 'react-native';
import {Metrics, ApplicationStyles, Fonts} from '../../Themes/';
import {W, H} from '../../utils/DimensionCalculator';
import Colors from '../../Constants/color';
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  ...ApplicationStyles.button,
  buttonContainer: {
    ...ApplicationStyles.button.buttonContainer,
    flex: 0.6,
    alignSelf: 'flex-end',
    paddingHorizontal: W(10),
  },
  container: {
    paddingTop: W(10),

    marginHorizontal: W(10),
  },
  logo: {
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain',
    marginTop: H(20),
  },
  centered: {
    alignItems: 'center',
  },
  headText: {
    ...ApplicationStyles.screen.titleText,
    marginTop: H(20),
    marginStart: W(20),
  },
  image: {
    alignSelf: 'center',
  },
  buttonView: {
    alignItems: 'center',
  },
  linkText: {
    fontSize: Fonts.size.h8,
    color: Colors.PRIMARY,
    marginStart: W(12),
  },
  buttonIconContainer: {
    padding: W(5),
    borderRadius: 4,
    marginEnd: W(80),
  },
  buttonContainerFullWidth: {
    paddingVertical: H(4),
    borderRadius: 5,
    marginBottom: H(10),
    marginHorizontal: W(10),
  },
  buttonStyle: {
    justifyContent: 'flex-start',
  },
  loginImage: {
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain',
    marginTop: H(10),
    alignSelf: 'center',
  },
  blueText: {
    color: Colors.PRIMARY,
    fontWeight: 'bold',
    fontSize: Fonts.size.regular,
    paddingBottom: H(10),
  },
  radioBtn: {
    paddingVertical: H(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
