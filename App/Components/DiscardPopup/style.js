import { StyleSheet } from 'react-native'
import { ApplicationStyles, Fonts } from '../../Themes'
import colors from '../../Themes/Colors'
import { H, W } from '../../utils/DimensionCalculator'

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'transparent',
    // marginHorizontal: W(20),
    zIndex: 1000,
    backgroundColor: colors.PRIMARY,
    borderTopLeftRadius: W(20),
    borderTopRightRadius: W(20),
    elevation: 2,
  },
  roundCard: {
    paddingHorizontal: W(16),
    paddingVertical: H(10),
  },
  container1: {
    alignItems: 'center',
    // backgroundColor: 'red',
    marginBottom: H(20),
  },
  circleImage: {
    marginEnd: W(10),
    width: W(70),
    height: W(70),
    borderRadius: W(35),
    backgroundColor: 'transparent',
  },
  headText: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h6,
    alignSelf: 'flex-start',
  },
  subText: {
    fontSize: Fonts.size.h7,
    alignSelf: 'flex-start',
  },
  container2: {
    justifyContent: 'space-between',
    backgroundColor: 'red',
  },
  textHolder: {
    flex: 2,
  },
  dateView: {
    flex: 1,
  },
  dateText: {
    alignSelf: 'flex-end',
    // paddingHorizontal: W(10),
  },
  input: {
    marginTop: W(20),
    height: H(100),
  },
  btnHolder: {
    marginTop: H(20),
    // paddingHorizontal: W(10),
    // paddingVertical: H(10),
    justifyContent: 'center',
    marginHorizontal: W(10),
  },
  btn1: {
    paddingVertical: H(2),
    paddingHorizontal: W(10),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.PRIMARY,
    marginBottom: H(10),
    //marginHorizontal:W(10),
    backgroundColor: colors.WHITE,
  },
  btn2: {
    paddingVertical: H(2),
    paddingHorizontal: W(20),
    borderRadius: 5,
    marginBottom: H(10),
    backgroundColor: colors.PRIMARY,
    //marginHorizontal:W(10),
  },
  buttonTitle1: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h7,
    color: colors.PRIMARY,
    paddingHorizontal: W(16),
  },
  buttonTitle2: {
    fontWeight: 'bold',
    fontSize: Fonts.size.h7,
    paddingHorizontal: W(20),
  },
  containerHeader: {
    paddingVertical: H(10),
    // paddingHorizontal: W(10),
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
  containerSubHeader: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
    // paddingVertical: H(10),
    // paddingHorizontal: W(10),
  },
  header: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  title: {
    alignSelf: 'center',
    fontSize: Fonts.size.h4,
    fontWeight: 'bold',
    marginStart: W(18),
    backgroundColor: 'transparent',
    color: colors.white,
  },
  icon: {
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    // position: 'absolute',
    marginVertical: H(10),
    marginEnd: W(10),
    color: colors.white,
  },
  discardText: {
    paddingHorizontal: W(10),
  },
})
export default styles
