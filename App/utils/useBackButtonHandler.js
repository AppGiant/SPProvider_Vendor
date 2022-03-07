import React,{useEffect} from 'react'
import { BackHandler} from 'react-native'
export default function useBackButton(handler) {
    useEffect(() => {
    const handlerEvent=  BackHandler.addEventListener("hardwareBackPress", handler);
      return () => {
        
        BackHandler.removeEventListener(
          "hardwareBackPress",
          handler
        );
      };
    }, []);
}
