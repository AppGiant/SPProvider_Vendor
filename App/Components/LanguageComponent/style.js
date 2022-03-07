import { StyleSheet } from 'react-native'
import { Fonts } from '../../Themes';
import { W } from '../../utils/DimensionCalculator';

const styles=StyleSheet.create({
    boldLabel: {
       
        textTransform: "capitalize",
       fontSize : Fonts.size.input,
        color:"#828282",
        justifyContent: "space-between",
        flex:1,
        marginStart:10
    }, row: {
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: W(20),
        marginStart: 30,
        marginEnd: 10
    },})
    export default styles;