import {StyleSheet} from "react-native"
import color from "../../Constants/color"
import { Colors } from "../../Themes";
import { H, W } from "../../utils/DimensionCalculator";

const styles=StyleSheet.create({
    container:{
        backgroundColor:color.LIGHT_BG,
        borderRadius:20,
        paddingHorizontal:W(10),
        paddingVertical:H(5),
        justifyContent:"center",
        alignItems:"center",
        marginEnd:H(7)
    },
    label:{
       marginEnd:H(2)
    }
})
export default styles;