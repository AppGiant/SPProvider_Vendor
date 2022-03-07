export const Screens = {
  ROOT: 'Root',
  ROOT1: 'Root1',
  SCORES: 'Scores',
  TILES_SCREEN: 'Tiles Screen',
  HOME: 'Home',
  PROFILE: 'Profile',
  ABOUT_US: 'About us',
  SPLASH: 'Splash',
  APP: 'App',
  LOGIN: 'LOGIN',
  SING_UP: 'Sign Up',
  DASHBOARD: 'Dashboard',
  VIEW: 'VIEW',
  TIER: 'Choose Tier',
  VERIFICATION: 'Verification Screen',
  BANKING: 'BANKING SCREEN',
  ADD_SERVICE: 'Add Service',
  SERVICES: 'Service',
  SEARCH: 'SEARCH',
  FAVORITES: 'FAVORITES',
  BOOKING_NAVIGATOR: 'Bookings Nav',
  DASHBOARD_BOTTOM: 'Dashboard',
  HOME: 'Home',
  ADD_PHONE_NUMBER: 'Add Phone Number',
  FORGOT_PASSWORD: 'Forgot Password',
  CHANGE_PASSWORD: 'Change Password',
  KYC_VERIFICATION: 'Kyc Verification',
  EMAIL_VERIFICATION: 'Email Verification',
  PROFILE_SECTION: 'Profile Section',
  HOME_STACK: 'HOME_STACK',
  SERVICE_TYPE: 'SERVICE TYPE',
  SERVICE_FORM: 'SERVICE FORM',
  REVIEW_SERVICE: 'REVIEW SERVICE',
  EDIT_PROFILE: 'EDIT PROFILE',
  TRANSACTIONS: 'Transactions',
  PAYMENTS: 'Payments',
  WALLET: 'Wallet',
  REQUEST_PAYOUT: 'Request Payout',
  PAYOUT_DETAILS: 'Payout Details',
  DEPOSITE_MONEY: 'Deposite Money',
  ADD_PAYOUT_ACCOUNT: 'Add New Payout Account',
  ADD_NEW_PAYOUT_ACCOUNT: 'Add New Payout',
  ADD_PAYOUT: 'Add Payout',
  BOOKING_REQUESTS: 'Booking Requests',
  BOOKINGS: 'Bookings',
  RESCHEDULE_REQUESTS: 'Rescheduled Requests',
  CONFIRMED_REQUESTS: 'Confirmed Requests',
  CANCALLETIONS_BOOKING: 'Cancellations',
  AUTO_REJECTIONS: 'Auto Rejected',
  REJECTIONS: 'Rejected',
  CANCELLAION_BY_USER: 'Cancellations By User',
  REVIEW: 'Reviews',
  GIFTS: 'Gift Cards',
  ACTIVE_GIFT_CARDS: 'Active Gift Cards',
  INACTIVE_GIFT_CARDS: 'Inactive Gift Cards',
  VALIDITY_CHECKER: 'Validity Checker',
  ADD_GIFT_CARD: 'Add Gift Card',
  ACCOUNT_SETTINGS: 'Settings',
  REPORTS: 'Reports',
  COMPLETED_BOOKINGS: 'Completed Bookings',
  BOOKING_STACK: 'BOOKING STACK',
  EDIT_GIFT_CARD: 'Edit Gift Card',
  REACTIVATE_GIFT_CARD: 'Reactivate Gift Card',
  NOTIFICATIONS: 'Notifications',
  STORE_POLICY: 'Store Policies',
  MY_POLICIES: 'My Policies',
  HIGH_SEASON_POLICY: 'High Season Policy',
  GENERAL_SETTINGS: 'General Settings',
  CONFIRM_LOCATION: 'Confirm Location',
  MAP_VIEW: 'Maps',
  EDIT_VARIATIONS: 'Edit Variations',
  ADD_VARIATIONS: 'Add Variations',
  REVIEW_SERVICE_EDIT: 'Review Screen',
};

export const App = {
  SPLASH_SCREEN_DURATION: 3000, // 3 seconds in Production, 0.5s in Dev
  SPLASH_SCREEN_TEXT: `Welcome | ${new Date().getFullYear()}`,
  LOGOUT: 'Logout',
  NAME: 'Name',
  EMAIL: 'Email',
  FAMILY: 'Family Name',
  GOOGLE: 'Google',
  THEME_DARK: 'DARK',
  THEME_LIGHT: 'LIGHT',
  ENGLISH: 'ENGLISH',
  FRENCH: 'FRENCH',
  ARABIC: 'ARABIC',
  LTR: 'LTR',
  RTL: 'RTL',
};

export const WEB_CLIENT_ID = '*** YOUR WEB API HERE ***';

export const ActionTypes = {
  LOGGED_IN: 'loggedIn',
  LOGGED_OUT: 'loggedOut',
};

export const Messages = {
  LOGOUT_ERROR: 'Logout has failed!',
  IN_PROGRESS: 'Hmm, someone is getting impatience!',
  SOMETHING_WENT_WRONG: 'Something went wrong...',
};
export const RESULTS = {
  GRANTED: 'granted',
  BLOCKED: 'blocked',
  DENIED: 'denied',
  LIMITED: 'limited',
  UNAVAILABLE: 'unavailable',
};
export const PERMISSIONS_ = {
  CAMERA: {
    IOS: 'CAMERA',
    ANDROID: 'CAMERA',
  },
  READ_STORAGE: {
    IOS: 'PHOTO_LIBRARY',
    ANDROID: 'READ_EXTERNAL_STORAGE',
  },
  WRITE_STORAGE: {
    IOS: 'PHOTO_LIBRARY',
    ANDROID: 'WRITE_EXTERNAL_STORAGE',
  },
};
export const ValidationString = {
  PASSWORD:
    /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
  EMAIL:
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  PHONE_NUMBER:
    /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/,
};
