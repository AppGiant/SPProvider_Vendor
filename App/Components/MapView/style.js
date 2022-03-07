import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../Themes';
import {H, W} from '../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  round: {
    minHeight: H(100),
    paddingVertical: H(20),
    paddingHorizontal: W(10),
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    position: 'absolute',
    bottom: 0,
    start: 0,
    end: 0,
    elevation: 2,
  },
  mapText: {
    alignSelf: 'flex-start',
    fontSize: Fonts.size.h5,
    paddingBottom: H(20),
  },
  mapText1: {
    alignSelf: 'flex-start',
    fontSize: Fonts.size.small,
    paddingTop: H(20),
    color: Colors.BLUE_GREY,
  },
  mapTextBold: {
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingBottom: H(20),
    paddingTop: H(5),
    // flex: 4,
  },
  btn: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: 8,
    marginTop: H(20),
    paddingVertical: H(2),
  },
  addContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  blueText: {
    color: Colors.PRIMARY,
    // flex: 1,
    paddingStart: W(10),
    paddingTop: H(10),
  },
  pinIcon: {
    // left: '50%',
    // marginLeft: W(-20),
    marginTop: H(-50),
    position: 'absolute',
    top: '50%',
    color: Colors.black,
    alignSelf: 'center',
  },
});
export default styles;
