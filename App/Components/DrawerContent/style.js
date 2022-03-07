import { Platform } from 'react-native';
import { StyleSheet } from 'react-native';
import color from '../../Constants/color';
import Colors from '../../Constants/color';
import { Fonts } from '../../Themes';
import colors from '../../Themes/Colors';
import { H, W } from '../../utils/DimensionCalculator';
export default StyleSheet.create({
    profileWrapper: {
       // justifyContent: "center",
        alignItems:"flex-start",
        paddingStart:H(20),
       flex:1,
        backgroundColor:color.PRIMARY,
        paddingVertical:H(30),
        marginTop:Platform.OS=='ios'? -H(70):0
    },
    profile: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10
    },
    text: {
        marginTop: 5
    },
    boldLabel: {
       
        textTransform: "capitalize",
       fontSize : Fonts.size.input,
        color:"#828282",
        
        flex:1
    },
    username: {
        color: Colors.GRAY
    },
    separatorLine: {
        borderBottomColor: Colors.GRAY,
        borderBottomWidth: 0.6,
        marginVertical: 10,
        width: "100%"
    },
    row: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: W(20),
        marginStart: 30,
        marginEnd: 10
    },
    icon: {
        
    marginEnd: W(10)
    }
});