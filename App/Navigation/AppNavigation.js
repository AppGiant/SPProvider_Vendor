import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Screens} from '../Constants/constant';
import color from '../Constants/color';
import {Colors, Fonts} from '../Themes';
import DrawerContent from '../Components/DrawerContent';
import LoginScreen from '../Containers/LoginScreen';
import ViewComponents from '../Containers/ViewComponents';
import ChooseTier from '../Containers/ChooseTier';
import VerificationScreen from '../Containers/BasicDetails/VerificationScreen';
import RegistrationScreen from '../Containers/BasicDetails/RegistrationForm';
import BankingScreen from '../Containers/BankingDetails';
import Dashboard from '../Containers/Dashboard';
import SplashScreen from '../Containers/SplashScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import AddService from '../Containers/Services/AddServices';
import Services from '../Containers/Services/ServicesList';
import AddPhoneNumber from '../Containers/BasicDetails/AddPhoneNumber';
import ChangePassword from '../Containers/ChangePassword';
import ForgotPassword from '../Containers/ForgotPassword';
import EmailVerification from '../Containers/Dashboard/EmailVerification';
import DocumentVerification from '../Containers/Dashboard/DocumentVerifcation';
import ProfileSection from '../Containers/Dashboard/ProfileSection';
import ServiceType from '../Containers/Services/AddServices/ServiceType';
import ServiceForm from '../Containers/Services/AddServices/ServiceForm';
import ReviewService from '../Containers/Services/AddServices/ReviewService';
import Header from '../Components/Header';
import EditProfileScreen from '../Containers/BasicDetails/EditProfileScreen';
import Transactions from '../Containers/Transactions';
import PaymentScreen from '../Containers/Payments/PaymentScreen';
import Wallet from '../Containers/Payments/Wallet';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Bookings from '../Containers/Bookings';
import DepositeMoney from '../Containers/DepositeMoney';
import RequestPayout from '../Containers/RequestPayout';
import PayoutDetails from '../Containers/PayoutDetails';
import BookingInfoCard from '../Components/BankingInfoCard';
import AddPayoutAccount from '../Containers/AddPayoutAccount';
import AddPayoutFullScreen from '../Containers/AddPayoutFullScreen';
import BookingRequests from '../Containers/BookingRequests';
import RescheduleRequests from '../Containers/RescheduleRequests';
import ConfirmedRequests from '../Containers/ConfirmedRequests';
import CancellationsBooking from '../Containers/CancellationsBooking';
import AutoRejections from '../Containers/AutoRejections';
import Rejections from '../Containers/Rejections';
import CancellationsByUser from '../Containers/CancellationsByUser';
import {View} from '../Components/StyledComponents';
import ReviewScreen from '../Containers/ReviewScreen';
import GiftCard from '../Components/GiftCard';
import ActiveGiftCards from '../Containers/ActiveGiftCards';
import InactiveGiftCards from '../Containers/InactiveGiftCards/index';
import ValidityChecker from '../Containers/ValidityChecker';
import AddGiftCard from '../Containers/AddGiftCard';
import AccountSettings from '../Containers/AccountSettings';
import ReportScreen from '../Containers/ReportScreen';
import CompletedBooking from '../Containers/CompletedBookings';
import EditGiftCard from '../Containers/EditGiftCard';
import ReactivateGiftCard from '../Containers/ReactivateGiftCard';
import Notifications from '../Containers/Notifications';
import MyPolicies from '../Containers/StorePolicy/MyPolicies';
import HighSeasonPolicy from '../Containers/StorePolicy/HighSeasonPolicy';
import GeneralSettings from '../Containers/GeneralSettings';
import MapView from '../Components/MapView';
import EditVariations from '../Containers/EditVariations';
import AddVariations from '../Containers/AddVariations';
import ConfirmLocation from '../Containers/ConfirmLocation';
import ReviewServiceEdit from '../Containers/ReviewService';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const ServicesStack = createStackNavigator();
const DashboardStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const PaymentTab = createMaterialTopTabNavigator();
//Payment Tabs
const PaymentNavigator = (props) => {
  return (
    <PaymentTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: color.PRIMARY,
        tabBarInactiveTintColor: color.GRAY,
        tabBarLabelStyle: {fontWeight: 'bold'},
        tabBarIndicatorStyle: {backgroundColor: color.PRIMARY},
        tabBarScrollEnabled: true,
      }}>
      <PaymentTab.Screen
        name={Screens.WALLET}
        component={Wallet}></PaymentTab.Screen>
      <PaymentTab.Screen
        name={Screens.TRANSACTIONS}
        component={Transactions}></PaymentTab.Screen>
      <PaymentTab.Screen
        name={Screens.PAYOUT_DETAILS}
        component={PayoutDetails}></PaymentTab.Screen>
      <PaymentTab.Screen
        name={Screens.ADD_NEW_PAYOUT_ACCOUNT}
        component={AddPayoutFullScreen}></PaymentTab.Screen>
    </PaymentTab.Navigator>
  );
};

