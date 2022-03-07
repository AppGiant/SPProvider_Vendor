import React from 'react';
import {Text} from '../StyledComponents';
import {withTranslation} from 'react-i18next';
import {Colors} from '../../Themes';
function TextI({t, ...props}) {
  return (
    <Text
      style={[
        {fontSize: 14, alignSelf: 'center', color: '#212A41'},
        props.style,
      ]}>
      {t(props.children)}
    </Text>
  );
}
export default withTranslation()(TextI);
