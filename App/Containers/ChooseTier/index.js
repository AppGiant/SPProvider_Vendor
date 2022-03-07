import React,{useEffect} from 'react';
import StepHeader from '../../Components/StepHeader';
import {
  View,
  SafeAreaView,
  ScrollView,
} from '../../Components/StyledComponents';
import SubscriptionCard from '../../Components/SubscriptionCard';
import TierIcon from '../../Images/Icons/tier.svg';
import Colors from '../../Themes/Colors';
import color from '../../Constants/color';
import Swiper from '../../Components/Swiper';
import styles from './style';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {H, W} from '../../utils/DimensionCalculator';
import Text from '../../Components/TextI';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Screens } from '../../Constants/constant';
import { BackHandler } from 'react-native'
const ChooseTier = (props) => {
  const handler=()=>
  {
    props.navigation.goBack();
    return true
  }
  useEffect(() => {
    const handlerEvent=  BackHandler.addEventListener("hardwareBackPress", handler);
      return () => {
        
        BackHandler.removeEventListener(
          "hardwareBackPress",
          handler
        );
      };
    }, []);
  const chooseTier=()=>
  {
    props.navigation.navigate(Screens.BANKING)
  }
  const BasicCard = () => (
    <SubscriptionCard
      items={[
        {title: 'Upcoming booking visibility', value: '7 days', check: true},
        {title: 'Past Booking visibility', value: '7 days', check: true},
        {title: 'Branches', value: 'Upto 5', check: true},
        {title: 'Category', value: '2', check: false},
        {title: 'Sub-Category', value: '1', check: true},
        {title: 'Menu', value: '3 Titles', check: true},
        {title: 'Reviews', value: '7 days', check: false},
        {title: 'Reports', value: '7 days', check: true},
        {title: 'SP Policy', value: 'Regular Season ONLY', check: true},
        {title: 'Other related functionality', value: 'No', check: true},
      ]}
      title="$60"
      subtitle="Per Month,Billed Annually or $5 Month-to-Month"
      planName="Basic"
      planSubtitle="Basic Plan Features"
      style={{borderColor: '#3DBB73'}}
    />
  );
  const StandardCard = () => (
    <SubscriptionCard
      items={[
        {title: 'Upcoming booking visibility', value: '14 days', check: true},
        {title: 'Past Booking visibility', value: '14 days', check: true},
        {title: 'Branches', value: 'Upto 10', check: true},
        {title: 'Category', value: '4', check: false},
        {title: 'Sub-Category', value: '3', check: true},
        {title: 'Menu', value: '6 Titles', check: true},
        {title: 'Reviews', value: '14 days', check: false},
        {title: 'Reports', value: '14 days', check: true},
        {title: 'SP Policy', value: 'Regular + High Seasons', check: true},
        {title: 'Other related functionality', value: 'Yes', check: true},
      ]}
      title="$180"
      subtitle="Per Month,Billed Annually or $15 Month-to-Month"
      planName="Standard"
      planSubtitle="Standard Plan Features"
      style={{borderColor: '#FFD672'}}
    />
  );
  const PremiumCard = () => (
    <SubscriptionCard
     items={[
        {title: 'Upcoming booking visibility', value: '30 days', check: true},
        {title: 'Past Booking visibility', value: '30 days', check: true},
        {title: 'Branches', value: 'Unlimited', check: true},
        {title: 'Category', value: '12', check: false},
        {title: 'Sub-Category', value: '5', check: true},
        {title: 'Menu', value: '18 Titles', check: true},
        {title: 'Reviews', value: '30 days', check: false},
        {title: 'Reports', value: '30 days', check: true},
        {title: 'SP Policy', value: 'Regular + High Seasons', check: true},
        {title: 'Other related functionality', value: 'Yes', check: true},
      ]}
      title="$1200"
      subtitle="Per Month,Billed Annually or $120 Month-to-Month"
      planName="Professional "
      planSubtitle="Professional Plan Features"
      style={{borderColor: '#FFAEAE'}}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <ScrollView style={{paddingHorizontal: W(10)}}>
          <StepHeader
            Icon={TierIcon}
            title="Choose Tier"
            iconSubtitle="2 of 3"
          />
          <Text style={styles.headText}>Subscription Tiers</Text>
          <Text style={styles.subtitle}>
            Choose the best one that fits your needs
          </Text>
          <Swiper
            onIndexChanged={(i) => console.log(i)}
            containerStyle={styles.wrapper}>
            <View style={styles.slide1}>
              <BasicCard />
            </View>
            <View style={styles.slide2}>
              <StandardCard />
            </View>
            <View style={styles.slide3}>
              <PremiumCard />
            </View>
          </Swiper>
          <Button
          onPress={chooseTier}
            buttonStyle={styles.buttonStyle}
            title="Start 30 Days Free Trial"
            titleStyle={styles.buttonTitle}
            containerStyle={[
              styles.buttonContainer,
              {backgroundColor:Colors.Yellow}
            
            ]}></Button>
        </ScrollView>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default ChooseTier;