const PaymentInnerNavigator = (props) => {
  return (
    <PaymentTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: color.PRIMARY,
        tabBarInactiveTintColor: color.GRAY,
        tabBarLabelStyle: {fontWeight: 'bold'},
        tabBarIndicatorStyle: {backgroundColor: color.PRIMARY},
        tabBarScrollEnabled: true,
      }}>
      <PaymentTab.Screen
        name={Screens.ADD_PAYOUT_ACCOUNT}
        options={{title: 'Within KSA'}}
        component={AddPayoutAccount}></PaymentTab.Screen>
      <PaymentTab.Screen
        name={Screens.ADD_NEW_PAYOUT_ACCOUNT}
        options={{title: 'Outside KSA'}}
        component={AddPayoutFullScreen}></PaymentTab.Screen>
    </PaymentTab.Navigator>
  );
};

const BookingStack = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        // headerLeft:()=><Icon style={style1.header} onPress={()=>props.navigation.goBack()} size={25} name='keyboard-backspace'></Icon>,
        headerRight: () => <Header props={props} />,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name={Screens.BOOKING_STACK}
        options={{title: 'Bookings'}}
        component={BookingNavigator}></Stack.Screen>
      <DashboardStack.Screen
        name={Screens.REVIEW}
        component={ReviewScreen}></DashboardStack.Screen>
    </Stack.Navigator>
  );
};
const BookingNavigator = (props) => {
  return (
    <PaymentTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: color.PRIMARY,
        tabBarInactiveTintColor: color.GRAY,
        tabBarLabelStyle: {fontWeight: 'bold'},
        tabBarIndicatorStyle: {backgroundColor: color.PRIMARY},
        tabBarScrollEnabled: true,
      }}>
      <PaymentTab.Screen
        //type = 1
        name={Screens.BOOKING_REQUESTS}
        component={BookingRequests}></PaymentTab.Screen>
      <PaymentTab.Screen
        //type = 3
        name={Screens.RESCHEDULE_REQUESTS}
        component={RescheduleRequests}></PaymentTab.Screen>
      <PaymentTab.Screen
        //type = 7
        name={Screens.CONFIRMED_REQUESTS}
        component={ConfirmedRequests}></PaymentTab.Screen>
      <PaymentTab.Screen
        //type = 2
        name={Screens.COMPLETED_BOOKINGS}
        component={CompletedBooking}></PaymentTab.Screen>
      <PaymentTab.Screen
        name={Screens.CANCALLETIONS_BOOKING}
        component={CancellationNavigator}></PaymentTab.Screen>
    </PaymentTab.Navigator>
  );
};

