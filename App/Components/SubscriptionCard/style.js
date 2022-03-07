import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../Themes";
import { H, W } from "../../utils/DimensionCalculator";
const styles=StyleSheet.create({
    cardContainer:{
        
    
        borderWidth:1,
        padding:W(20),
   
       
        borderRadius:W(20),
        justifyContent:"center",
       alignSelf:"center",
       
//  backgroundColor:"red"
    },
    headText:{
        fontSize:Fonts.size.h1,
        fontWeight:"bold",
       alignSelf:"flex-start"
    },
    headLightText:{
        fontSize:Fonts.size.h4,
        color:Colors.lightText,
        fontWeight:"bold",
       alignSelf:"flex-start"
    },
    subText:{
        alignSelf:"flex-start"
    },
    lightText:{
        fontSize:Fonts.size.h8,
        color:Colors.lightText,
       alignSelf:"center",
       marginTop:H(20)
    },
    leftText:{
        fontSize:Fonts.size.h8,
        color:Colors.lightText,
        fontWeight:"bold",
        textAlign:"left",
        alignSelf:"center",
       marginTop:H(10)
    },
    icon:{
       // textAlign:"right",
       position:"absolute", 
       left:W(195),
       flex:1,
        alignSelf:"center"
        

    },
    leftTextContainer:
    {
        position:"absolute",
        right:0,
       width:W(80)
        
       
    }

    

})
export default styles;