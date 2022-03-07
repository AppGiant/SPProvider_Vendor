import commonFetch from './commanAPI';
import commonAuthFetch from './AuthAPIManager';
import AsyncStorage from '@react-native-async-storage/async-storage';

const APP_URL = 'http://194.163.134.197:3000/';
const APP_URL_WEBSERVICE = `${APP_URL}api/`;
const APP_URL_CP = 'http://194.163.134.197:3004/';
const APP_PROFILE_MS_URL = `${APP_URL_CP}api_v1/profile/`;
const STORE_MS_BASE_URL = 'http://194.163.134.197:8000/';
const STORE_MS_URL = `${STORE_MS_BASE_URL}api_v1/store/`;
const PROFILE_MS = 'http://194.163.134.197:3004/';
const SERVICE_MS = 'http://194.163.134.197:8000/';
const CART_MS = 'http://saloonplus.com:6001/';
const ORDER_MS = 'http://194.163.134.197:6001/';
const ADMIN_MS = 'http://194.163.134.197:4000/';
const COUPAN_MS = 'http://saloonplus.com:9010/';
const REVIEW_MS = 'http://saloonplus.com:7000/';

export function userLogin(data) {
  return new Promise((success, failure) => {
    commonFetch({
      url: `${APP_PROFILE_MS_URL}user/login`,
      data: data,
      method: 'POST',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        failure(err);
      });
  });
}

export function storeLogin(data) {
  // console.log('store login => ' + JSON.stringify(data));
  return new Promise((success, failure) => {
    commonFetch({
      url: `${PROFILE_MS}api_v1/profile/user/storelogin`,
      data: data,
      method: 'POST',
    })
      .then((res) => {
        console.log(res);
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        failure(err);
      });
  });
}

export function userRegister(data) {
  return new Promise((success, failure) => {
    commonFetch({
      url: `${APP_PROFILE_MS_URL}user/addUser`,
      data: data,
      method: 'POST',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        failure(err);
      });
  });
}

export function addStoreUser(data) {
  return new Promise((success, failure) => {
    commonFetch({
      url: `${APP_PROFILE_MS_URL}user/addUser`,
      data: data,
      method: 'POST',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        failure(err);
      });
  });
}

export function sendPhoneOTP(data) {
  return new Promise((success, failure) => {
    commonFetch({
      url: `${APP_PROFILE_MS_URL}authentication/sendPhoneOTP`,
      data: data,
      method: 'POST',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        failure(err);
      });
  });
}

export function sendEmailOTP(data) {
  return new Promise((success, failure) => {
    commonFetch({
      url: `${APP_URL}sendEmailOTP`,
      data: data,
      method: 'POST',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        failure(err);
      });
  });
}

export function verifyPhoneOTP(data) {
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${APP_PROFILE_MS_URL}user/addPhoneNumberToAccount`,
      data: data,
      method: 'POST',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        failure(err);
      });
  });
}

export function verifyEmailOTP(data) {
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${APP_PROFILE_MS_URL}user/addEmailToAccount`,
      data: data,
      method: 'POST',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        failure(err);
      });
  });
}

export function emailAvailability(data) {
  return new Promise((success, failure) => {
    commonFetch({
      url: `${APP_PROFILE_MS_URL}user/emailAvailability`,
      data: data,
      method: 'POST',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        failure(err);
      });
  });
}

export function phoneAvailability(data) {
  return new Promise((success, failure) => {
    commonFetch({
      url: `${APP_PROFILE_MS_URL}user/phoneNumberAvailability`,
      data: data,
      method: 'POST',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        failure(err);
      });
  });
}

export function userNameAvailability(data) {
  return new Promise((success, failure) => {
    commonFetch({
      url: `${APP_PROFILE_MS_URL}user/userNameAvailability`,
      data: data,
      method: 'POST',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        failure(err);
      });
  });
}
export function changePasswordUsingOTP(data) {
  return new Promise((success, failure) => {
    commonFetch({
      url: `${APP_URL}changePasswordWithOTP`,
      data: data,
      method: 'POST',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        }).catch(err => {
          failure(err);
        });
      })
      .catch((err) => {
        failure(err);
      });
  });
}

export function getUserNotifications(page) {
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${APP_PROFILE_MS_URL}user/getUserNotification?page=${page}`,
      // data: data,
      method: 'GET',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        failure(err);
      });
  });
}

export function setUserNotificationRead() {
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${APP_PROFILE_MS_URL}user/setUserNotificationRead`,
      // data: data,
      method: 'PUT',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        failure(err);
      });
  });
}

export function getUserAddSettings() {
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${APP_PROFILE_MS_URL}user/getUserAddSettings`,
      // data: data,
      method: 'GET',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        failure(err);
      });
  });
}

export function editUserAddSettings(data) {
  // console.log('editAddDetails -> ' + JSON.stringify(data));
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${APP_PROFILE_MS_URL}user/editUserAddSettings`,
      data: data,
      method: 'PUT',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        failure(err);
      });
  });
}