const CancellationNavigator = (props) => {
  return (
    <PaymentTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: color.PRIMARY,
        tabBarInactiveTintColor: color.GRAY,
        tabBarLabelStyle: {fontWeight: 'bold'},
        tabBarIndicatorStyle: {backgroundColor: color.PRIMARY},
        tabBarScrollEnabled: true,
      }}>
      <PaymentTab.Screen
        //type = 4
        name={Screens.CANCELLAION_BY_USER}
        options={{title: 'Cancelled'}}
        component={CancellationsByUser}></PaymentTab.Screen>
      <PaymentTab.Screen
        //type = 5
        name={Screens.REJECTIONS}
        component={Rejections}></PaymentTab.Screen>
      <PaymentTab.Screen
        //type = 6
        name={Screens.AUTO_REJECTIONS}
        component={AutoRejections}></PaymentTab.Screen>
    </PaymentTab.Navigator>
  );
};

const GiftNavigator = (props) => {
  return (
    <PaymentTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: color.PRIMARY,
        tabBarInactiveTintColor: color.GRAY,
        tabBarLabelStyle: {fontWeight: 'bold'},
        tabBarIndicatorStyle: {backgroundColor: color.PRIMARY},
        tabBarScrollEnabled: true,
      }}>
      <PaymentTab.Screen
        name={Screens.ACTIVE_GIFT_CARDS}
        component={ActiveGiftCards}></PaymentTab.Screen>
      <PaymentTab.Screen
        name={Screens.INACTIVE_GIFT_CARDS}
        component={InactiveGiftCards}></PaymentTab.Screen>
      <PaymentTab.Screen
        name={Screens.VALIDITY_CHECKER}
        component={ValidityChecker}></PaymentTab.Screen>
      {/* <PaymentTab.Screen
        name={Screens.ADD_GIFT_CARD}
        component={AddGiftCard}></PaymentTab.Screen> */}
    </PaymentTab.Navigator>
  );
};

const StorePolicyNavigator = (props) => {
  return (
    <PaymentTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: color.PRIMARY,
        tabBarInactiveTintColor: color.GRAY,
        tabBarLabelStyle: {fontWeight: 'bold'},
        tabBarIndicatorStyle: {backgroundColor: color.PRIMARY},
        // tabBarScrollEnabled: true,
      }}>
      <PaymentTab.Screen
        name={Screens.MY_POLICIES}
        component={MyPolicies}></PaymentTab.Screen>
      <PaymentTab.Screen
        name={Screens.HIGH_SEASON_POLICY}
        component={HighSeasonPolicy}></PaymentTab.Screen>
    </PaymentTab.Navigator>
  );
};

// Routes Before Login
const BottomNavigator = (props) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: (props) => {
          let iconName;
          if (route.name === Screens.SERVICES) {
            iconName = 'diamond-stone';
          } else if (route.name === Screens.BOOKING_NAVIGATOR) {
            iconName = 'stars';
          } else if (route.name == Screens.PROFILE) {
            iconName = 'person';
          } else if (route.name == Screens.HOME) {
            iconName = 'home';
          }
          return route.name == Screens.SERVICES ? (
            <Icon1
              name="diamond-stone"
              size={25}
              color={props.focused ? color.PRIMARY : Colors.steel}
            />
          ) : (
            <Icon
              name={iconName}
              size={25}
              color={props.focused ? color.PRIMARY : Colors.steel}
            />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: color.PRIMARY,
        inactiveTintColor: Colors.steel,
        labelStyle: {
          fontSize: Fonts.size.small,
          margin: 0,
          padding: 0,
        },
      }}>
      <Tab.Screen name={Screens.HOME} component={DashboardStackNavigator} />
      <Tab.Screen name={Screens.SERVICES} component={ServicesStackNavigator} />
      <Tab.Screen
        name={Screens.BOOKING_NAVIGATOR}
        options={{
          title: 'Bookings',
        }}
        component={BookingStack}
      />
      <Tab.Screen name={Screens.PROFILE} component={AddService} />
    </Tab.Navigator>
  );
};

