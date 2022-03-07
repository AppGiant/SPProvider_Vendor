import React, {Component} from 'react';
import {Image} from 'react-native';
import Header from '../Components/Header';
import {View, ScrollView} from '../Components/StyledComponents/index';
import Text from '../Components/TextI/index';
import {Images} from '../Themes';

// Styles
import styles from './Styles/LaunchScreenStyles';

export default function LaunchScreen(props) {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={Images.background}
        style={styles.backgroundImage}
        resizeMode="stretch"
      />
      <ScrollView style={styles.container}>
        <View style={styles.centered}></View>
        <View style={styles.section}>
          <Text>Welcome to React</Text>
          <Text style={styles.sectionText}>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