export function getServiceListByStoreId(id, page) {
  // console.log('getServiceListByStoreId ' + id);
  return new Promise((success, failure) => {
    commonFetch({
      url: `${STORE_MS_URL}public/getServiceListByStoreId?storeId=${id}&page=${page}`,
      // data: data,
      method: 'GET',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        console.log(err);
        failure(err);
      });
  });
}

export function addServices(data) {
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${STORE_MS_BASE_URL}api_v1/store/service/addServices`,
      data: data,
      method: 'POST',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        console.log(err);
        failure(err);
      });
  });
}

export function getCompleteService(id) {
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${STORE_MS_BASE_URL}api_v1/store/service/getcompleteService?serviceId=${id}`,
      // data: data,
      method: 'GET',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        console.log(err);
        failure(err);
      });
  });
}

export function editServices(id, data) {
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${STORE_MS_BASE_URL}api_v1/store/service/editServices?serviceId=${id}`,
      data: data,
      method: 'PUT',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        console.log(err);
        failure(err);
      });
  });
}

export function editVariation(id, data) {
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${STORE_MS_BASE_URL}api_v1/store/service/editVariation?variationId=${id}`,
      data: data,
      method: 'PUT',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        console.log(err);
        failure(err);
      });
  });
}

export function addVariation(data) {
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${STORE_MS_BASE_URL}api_v1/store/service/addVariation`,
      data: data,
      method: 'POST',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        console.log(err);
        failure(err);
      });
  });
}

export function deleteVariation(variationId, serviceId) {
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${STORE_MS_BASE_URL}api_v1/store/service/deleteVariation?variationId=${variationId}&serviceId=${serviceId}`,
      // data: data,
      method: 'DELETE',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        console.log(err);
        failure(err);
      });
  });
}

export function deleteService(serviceId) {
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${STORE_MS_BASE_URL}api_v1/store/service/deleteService?serviceId=${serviceId}`,
      // data: data,
      method: 'DELETE',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        console.log(err);
        failure(err);
      });
  });
}

export function cancelBooking(id) {
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${ORDER_MS}api_v1/bookings/store/cancelBooking?bookingId=${id}`,
      // data: data,
      method: 'PUT',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        console.log(err);
        failure(err);
      });
  });
}

export function rescheduleBookingAction(data) {
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${ORDER_MS}api_v1/bookings/store/rescheduleBookingAction`,
      data: data,
      method: 'PUT',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        console.log(err);
        failure(err);
      });
  });
}

export function putEditAddressById(id, data) {
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${PROFILE_MS}api_v1/profile/user/editAddressById?id=${id}`,
      data: data,
      method: 'PUT',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        console.log(err);
        failure(err);
      });
  });
}

export function rescheduleBookingRequest(id, data) {
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${ORDER_MS}api_v1/bookings/store/rescheduleBookingRequest?bookingId=${id}`,
      data: data,
      method: 'POST',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        console.log(err);
        failure(err);
      });
  });
}

export function addGiftcard(data) {
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${COUPAN_MS}api_v1/coupan/giftcard/addgiftcard`,
      data: data,
      method: 'POST',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        console.log(err);
        failure(err);
      });
  });
}

export function addReview(data) {
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${REVIEW_MS}api_v1/review/addReviews`,
      data: data,
      method: 'POST',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        console.log(err);
        failure(err);
      });
  });
}

export async function deleteReview(storeId, orderId, userId) {
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${REVIEW_MS}api_v1/review/discardReview?reviewTo=${userId}&orderId=${orderId}&storeId=${storeId}&isStore=1`,
      method: 'DELETE',
    }).then((res) => {
      success(res)
    }).catch((err) => {
      console.log(err);
      failure(err);
    });
  });
}

export async function getUserRating() {
  let user = await AsyncStorage.getItem('storeData');

  if (user) user = JSON.parse(user);

  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${REVIEW_MS}api_v1/public/getrating?userId=${user.StoreData.store.id}`,
      // data: data,
      method: 'GET',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        console.log(err);
        failure(err);
      });
  });
}

export async function getReviewsOnUser(page = 1, ratings = '1,2,3,4,5') {
  let user = await AsyncStorage.getItem('storeData');

  if (user) user = JSON.parse(user);
  console.log(
    `${REVIEW_MS}api_v1/public/getreviewsOnStore?storeId=${user.StoreData.store.id}&page=${page}&search=&rating=${ratings}`,
  );
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${REVIEW_MS}api_v1/public/getreviewsOnStore?storeId=${user.StoreData.store.id}&page=${page}&search=&rating=${ratings}`,
      // data: data,
      method: 'GET',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        console.log(err);
        failure(err);
      });
  });
}

