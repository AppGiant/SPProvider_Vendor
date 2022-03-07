import React from 'react';
import {
    View as RNView,
    Text as RNText,
    SafeAreaView as RNSafeAreaView,
    ScrollView as RNScrollView,
    TouchableOpacity as RNTouchableOpacity,
    ActivityIndicator as RNActivityIndicator
} from 'react-native';
import styles from '../../utils/style';
import { useTheme } from '../../Context/theme';

// HOC to style elements based on the theme.
export default themeStyled = (WrappedComponent, isForegroundComponent = false) => {
    return (props) => {
        const isDark = useTheme();
        return (
            <WrappedComponent  showsVerticalScrollIndicator={false}
                {...props}
                style={
                    [
                        isDark
                        ? (isForegroundComponent ? styles.darkThemeForeground : styles.darkThemeBackground)
                        : (isForegroundComponent ? styles.lightThemeForeground : styles.lightThemeBackground),
                        props.style
                    ]
                }
            >{props.children}</WrappedComponent>
        );
    }
}

export const Text = themeStyled(RNText, true);
export const View = themeStyled(RNView);
export const ScrollView = themeStyled(RNScrollView);
export const SafeAreaView = themeStyled(RNSafeAreaView);
export const   TouchableOpacity = themeStyled(RNTouchableOpacity);
export const ActivityIndicator=themeStyled(RNActivityIndicator,true)