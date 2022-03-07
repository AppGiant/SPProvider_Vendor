import {StyleSheet} from 'react-native';
import color from '../../../Constants/color';
import {ApplicationStyles, Colors, Fonts} from '../../../Themes';
import {H, W} from '../../../utils/DimensionCalculator';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    marginTop: H(50),
  },
  headText: {
    fontSize: 30,
    marginTop: H(20),
    fontWeight: 'bold',
  },
  lightText: {
    fontSize: 14,
    marginTop: H(10),
    textAlign: 'center',
    marginHorizontal: W(30),
    marginBottom: H(20),
  },
  addIconContainer: {
    position: 'absolute',
    right: W(5),
    top: H(10),
    alignItems: 'center',
  },
  header: {
    marginBottom: W(10),
  },
  ...ApplicationStyles.button,
  cardContainerStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    marginBottom: H(10),
    borderRadius: 10,
  },
  subHeadText: {
    ...ApplicationStyles.screen.subHeadText,
  },
  icons: {flex: 1, alignItems: 'center', justifyContent: 'flex-end'},
  iconContainer: {
    marginEnd: W(10),
  },
  servicesDetail: {
    alignSelf: 'flex-end',
  },
  blueText: {
    color: color.PRIMARY,
    paddingStart: W(10),
    fontSize: Fonts.size.h7,
  },
  createView: {
    justifyContent: 'flex-end',
    paddingTop: H(6),
    alignItems: 'center',
    paddingEnd: W(20),
  },
  plusIcon: {
    color: color.PRIMARY,
  },
  search: {
    // marginVertical: H(-20),
    borderBottomEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  filtersContainer: {
    alignItems: 'center',
    marginBottom: H(10),
    marginHorizontal: W(10),
  },
  filterExtra: {
    color: Colors.PRIMARY,
    marginEnd: W(7),
  },
  filterIconContainer: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: 5,
  },
  filtersItemContainer: {
    flex: 1,
    overflow: 'hidden',
  },
});
export default styles;
