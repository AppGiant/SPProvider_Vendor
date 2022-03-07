import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
} from '../../Components/StyledComponents';
import Text from '../../Components/TextI';
import styles from './style';
import GiftIcon from '../../Images/gift.svg';
import InputComponent from '../../Components/InputComponent';
import {Button} from 'react-native-elements/dist/buttons/Button';
import TouchableSVGIcon from '../../Components/TouchableSVGIcon';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../../Constants/color';
import HView from '../../Components/HView';
import SpecialCard from '../../Components/SpecialCard';
import colors from '../../Themes/Colors';
import {setIn} from 'formik';

const ValidityChecker = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showStatusbar, setShowStatusbar] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowStatusbar(false);
  //   }, 3000);
  // }, []);

  const setVisibility = () => {
    setIsVisible(!isVisible);
    setShowStatusbar(true);

    setTimeout(() => {
      setShowStatusbar(false);
    }, 5000);
  };

  const [inputText, setInputText] = useState('SP');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.headText}>Gift Validity Checker</Text>
        <View style={styles.roundCard}>
          <View style={styles.icon}>
            <GiftIcon />
            <Text style={styles.subText}>
              Enter the gift card number to check the validity
            </Text>
            <InputComponent
              style={styles.input}
              label=""
              // placeholder="Search"
              // defaultValue="SP"
              // value={inputText}
              rightIcon={() => (
                <TouchableSVGIcon
                  onPress={() => console.log('search icon clicked')}>
                  <Icon size={30} color={color.BORDER} name="magnify"></Icon>
                </TouchableSVGIcon>
              )}
              leftIcon={() => <Text>SP</Text>}
            />
          </View>
          <Button
            title="Check Validity"
            containerStyle={styles.btn}
            titleStyle={styles.buttonTitle}
            onPress={() => setVisibility()}
          />
        </View>
        {isVisible && (
          <View style={styles.cardsContainer}>
            {showStatusbar ? (
              <SpecialCard
                bgColor={colors.LITE_GREEN}
                value="This Card is Till Valid 12/12/2020"
                textColor={colors.LIME_GREEN}
                bdColor={colors.LIME_GREEN}
              />
            ) : null}
            <View style={styles.roundCard2}>
              <HView style={styles.container2}>
                <Text style={styles.text}>Gift Card 1</Text>
                <Text style={styles.simpleText}>#22AW-L8CT-20</Text>
              </HView>
              <View style={styles.container3}>
                <Text style={styles.bigGreenText}>$150.00</Text>
                <Text style={styles.smallGreenText}>Available Balance</Text>
                <Text style={styles.smallText}>Valid for</Text>
                <Text style={styles.normalText}>10 Days</Text>
              </View>
              <View style={styles.inputView}>
                <InputComponent
                  style={styles.input2}
                  label="Redeem Value"
                  placeholder="$0"
                />
              </View>
              <HView style={styles.btnHolder}>
                <Button
                  title="Cancel"
                  containerStyle={styles.btn1}
                  titleStyle={styles.buttonTitle1}
                  onPress={() => console.log('clicked')}
                />
                <Button
                  title="Redeem Value"
                  containerStyle={styles.btn2}
                  titleStyle={styles.buttonTitle2}
                  onPress={() => console.log('clicked')}
                />
              </HView>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
export default ValidityChecker;
