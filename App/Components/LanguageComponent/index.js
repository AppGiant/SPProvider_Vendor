
import React, { useState } from 'react'
import {Switch,I18nManager} from 'react-native';
import Colors from '../../Constants/color';
import i18next from 'i18next';
import { View } from '../StyledComponents';
import Text from "../TextI"
import styles from "./style"

import RNRestart from 'react-native-restart';
import { App } from '../../Constants/constant';
const LanguageComponent=()=>
{
  const RTL = () => {
    if (I18nManager.isRTL) {
      I18nManager.forceRTL(false);
      RNRestart.Restart();
    } else if (!I18nManager.isRTL) {
      I18nManager.forceRTL(true);
      RNRestart.Restart();
    }
  };
    const [lang,setLang]=useState(i18next.language)
    const toggleLanguage = () => {
        let l = i18next.language == 'en' ? 'fr' : 'en';
        i18next.changeLanguage(l, (err, t) => {
          if (err) return console.log('something went wrong loading', err);
          setLang(l)
          RTL()
          
        });
      };
return( 
    <View style={styles.row}>
   <Switch
    trackColor={{false: Colors.SWITCH_FALSE, true: Colors.SWITCH_TRUE}}
    thumbColor={Colors.SWITCH_THUMB}
    onValueChange={() => {
       toggleLanguage() 
    }}
    value={lang=== 'en' ? true : false}
  />
    <Text style={styles.boldLabel}>
      {i18next.language == 'en' ? App.ENGLISH : App.ARABIC}
    </Text></View>)
}
export default LanguageComponent;