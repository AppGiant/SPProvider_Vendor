import React, {useState, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import MainIcon from '../../Images/logo1.svg';
import AppleIcon from '../../Images/apple.svg';
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  View,
} from '../../Components/StyledComponents';
import InputComponent from '../../Components/InputComponent';
import TouchableSVGIcon from '../../Components/TouchableSVGIcon';
import RestaurantCard from '../../Components/RestaurantCard';
import ReviewCard from '../../Components/ReviewCard';
import OTPInput from '../../Components/OTPInputNew';
import {H, W} from '../../utils/DimensionCalculator';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SubscriptionCard from '../../Components/SubscriptionCard';
import {Colors} from '../../Themes';
import Header from '../../Components/Header';
import color from '../../Constants/color';
import Chart1 from '../../Components/Chart1';
import Chart from '../../Components/Chart';
import CheckBoxInput from '../../Components/CheckBoxInput';
import TextBetweenLine from '../../Components/TextBetweenLine';
import colors from '../../Themes/Colors';
import {Button} from 'react-native-elements/dist/buttons/Button';
import CommonCard from '../../Components/CommonCard';
import Scr from '../../Images/sc.svg';
import Swiper from '../../Components/Swiper';
import Text from '../../Components/TextI';
import StepHeader from '../../Components/StepHeader';
import BankIcon from '../../Images/Icons/banking.svg';
import TierIcon from '../../Images/Icons/tier.svg';
import {BackHandler} from 'react-native';
import {Screens} from '../../Constants/constant';

