import {StyleSheet} from 'react-native';
import {ApplicationStyles, Colors} from '../../Themes';
import {H, W} from '../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  containerStyle: {
    width: W(250),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    //  backgroundColor:"green",
    marginBottom: H(10),
    borderRadius: 10,
    zIndex: 45,
  },

  variationImage: {
    width: W(70),
    borderRadius: H(10),
    height: H(90),
    alignItems: 'flex-end',
    marginEnd: W(10),
    marginBottom: H(10),
  },
  imagesContainer: {
    // paddingVertical:H(20),
  },
  headText: {
    ...ApplicationStyles.screen.headText,
  },
  header: {
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  price: {
    ...ApplicationStyles.screen.subHeadText,
    alignSelf: 'center',
    flex: 1,
    textAlign: 'right',
  },
  subHeadText: {
    ...ApplicationStyles.screen.subHeadText,
  },
  noImageText: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: H(30),
    color: 'red',
  },
  btn: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: 8,
    paddingHorizontal: W(10),
  },
  btnContainer: {
    marginTop: H(20),
    justifyContent: 'flex-start',
  },
  deleteIcon: {
    marginStart: W(20),
  },
});
export default styles;