export async function getPendingReviewsOnUser(page = 1, ratings = '1,2,3,4,5') {
  let user = await AsyncStorage.getItem('storeData');

  if (user) user = JSON.parse(user);
  console.log('store Id => ' + user.StoreData.store.id);
  // console.log(`${REVIEW_MS}api_v1/public/getpendingreviewsByUserId?userId=${user.UserData.userId}&page=${page}&rating=${ratings}`)
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${REVIEW_MS}api_v1/review/getpendingreviewsByStoreId?storeId=${user.StoreData.store.id}&page=${page}`,
      // data: data,
      method: 'GET',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        console.log(err);
        failure(err);
      });
  });
}

export async function getGivenReviewsOnUser(page = 1) {
  let user = await AsyncStorage.getItem('storeData');

  if (user) user = JSON.parse(user);
  console.log('store Id => ' + user.StoreData.store.id);
  // console.log(`${REVIEW_MS}api_v1/public/getpendingreviewsByUserId?userId=${user.UserData.userId}&page=${page}&rating=${ratings}`)
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${REVIEW_MS}api_v1/public/getreviewsByStore?storeId=${user.StoreData.store.id}&page=${page}`,
      // data: data,
      method: 'GET',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        console.log(err);
        failure(err);
      });
  });
}

export function getMyStoreDetails() {
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${PROFILE_MS}api_v1/profile/user/getMyStoreDetails`,
      // data: data,
      method: 'GET',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        console.log(err);
        failure(err);
      });
  });
}

export function getVariation(id) {
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${SERVICE_MS}api_v1/store/service/getVariation?variationId=${id}`,
      // data: data,
      method: 'GET',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        console.log(err);
        failure(err);
      });
  });
}

export function getStoreBookings(type, page) {
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${CART_MS}api_v1/bookings/store/getStoreBookings?type=${type}&page=${page}`,
      // data: data,
      method: 'GET',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        console.log(err);
        failure(err);
      });
  });
}

export function getMyFilteredBookings(type, page, toDate, fromDate) {
  return new Promise((success, failure) => {
    console.log(`${CART_MS}api_v1/bookings/store/getStoreBookings?type=${type}&page=${page}&toDate=${toDate}&fromDate=${fromDate}`)
    commonAuthFetch({
      url: `${CART_MS}api_v1/bookings/store/getStoreBookings?type=${type}&page=${page}&toDate=${toDate}&fromDate=${fromDate}`,
      // data: data,
      method: 'GET',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        failure(err);
      });
  });
}

export function getAcceptBooking(id) {
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${ORDER_MS}api_v1/bookings/store/acceptBooking?bookingId=${id}`,
      // data: data,
      method: 'GET',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        console.log(err);
        failure(err);
      });
  });
}

export function getRejectBooking(id) {
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${ORDER_MS}api_v1/bookings/store/rejectBooking?bookingId=${id}`,
      // data: data,
      method: 'GET',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        console.log(err);
        failure(err);
      });
  });
}

export function getCheckInBooking(id) {
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${ORDER_MS}api_v1/bookings/store/checkInBooking?bookingId=${id}`,
      // data: data,
      method: 'GET',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        console.log(err);
        failure(err);
      });
  });
}

export function getCompleteBooking(id) {
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${ORDER_MS}api_v1/bookings/store/completeBooking?bookingId=${id}`,
      // data: data,
      method: 'GET',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        console.log(err);
        failure(err);
      });
  });
}

export function getNoShowBooking(id) {
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${ORDER_MS}api_v1/bookings/store/markNoShow?bookingId=${id}`,
      // data: data,
      method: 'GET',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        console.log(err);
        failure(err);
      });
  });
}

export function getBusinessSubCategory() {
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${ADMIN_MS}api_v1/admin/general/getBusinessSubCategory`,
      // data: data,
      method: 'GET',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        console.log(err);
        failure(err);
      });
  });
}

export function getBusinessCategory() {
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${ADMIN_MS}api_v1/admin/general/getBusinessCategory`,
      // data: data,
      method: 'GET',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        console.log(err);
        failure(err);
      });
  });
}

export function getServiceType() {
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${ADMIN_MS}api_v1/admin/general/getServiceType`,
      // data: data,
      method: 'GET',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        console.log(err);
        failure(err);
      });
  });
}

export function getSubCategoryByCategoryId(id) {
  return new Promise((success, failure) => {
    commonAuthFetch({
      url: `${ADMIN_MS}api_v1/admin/general/getSubCategoryByCategoryId?CategoryId=${id}`,
      // data: data,
      method: 'GET',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        console.log(err);
        failure(err);
      });
  });
}

export function getGiftCardByStoreId(id, pageNo) {
  return new Promise((success, failure) => {
    commonFetch({
      url: `${COUPAN_MS}api_v1/coupan/giftcard/getGiftCard?storeId=${id}&page=${pageNo}`,
      // data: data,
      method: 'GET',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        console.log(err);
        failure(err);
      });
  });
}

export function getSiteLanguages() {
  return new Promise((success, failure) => {
    commonFetch({
      url: `${ADMIN_MS}api_v1/admin/general/getSiteLanguages`,
      method: 'GET',
    })
      .then((res) => {
        res.json().then((result) => {
          success(result);
        });
      })
      .catch((err) => {
        console.log(err);
        failure(err);
      });
  });
}
