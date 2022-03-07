
import i18next from 'i18next'
import React from 'react'
import { SafeAreaView as RNSafeAreaView } from '../StyledComponents'
const SafeAreaView=(props)=>
{
    return <RNSafeAreaView style={[props.style,{direction:i18next.language=='en'?'ltr':'rtl'}]}>{props.children}</RNSafeAreaView>
}
export default SafeAreaView;s