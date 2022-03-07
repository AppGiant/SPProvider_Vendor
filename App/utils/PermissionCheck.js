import React from 'react'

import { PERMISSIONS, check as RNCheck, request as RNRequest} from 'react-native-permissions'
import { RESULTS,PERMISSIONS_} from '../Constants/constant';
import Toast from 'react-native-simple-toast';
import { Linking,Platform } from 'react-native';

export const check=async(name)=>
{  
    const res = await RNCheck(Platform.OS=='android'?PERMISSIONS['ANDROID'][PERMISSIONS_[name]['ANDROID']]:PERMISSIONS['IOS'][PERMISSIONS_[name]['IOS']]);   
    if(res==RESULTS.GRANTED)
{
    return 4
}
else if(res==RESULTS.LIMITED)
{
    return 3
}
else if(res==RESULTS.DENIED)
{
    Toast.showWithGravity(
        `You denied  ${name} Permission`,
        Toast.LONG,
        Toast.BOTTOM,
      );  
    return 2
}
else if(res==RESULTS.BLOCKED)
{
    
    Toast.showWithGravity(
        `Please Provide ${name} Permission`,
        Toast.LONG,
        Toast.BOTTOM,
      );  

      setTimeout(()=>Linking.openURL('app-settings:'),1000)
      return 1
}
else {
    Toast.showWithGravity(
        `Your mobile does not support ${name}`,
        Toast.LONG,
        Toast.BOTTOM,
      );  
      return -1
}
}
export const request=async(name)=>
{
const res=await RNRequest(Platform.OS=='android'?PERMISSIONS['ANDROID'][PERMISSIONS_[name]['ANDROID']]:PERMISSIONS['IOS'][PERMISSIONS_[name]['IOS']])

if(res==RESULTS.GRANTED||res==RESULTS.LIMITED)
{
    
}
else if(res==RESULTS.DENIED)
{
    Toast.showWithGravity(
        `You Denied following ${name} Permission`,
        Toast.LONG,
        Toast.BOTTOM,
      );
}

return false
}
