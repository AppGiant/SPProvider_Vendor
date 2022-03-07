import {I18nManager, StyleSheet} from 'react-native';
import {ApplicationStyles, Colors, Fonts} from '../../Themes';
import {W, H} from '../../utils/DimensionCalculator';
const style = StyleSheet.create({
  cardContainer: {
    // margin: H(20),
  },
  headText: {
    fontWeight: 'bold',
    color: Colors.lightText,
    fontSize: Fonts.size.h4,
    alignSelf: 'flex-start',
  },
  image: {
    marginEnd: W(10),
    width: W(70),
    height: W(70),
    borderRadius: W(35),
  },
  tagIcon: {
    alignSelf: 'center',
    color: Colors.Yellow,
    marginRight: W(5),
  },
  textContainer: {
    marginTop: H(1),
  },
  reviewText: {
    marginTop: H(10),
    marginHorizontal: W(2),
    alignSelf: 'flex-start'
  }
});
export default style;
