import React from 'react';
import {View, Text, Button, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import SecondPage from './MapAndListScreen';

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.requestMultiple(
      [
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      ],
      {
        title: 'Cool Photo App Camera Permission',
        message: 'Tà bem',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (
      granted['android.permission.ACCESS_FINE_LOCATION'] ===
        PermissionsAndroid.RESULTS.GRANTED &&
      granted['android.permission.ACCESS_COARSE_LOCATION'] ===
        PermissionsAndroid.RESULTS.GRANTED
    ) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied', granted, typeof granted);
    }
  } catch (err) {
    console.warn(err);
  }
};

let currentLongitude = null;
let currentLatitude = null;

function posizione() {
  Geolocation.getCurrentPosition(
    position => {
      console.log(position);
      currentLatitude = position.coords.latitude;
      currentLongitude = position.coords.longitude;
      console.log("dentro posizione " + typeof position.coords.latitude);
    },
    error => {
      // See error code charts below.
      console.log(error.code, error.message);
    },
    {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
  );
}

function FirstPage(props) {
  return (
    <View
      style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
      <Text style={{color: 'black'}}> First Page </Text>
      <Button
        onPress={() => {
          requestLocationPermission();
          posizione();
          /*SecondPage(currentLatitude, currentLongitude);*/
        }}
        title="Add with position"
        color="#841584"
      />
    </View>
  );
}

export default FirstPage;