const ViewComponents = (props) => {
  const handler = () => {
    console.log('navigation');
    props.navigation.navigate(Screens.HOME);
    return true;
  };
  useEffect(() => {
    const handlerEvent = BackHandler.addEventListener(
      'hardwareBackPress',
      handler,
    );
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handler);
    };
  }, []);
  const [index, setIndex] = useState(0);
  const BasicCard = () => (
    <SubscriptionCard
      items={[
        {title: 'Upcoming Plan Features', value: '7 days', check: true},
        {title: 'Upcoming Plan Features', value: '7 days', check: true},
        {title: 'Upcoming Plan Features', value: '7 days', check: true},
        {title: 'Upcoming Plan Features', value: '7 days', check: false},
        {title: 'Upcoming Plan Features', value: '7 days', check: true},
        {title: 'Upcoming Plan Features', value: '7 days', check: true},
        {title: 'Upcoming Plan Features', value: '7 days', check: false},
        {title: 'Upcoming Plan Features', value: '7 days', check: true},
        {title: 'Upcoming Plan Features', value: '7 days', check: true},
      ]}
      title="$150"
      subtitle="Per Month,Billed Annually or $15 Month-to-Month"
      planName="Basic"
      planSubtitle="Basic Plan Features"
      style={{borderColor: Colors.lightText}}
    />
  );
  const StandardCard = () => (
    <SubscriptionCard
      items={[
        {title: 'Upcoming Plan Features', value: '7 days', check: true},
        {title: 'Upcoming Plan Features', value: '7 days', check: true},
        {title: 'Upcoming Plan Features', value: '7 days', check: true},
        {title: 'Upcoming Plan Features', value: '7 days', check: false},
        {title: 'Upcoming Plan Features', value: '7 days', check: true},
        {title: 'Upcoming Plan Features', value: '7 days', check: true},
        {title: 'Upcoming Plan Features', value: '7 days', check: false},
        {title: 'Upcoming Plan Features', value: '7 days', check: true},
        {title: 'Upcoming Plan Features', value: '7 days', check: true},
      ]}
      title="$200"
      subtitle="Per Month,Billed Annually or $25 Month-to-Month"
      planName="Standard"
      planSubtitle="Standard Plan Features"
      style={{borderColor: color.PRIMARY}}
    />
  );
  const PremiumCard = () => (
    <SubscriptionCard
      items={[
        {title: 'Upcoming Plan Features', value: '7 days', check: true},
        {title: 'Upcoming Plan Features', value: '7 days', check: true},
        {title: 'Upcoming Plan Features', value: '7 days', check: true},
        {title: 'Upcoming Plan Features', value: '7 days', check: false},
        {title: 'Upcoming Plan Features', value: '7 days', check: true},
        {title: 'Upcoming Plan Features', value: '7 days', check: true},
        {title: 'Upcoming Plan Features', value: '7 days', check: false},
        {title: 'Upcoming Plan Features', value: '7 days', check: true},
        {title: 'Upcoming Plan Features', value: '7 days', check: true},
      ]}
      title="$300"
      subtitle="Per Month,Billed Annually or $25 Month-to-Month"
      planName="Premium"
      planSubtitle="Premium Plan Features"
      style={{borderColor: color.PRIMARY}}
    />
  );

  return (
    <SafeAreaView>
      <KeyboardAwareScrollView>
        <ScrollView style={{paddingHorizontal: W(10)}}>
          <StepHeader />
          <StepHeader
            Icon={TierIcon}
            title="Choose Tier"
            iconSubtitle="2 of 3"
          />
          <StepHeader
            Icon={BankIcon}
            title="Banking Details"
            iconSubtitle="3 of 3"
          />

          <MainIcon />
          <TextBetweenLine />
          <InputComponent
            label="Email/Mobile/Username"
            errorMessage=""
            placeholder="ex:mystore@gmail.com"
          />
          <TextBetweenLine />
          <InputComponent
            label="Email/Mobile/Username"
            errorMessage=""
            placeholder="ex:mystore@gmail.com"
            rightIcon={() => (
              <TouchableSVGIcon onPress={() => alert('Clicked')}>
                <AppleIcon />
              </TouchableSVGIcon>
            )}
          />
          <TextBetweenLine />
          <RestaurantCard tag="Sponsored" />
          <TextBetweenLine />
          <RestaurantCard tag="2" />
          <TextBetweenLine />
          <ReviewCard />
          <TextBetweenLine />
          <OTPInput
            pinCount={4}
            // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
            // onCodeChanged = {code => { this.setState({code})}}

            onCodeFilled={(code) => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
          <TextBetweenLine />
          <BasicCard />
          <TextBetweenLine />
          <StandardCard />
          <TextBetweenLine />
          <PremiumCard />
          <TextBetweenLine />
          <Chart1 />
          <TextBetweenLine />
          <Chart />
          <TextBetweenLine />
          <CheckBoxInput
            checked
            color={color.PRIMARY}
            midText="Home Made"
            endText="From $49"
          />
          <TextBetweenLine />
          <Button
            buttonStyle={styles.buttonStyle}
            title="Login"
            containerStyle={[
              styles.buttonContainerFullWidth,
              {backgroundColor: 'black'},
            ]}></Button>
          <Button
            buttonStyle={styles.buttonStyle}
            title="Signup"
            containerStyle={[
              styles.buttonContainerFullWidth,
              {backgroundColor: Colors.Yellow},
            ]}></Button>
          <Button
            buttonStyle={styles.buttonStyle}
            title="Save and Authenticate"
            containerStyle={[
              styles.buttonContainerFullWidth,
              {backgroundColor: color.PRIMARY},
            ]}></Button>
          <CommonCard />
          <Scr />
          <Swiper style={styles.wrapper}>
            <PremiumCard />
            <StandardCard />
            <BasicCard />
          </Swiper>
          <Button
            buttonStyle={styles.buttonStyle}
            title="Start 30 Days Free Trial"
            titleStyle={{
              color: index == 1 ? 'black' : 'white',
              fontWeight: 'bold',
            }}
            containerStyle={[
              styles.buttonContainerFullWidth,
              {
                backgroundColor: index == 1 ? Colors.Yellow : 'green',
                marginTop: 30,
              },
            ]}></Button>
        </ScrollView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  buttonIconContainer: {
    padding: W(5),
    borderRadius: 4,
    marginEnd: W(80),
  },
  buttonContainerFullWidth: {
    paddingVertical: H(4),
    borderRadius: 5,
    marginBottom: H(10),
    marginHorizontal: W(10),
  },
  buttonStyle: {
    justifyContent: 'center',
  },
  wrapper: {paddingHorizontal: W(10), marginTop: H(10), height: H(800)},

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
export default ViewComponents;
