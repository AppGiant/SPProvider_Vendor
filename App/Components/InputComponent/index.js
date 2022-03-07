import {values} from 'lodash';
import React, {useState} from 'react';
import {withTranslation} from 'react-i18next';
import {I18nManager} from 'react-native';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from '../StyledComponents';
import styles from './style';
/* label="Password"
                  value={values.password}
                  onChangeText={handleChange('password')}
                  errorMessage={errors.password}
                  placeholder="******"
*/
const InputComponent = ({
  t,
  secureTextEntry,
  style,
  label,
  errorMessage,
  placeholder,
  ...props
}) => {
  const [show, setShow] = useState(false);
  return secureTextEntry ? (
    <Input
      textContentType="emailAddress"
      labelStyle={styles.labelStyle}
      placeholderTextColor="gray"
      errorStyle={styles.errorStyle}
      rightIcon={
        <TouchableOpacity onPress={() => setShow(!show)}>
          <Icon size={25} name={show ? 'eye-off' : 'eye'}></Icon>
        </TouchableOpacity>
      }
      inputContainerStyle={[styles.inputContainerStyle, {...style}]}
      textAlign={I18nManager.isRTL ? 'right' : 'left'}
      secureTextEntry={!show}
      underlineColorAndroid="transparent"
      label={t(label)}
      errorMessage={t(errorMessage)}
      placeholder={t(placeholder)}
      {...props}></Input>
  ) : (
    <Input
      textContentType="emailAddress"
      labelStyle={styles.labelStyle}
      placeholderTextColor="gray"
      label={t(label)}
      errorMessage={t(errorMessage)}
      placeholder={t(placeholder)}
      errorStyle={styles.errorStyle}
      inputContainerStyle={[styles.inputContainerStyle, {...style}]}
      textAlign={I18nManager.isRTL ? 'right' : 'left'}
      underlineColorAndroid="transparent"
      {...props}></Input>
  );
};
export default withTranslation()(InputComponent);
