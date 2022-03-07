import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RNMapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {SafeAreaView, View} from '../StyledComponents';
import Geolocation from 'react-native-geolocation-service';
import {PermissionsAndroid, Platform, Text} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import Geocoder from 'react-native-geocoding';
import styles from './style';
import TextBetweenLine from '../../Components/TextBetweenLine';
import Button from '../../Components/CustomButton';
import HView from '../HView';
import {Screens} from '../../Constants/constant';

const MapView = (props) => {
  let res = {};
  const [show, setShow] = useState(false);
  const [longitude, setLongitude] = useState(0);
  const [latitude, setLatitude] = useState(0);
  const [postalCode, setPostalCode] = useState('');
  const isFocused = useIsFocused();

  Geocoder.init('AIzaSyBKowFDX0jDn687et4wgSmFpXiK-bj5Gj4'); // use a valid API key

  useEffect(() => {
    requestPermissions();
    Geolocation.getCurrentPosition(
      (pos) => {
        setLatitude(pos.coords.latitude);
        setLongitude(pos.coords.longitude);
        console.log('1 ' + pos.coords.latitude);
        console.log('2 ' + pos.coords.longitude);
      },
      (error) => {
        console.log('3 ' + error.message.toString());
      },
      {
        showLocationDialog: true,
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 0,
      },
    );
  }, [isFocused]);

  async function requestPermissions() {
    if (Platform.OS === 'ios') {
      const auth = await Geolocation.requestAuthorization('whenInUse');
      if (auth === 'granted') {
        // do something if granted...
      }
    }

    if (Platform.OS === 'android') {
      await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (PermissionsAndroid.RESULTS.GRANTED) {
        console.log('permission granted');
      }
    }
  }

  Geocoder.from({
    latitude: latitude,
    longitude: longitude,
  })
    .then((response) => {
      // console.log('Res 1 ' + JSON.stringify(response.results[0]));
      res = getResponse(response.results[0]);
      setPostalCode(response.results[0].formatted_address);
      // console.log('Res 2 -> ' + res);
    })
    .catch((error) => console.log(error));

  const getResponse = (geolocationRes) => {
    let data = {};
    for (let i = 0; i < geolocationRes.address_components.length; i++) {
      if (geolocationRes.address_components[i].types.length === 3) {
        data[geolocationRes.address_components[i].types[2]] =
          geolocationRes.address_components[i].long_name;
      } else {
        data[geolocationRes.address_components[i].types[0]] =
          geolocationRes.address_components[i].long_name;
      }
    }
    // console.log('Res 3' + JSON.stringify(data));
    return JSON.stringify(data);
  };

  const getCoordinates = (c) => {
    setLatitude(c.latitude);
    setLongitude(c.longitude);
    // console.log('getCoordinates ' + c);
  };

  const moveToConfirm = (response) => {
    try {
      props.navigation.navigate(Screens.CONFIRM_LOCATION, {
        response: response,
        latitude: latitude,
        longitude: longitude,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <RNMapView
        onLongPress={(_) => {
          console.log(_.nativeEvent.coordinate);
        }}
        // onPress={() => console.log('map pressed')}
        showsUserLocation={true}
        followsUserLocation={true}
        showsMyLocationButton={true}
        showsCompass={true}
        zoomEnabled={true}
        provider={PROVIDER_GOOGLE}
        scrollEnabled={true}
        style={{flex: 1}}
        minZoomLevel={4}
        initialRegion={{
          latitude: 24.7153337,
          longitude: 46.6870572,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        // region={{
        //   latitude: latitude,
        //   longitude: longitude,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421,
        // }}
        onRegionChangeComplete={(e) => getCoordinates(e)}></RNMapView>
      <Icon name="map-marker" size={40} style={styles.pinIcon} />
      <View style={styles.round}>
        <Text style={styles.mapText}>Confirm delivery location</Text>
        <TextBetweenLine />
        <Text style={styles.mapText1}>YOUR LOCATION</Text>
        <HView style={styles.addContainer}>
          <Text style={styles.mapTextBold} numberOfLines={1}>
            {postalCode}
          </Text>
        </HView>
        <TextBetweenLine />
        <Button
          title="Confirm location"
          containerStyle={styles.btn}
          onPress={() => moveToConfirm(res)}
        />
      </View>
    </SafeAreaView>
  );
};
export default MapView;
