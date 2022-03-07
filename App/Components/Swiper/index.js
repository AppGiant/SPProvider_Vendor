import React from 'react'
import RNSwiper from 'react-native-swiper'
import { H, W } from '../../utils/DimensionCalculator';
const Swiper=(props)=>
{
return(<RNSwiper loop={false}  paginationStyle={{position:"absolute",bottom:H(0)}} index={0}	  {...props}/>)
}
export default Swiper;