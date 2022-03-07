import React from 'react'
import { View } from '../StyledComponents'
import { Image } from 'react-native'
import styles from "./style"
import HView from '../HView'
import Text from "../TextI"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TextArea from '../TextArea'
import Frame from "../../Images/frame.svg"
import SVGComponent from '../SVGComponent'
const CommonCard=()=>
{
    return(<View style={styles.cardContainer}><HView >
    <SVGComponent style={{alignItems:"center",flex:1}}>
       <Frame/>
       </SVGComponent>
    </HView>
    <Text style={{textAlign:"center",paddingHorizontal:20}}>You haven’t created any services yet, please add a new service to start accepting orders from SP+ Users</Text>
    </View>)
}
export default CommonCard;