const DashboardStackNavigator = (props) => {
  return (
    <DashboardStack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        //headerLeft:()=><Icon style={style1.header} onPress={()=>props.navigation.goBack()} size={25} name='keyboard-backspace'></Icon>,
        headerRight: () => <Header props={props} />,
        headerBackTitleVisible: false,
      }}
      initialRouteName={Screens.DASHBOARD_BOTTOM}>
      <DashboardStack.Screen
        name={Screens.DASHBOARD_BOTTOM}
        component={Dashboard}></DashboardStack.Screen>
      <DashboardStack.Screen
        name={Screens.EDIT_PROFILE}
        component={EditProfileScreen}></DashboardStack.Screen>
      <DashboardStack.Screen
        name={Screens.KYC_VERIFICATION}
        component={DocumentVerification}></DashboardStack.Screen>
      <DashboardStack.Screen
        name={Screens.EMAIL_VERIFICATION}
        component={EmailVerification}></DashboardStack.Screen>
      <DashboardStack.Screen
        name={Screens.PROFILE_SECTION}
        component={ProfileSection}></DashboardStack.Screen>
      <DashboardStack.Screen
        name={Screens.TRANSACTIONS}
        component={PaymentNavigator}></DashboardStack.Screen>
      <DashboardStack.Screen
        name={Screens.WALLET}
        component={RequestPayout}></DashboardStack.Screen>
      <DashboardStack.Screen
        name={Screens.PAYMENTS}
        component={PaymentNavigator}></DashboardStack.Screen>
      <DashboardStack.Screen
        name={Screens.DEPOSITE_MONEY}
        component={DepositeMoney}></DashboardStack.Screen>
      <DashboardStack.Screen
        name={Screens.REQUEST_PAYOUT}
        component={RequestPayout}></DashboardStack.Screen>
      <DashboardStack.Screen
        name={Screens.ADD_PAYOUT_ACCOUNT}
        options={{title: 'Payments'}}
        component={AddPayoutAccount}></DashboardStack.Screen>
      <DashboardStack.Screen
        name={Screens.ADD_PAYOUT}
        component={PaymentInnerNavigator}></DashboardStack.Screen>
      <DashboardStack.Screen
        name={Screens.BOOKINGS}
        component={BookingNavigator}></DashboardStack.Screen>
      <DashboardStack.Screen
        name={Screens.GIFTS}
        component={GiftNavigator}></DashboardStack.Screen>
      <DashboardStack.Screen
        name={Screens.ACCOUNT_SETTINGS}
        component={AccountSettings}></DashboardStack.Screen>
      <DashboardStack.Screen
        name={Screens.REPORTS}
        component={ReportScreen}></DashboardStack.Screen>
      <DashboardStack.Screen
        name={Screens.STORE_POLICY}
        component={StorePolicyNavigator}></DashboardStack.Screen>
      <DashboardStack.Screen
        name={Screens.REVIEW}
        component={ReviewScreen}></DashboardStack.Screen>
      <DashboardStack.Screen
        name={Screens.ADD_GIFT_CARD}
        component={AddGiftCard}></DashboardStack.Screen>
      <DashboardStack.Screen
        name={Screens.EDIT_GIFT_CARD}
        component={EditGiftCard}></DashboardStack.Screen>
      <DashboardStack.Screen
        name={Screens.REACTIVATE_GIFT_CARD}
        component={ReactivateGiftCard}></DashboardStack.Screen>
      <DashboardStack.Screen
        name={Screens.NOTIFICATIONS}
        component={Notifications}></DashboardStack.Screen>
      <DashboardStack.Screen
        name={Screens.GENERAL_SETTINGS}
        component={GeneralSettings}></DashboardStack.Screen>
      <DashboardStack.Screen
        name={Screens.MAP_VIEW}
        component={MapView}></DashboardStack.Screen>
      <DashboardStack.Screen
        name={Screens.EDIT_VARIATIONS}
        component={EditVariations}></DashboardStack.Screen>
      <DashboardStack.Screen
        name={Screens.ADD_VARIATIONS}
        component={AddVariations}></DashboardStack.Screen>
      <DashboardStack.Screen
        name={Screens.CONFIRM_LOCATION}
        component={ConfirmLocation}></DashboardStack.Screen>
      <DashboardStack.Screen
        name={Screens.REVIEW_SERVICE_EDIT}
        component={ReviewServiceEdit}></DashboardStack.Screen>
    </DashboardStack.Navigator>
  );
};

