import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';

const commonAuthFetch = async (data) => {
  var header = {
    Accept: 'application/json',
    Authorization: 'authToken',
    //  access_token: data.data.token,
    'Content-Type': 'application/json',
  };
  0;
  //
  await AsyncStorage.getItem('accessToken').then((resp) => {
    header['accesstoken'] = resp;
  });
  //console.log(header)

  if (
    data.method == 'POST' ||
    data.method == 'PUT' ||
    data.method == 'DELETE'
  ) {
    return fetch(`${data.url}`, {
      method: data.method,
      headers: header,
      body: JSON.stringify(data.data),
    });
  } else {
    return fetch(`${data.url}`, {
      method: data.method,
      headers: header,
    });
  }
};
export default commonAuthFetch;
