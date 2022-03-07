import React from 'react';
const simpleFetch = url => {
  return fetch(`${url}`, {
    method: 'GET',
    redirect: 'follow',
  })
  
};
export default simpleFetch;
