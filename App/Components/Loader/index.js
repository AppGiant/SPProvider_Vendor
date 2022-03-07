import React from 'react';
import {Colors} from '../../Themes';
import {ActivityIndicator} from '../StyledComponents';
import styles from './style';

const Loader = () => {
  return <ActivityIndicator size="large" color={Colors.PRIMARY} />;
};
export default Loader;