const ServicesStackNavigator = (props) => {
  return (
    <ServicesStack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        // headerLeft:()=><Icon style={style1.header} onPress={()=>props.navigation.goBack()} size={25} name='keyboard-backspace'></Icon>,
        headerRight: () => <Header props={props} />,
        headerBackTitleVisible: false,
      }}
      initialRouteName={Screens.SERVICES}>
      <ServicesStack.Screen
        // options={{headerShown: false}}
        name={Screens.SERVICES}
        component={Services}></ServicesStack.Screen>
      <ServicesStack.Screen
        options={{headerTitle: 'Services'}}
        name={Screens.SERVICE_TYPE}
        component={ServiceType}
      />
      <ServicesStack.Screen
        options={{headerTitle: 'Services'}}
        name={Screens.SERVICE_FORM}
        component={ServiceForm}
      />

      <ServicesStack.Screen
        name={Screens.ADD_SERVICE}
        component={AddService}></ServicesStack.Screen>
      <ServicesStack.Screen
        name={Screens.REVIEW_SERVICE}
        component={ReviewService}></ServicesStack.Screen>
      <ServicesStack.Screen
        name={Screens.EDIT_VARIATIONS}
        component={EditVariations}></ServicesStack.Screen>
      <ServicesStack.Screen
        name={Screens.ADD_VARIATIONS}
        component={AddVariations}></ServicesStack.Screen>
      <ServicesStack.Screen
        name={Screens.REVIEW_SERVICE_EDIT}
        component={ReviewServiceEdit}></ServicesStack.Screen>
    </ServicesStack.Navigator>
  );
};
const StackNavigator = (props) => {
  return (
    <Stack.Navigator
      initialRouteName={Screens.SPLASH}
      screenOptions={{
        headerTitleAlign: 'center',

        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        options={{headerShown: false, gestureEnabled: false}}
        name={Screens.SPLASH}
        component={SplashScreen}
      />
      <Stack.Screen
        options={{headerShown: false, gestureEnabled: false}}
        name={Screens.LOGIN}
        component={LoginScreen}
      />
      <Stack.Screen
        name={Screens.VIEW}
        component={ViewComponents}
        options={{headerShown: false, gestureEnabled: false}}
      />
      <Stack.Screen name={Screens.SING_UP} component={RegistrationScreen} />
      <Stack.Screen
        options={{headerShown: false, gestureEnabled: false}}
        name={Screens.TIER}
        component={ChooseTier}
      />
      <Stack.Screen
        options={{headerShown: false, gestureEnabled: false}}
        name={Screens.VERIFICATION}
        component={VerificationScreen}
      />
      <Stack.Screen name={Screens.BANKING} component={BankingScreen} />
      <Stack.Screen
        options={{headerShown: false, gestureEnabled: false}}
        name={Screens.ADD_PHONE_NUMBER}
        component={AddPhoneNumber}
      />
      <Stack.Screen name={Screens.CHANGE_PASSWORD} component={ChangePassword} />
      <Stack.Screen name={Screens.FORGOT_PASSWORD} component={ForgotPassword} />
    </Stack.Navigator>
  );
};

//Routes after login
const StackNavigatorWithDrawer = (props) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',

        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name={Screens.DASHBOARD}
        options={{headerShown: false}}
        component={BottomNavigator}
      />
    </Stack.Navigator>
  );
};
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName={Screens.ROOT}
      hideStatusBar
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name={Screens.ROOT}
        options={{swipeEnabled: false}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name={Screens.ROOT1}
        component={StackNavigatorWithDrawer}
      />
    </Drawer.Navigator>
  );
};
export default (props) => {
  return <DrawerNavigator />;
};
