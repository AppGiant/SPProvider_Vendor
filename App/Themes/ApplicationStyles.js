import Fonts from './Fonts';
import Metrics from './Metrics';
import Colors from './Colors';
import ThemeColors from '../Constants/color';
import {H, W} from '../utils/DimensionCalculator';
import color from '../Constants/color';
import colors from './Colors';

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    greenText: {color: color.GREEN},
    redText: {color: color.RED},

    mainContainer: {
      flex: 1,
      backgroundColor: Colors.white,
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    container: {
      flex: 1,
      paddingTop: Metrics.baseMargin,
      backgroundColor: Colors.transparent,
      paddingHorizontal: W(10),
    },
    section: {
      margin: Metrics.section,

      padding: Metrics.baseMargin,
    },
    sectionText: {
      ...Fonts.style.normal,
      paddingVertical: Metrics.doubleBaseMargin,

      marginVertical: Metrics.smallMargin,
      textAlign: 'center',
    },
    subtitle: {
      padding: Metrics.smallMargin,
      marginBottom: Metrics.smallMargin,
      marginHorizontal: Metrics.smallMargin,
    },
    titleText: {
      fontSize: Fonts.size.h1,
      fontWeight: 'bold',
      alignSelf: 'flex-start',
    },
    inputHeaderTitle: {
      fontWeight: 'bold',
      alignSelf: 'flex-start',
      marginStart: W(12),
    },
    headText: {
      fontSize: Fonts.size.h5,
      fontWeight: 'bold',
      alignSelf: 'flex-start',
      marginBottom: H(10),
    },
    subHeadText: {
      fontSize: Fonts.size.h7,
      fontWeight: 'bold',
      alignSelf: 'flex-start',
      color: Colors.subTitleText,
    },
  },
  darkLabelContainer: {
    padding: Metrics.smallMargin,
    paddingBottom: Metrics.doubleBaseMargin,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
    marginBottom: Metrics.baseMargin,
  },
  darkLabel: {
    fontFamily: Fonts.type.bold,
    color: Colors.snow,
  },
  groupContainer: {
    margin: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  sectionTitle: {
    ...Fonts.style.h4,
    color: Colors.coal,
    backgroundColor: Colors.ricePaper,
    padding: Metrics.smallMargin,
    marginTop: Metrics.smallMargin,
    marginHorizontal: Metrics.baseMargin,
    borderWidth: 1,
    borderColor: Colors.ember,
    alignItems: 'center',
    textAlign: 'center',
  },
  button: {
    buttonContainer: {
      paddingVertical: H(4),
      borderRadius: 5,
      marginBottom: H(10),
      marginHorizontal: W(10),
      backgroundColor: ThemeColors.PRIMARY,
    },
    buttonTitle: {
      fontWeight: 'bold',
      fontSize: Fonts.size.h5,
    },
  },
  boldText: {
    fontSize: Fonts.size.h7,
    fontWeight: 'bold',
    padding: Metrics.smallMargin,
  },
  customCard: {
    borderRadius: 10,
    // marginBottom: H(10),
    elevation: 2,
    marginVertical: H(10),
    marginHorizontal: W(10),
    paddingHorizontal: W(10),
    paddingVertical: H(16),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 3.22,
  },
};

export default ApplicationStyles;
