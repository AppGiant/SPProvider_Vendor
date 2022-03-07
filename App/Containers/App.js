import '../Config';
import DebugConfig from '../Config/DebugConfig';
import React, {Component} from 'react';
import AppNavigation from '../Navigation/AppNavigation';
//import createStore from '../Redux'
import ThemeContext from '../Context/theme';
import LanguageContext from '../Context/internationalization';
import {NavigationContainer} from '@react-navigation/native';
import ReducerContext from '../Redux/index';
import {
  setJSExceptionHandler,
  setNativeExceptionHandler,
} from 'react-native-exception-handler';
import {Alert} from 'react-native';
import Restart from 'react-native-restart';
import { StatusBar } from 'react-native';
import colors from '../Themes/Colors';

const errorHandler = (e, isFatal) => {
  console.log(e);
  if (isFatal) {
    Alert.alert('Error Occured', 'We need to restart the App', [
      {text: 'Restart', onPress: () => Restart.Restart()},
    ]);
  }
};
setJSExceptionHandler(errorHandler, true);
setNativeExceptionHandler(errorHandler);

class App extends Component {
  // constructor(){
  //   super()
  //   this.errorHandler = this.errorHandler.bind(this)
  // }

  render() {
    return (
      <ReducerContext>
        <LanguageContext>
          <ThemeContext>
            <NavigationContainer>
            <StatusBar backgroundColor={colors.PRIMARY}/>
              <AppNavigation />
            </NavigationContainer>
          </ThemeContext>
        </LanguageContext>
      </ReducerContext>
    );
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron ? console.tron.overlay(App) : App;
