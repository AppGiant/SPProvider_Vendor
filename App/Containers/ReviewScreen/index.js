import React, { useEffect, useState, useCallback } from 'react';
import HView from '../../Components/HView';
import {
  SafeAreaView,
  ScrollView,
  View,
} from '../../Components/StyledComponents';
import Text from '../../Components/TextI';
import styles from './style';
// import HotelIcon from '../../Images/halais.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlatList } from 'react-native';
import ReviewCard from '../../Components/ReviewCard';
import FilterCard from '../../Components/FilterCard';
import TouchableIcon from '../../Components/TouchableIcon';
import color from '../../Constants/color';
import Button from '../../Components/CustomButton';
import { Image } from 'react-native';
import PendingReviews from '../../Components/PendingReviews';
import ReviewPopup from '../../Components/ReviewPopup';
import DiscardPopup from '../../Components/DiscardPopup';
import {
  getMyStoreDetails,
  getUserRating,
  getReviewsOnUser,
  getPendingReviewsOnUser,
  addReview,
  deleteReview,
  getGivenReviewsOnUser
} from '../../api/ApiManager';
import { useFocusEffect } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../../Themes';
import { useIsFocused } from '@react-navigation/native';
import Toast from 'react-native-simple-toast';
import moment from 'moment';
import Loader from '../../Components/Loader';
import StarCard from '../../Components/StarCard';
import {BackHandler} from 'react-native';

const ReviewScreen = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilter, setShowFilter] = useState(false);
  const filters = ['Business Type', 'Rating', 'Demography'];
  const [activeReviewsType, setActiveReviewsType] = useState('0');
  const [showReview, setShowReview] = useState(false);
  const [showDiscard, setShowDiscard] = useState(false);
  const [username, setUsername] = useState('');
  const [orderId, setOrderId] = useState();
  const [storeId, setStoreId] = useState();
  const [storeName, setStoreName] = useState('');
  const [orderTime, setOrderTime] = useState();
  const [serviceName, setServiceName] = useState('');
  const [userId, setUserId] = useState();
  const [userDetailsLoading, setUserDetailsLoading] = useState(true);
  const isFocussed = useIsFocused();

  const handler = () => {
    props.navigation.goBack();
    return true;
  };

  useEffect(() => {
    getStoreDetails();
    const handlerEvent = BackHandler.addEventListener(
      'hardwareBackPress',
      handler,
    );
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handler);
    };
  }, [isFocussed]);

  // useFocusEffect(
  //   React.useCallback(() => {
  //     getUserDetails();
  //   }, [username]),
  // );

  const getStoreDetails = () => {
    getMyStoreDetails()
      .then((res) => {
        if (res.status) {
          // console.log('review => ' + JSON.stringify(res));
          setUserDetailsLoading(false);
          setUsername(res?.StoreData?.userName);
        } else {
          console.log(
            'Review Screen user details -> ' + res.StoreData.userName,
          );
          setUserDetailsLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setUserDetailsLoading(false);
      });
  };

  const discardReview = (close) => {
    deleteReview(orderId, storeId, userId).then(res => {
      console.log(res)
      if (res.status) {
        getPendingReviewsOnUser1(1, selectedStars.join(','));
        Toast.showWithGravity('Review Discard Successfully', Toast.SHORT, Toast.BOTTOM);
        // getUserDetails();
        close();
      }
      else {
        Toast.showWithGravity('Unable to discard review', Toast.SHORT, Toast.BOTTOM);
      }
    }).catch(err => {
      console.log(err)
    })
  }

  const postReview = (rating, text) => {
    console.log({
      reviewTo: storeId,
      orderId: orderId,
      storeId: storeId,
      rating: rating,
      isStore: 1,
      review: text,
    });
    addReview({
      reviewTo: userId,
      orderId: orderId,
      storeId: storeId,
      rating: rating,
      isStore: 1,
      review: text,
    })
      .then((res) => {
        if (res.status) {
          console.log('review added => ' + JSON.stringify(res));
          Toast.showWithGravity('Review added', Toast.SHORT, Toast.BOTTOM);
          getPendingReviewsOnUser1(1, selectedStars.join(','));
          setShowReview(false);
        } else {
          console.log('review added => ' + JSON.stringify(res));
          Toast.showWithGravity(res.message, Toast.SHORT, Toast.BOTTOM);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showReviewPopup = (
    orderId,
    storeId,
    storeName,
    orderTime,
    serviceName,
    userId,
  ) => {
    setOrderId(orderId);
    setStoreId(storeId);
    setUserId(userId);
    setStoreName(storeName);
    setOrderTime(moment(orderTime).format('MM/DD/YYYY'));
    setServiceName(serviceName);
    setShowDiscard(false);
    setShowReview(true);
    console.log('order Id => ' + orderId);
    console.log('serviceName => ' + serviceName);
  };

  const showDiscardPopup = (
    orderId,
    storeId,
    storeName,
    orderTime,
    serviceName,
    userId,
  ) => {
    setOrderId(orderId);
    setStoreId(storeId);
    setUserId(userId);
    setStoreName(storeName);
    setOrderTime(moment(orderTime).format('YYYY-MM-DD'));
    setServiceName(serviceName);
    setShowReview(false);
    setShowDiscard(true);
    console.log('order Id => ' + orderId);
    console.log('serviceName => ' + serviceName);
  };
  const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };
  const setReviewType = () => {
    setActiveReviewsType('0');
    setShowReview(false);
    setShowDiscard(false);
  };
  const [ratingJson, setRatingJson] = useState({});
  useEffect(() => {
    getUserRating().then((res) => {
      // console.log(res.data[0])
      setRatingJson(res.data[0]);
    });
  }, []);
  const [reviewsOnUser, setReviewsOnUser] = useState([]);
  const [pendingReviews, setPendingReviews] = useState([]);
  const [givenReviews, setGivenReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedStars, setSelectedStars] = useState([]);
  const [reviewLoader, setReviewLoader] = useState(false);
  const addRemoveStar = (star) => {
    setReviewLoader(true);
    const tempSelectedStars = [...selectedStars];
    const index = tempSelectedStars.indexOf(star);
    if (index != -1) {
      tempSelectedStars.splice(index, 1);
    } else {
      tempSelectedStars.push(star);
    }
    setCurrentPage(1);
    getReviewsOnUser1(1, tempSelectedStars.join(','));
    getPendingReviewsOnUser1(1);
    setSelectedStars(tempSelectedStars);
  };
  const getReviewsOnUser1 = (page, ratings) => {
    if (loading) return;

    setLoading(true);
    getReviewsOnUser(page, ratings)
      .then((res) => {
        // console.log('getReviewsOnUser ' + JSON.stringify(res));
        if (res.status) {
          if (page == 1) setReviewsOnUser(res?.data);
          else {
            setReviewsOnUser([...reviewsOnUser, ...(res.data || [])]);
            // console.log('review => ' + JSON.stringify(res));
            setCurrentPage(page);
          }
        } else {
          console.log('getReviewsOnUser ' + JSON.stringify(res));
        }

        setLoading(false);
        setReviewLoader(false);
      })
      .catch((er) => {
        setLoading(false);
        setReviewLoader(false);
        console.log(er);
      });
  };
  const getPendingReviewsOnUser1 = (page) => {
    if (loading) return;

    setLoading(true);
    getPendingReviewsOnUser(page)
      .then((res) => {
        // console.log('pending ' + JSON.stringify(res));
        console.log(res.data);
        if (page == 1) setPendingReviews(res.data);
        else {
          setPendingReviews([...pendingReviews, ...(res.data || [])]);
          setCurrentPage(page);
        }
        setLoading(false);
        setReviewLoader(false);
      })
      .catch((er) => {
        setReviewLoader(false);
        setLoading(false);
        console.log(er);
      });
  };

  const getGivenReviewsOnUser1 = (page) => {
    if (loading) return;

    setLoading(true);
    getGivenReviewsOnUser(page)
      .then((res) => {
        // console.log('pending ' + JSON.stringify(res));
        console.log(res.data);
        if (page == 1) setGivenReviews(res.data);
        else {
          setGivenReviews([...givenReviews, ...(res.data || [])]);
          setCurrentPage(page);
        }
        setLoading(false);
        setReviewLoader(false);
      })
      .catch((er) => {
        setReviewLoader(false);
        setLoading(false);
        console.log(er);
      });
  };

  useEffect(() => {
    getReviewsOnUser1(1, selectedStars.join(','));
    getPendingReviewsOnUser1(1, selectedStars.join(','));
  }, [isFocussed]);

  if (userDetailsLoading)
    return (
      <View style={[styles.loader, styles.horizontal]}>
        <Loader />
      </View>
    );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView
        onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            if (activeReviewsType == '0')
              getReviewsOnUser1(currentPage + 1, selectedStars.join(','));
            else getPendingReviewsOnUser1(currentPage + 1);
          }
        }}
        scrollEventThrottle={400}>
        <View style={styles.container1}>
          <View style={styles.roundCard}>
            <HView style={styles.container}>
              <View style={styles.circleView}>
                <Image
                  style={styles.circle}
                  source={require('../../Images/halais.png')}
                />
              </View>
              <View style={styles.textHolder}>
                {username ? (
                  <Text style={styles.text1}>{username}</Text>
                ) : (
                  <TouchableOpacity onPress={() => getStoreDetails()}>
                    <Text style={styles.text2}>{'Tap to refresh'}</Text>
                  </TouchableOpacity>
                )}
                <HView style={styles.starsHolder}>
                  {/* {[1, 2, 3, 4, 5].map((it, i) => {
                    return (
                      <Icon
                        key={i}
                        size={14}
                        style={styles.tagIcon}
                        name="star"
                      />
                    );
                  })} */}
                  <Text style={styles.rightSideSmallText}>{`${ratingJson?.ratings?.toFixed(1) || 0
                    }`}</Text>
                  <Icon
                    size={14}
                    style={[styles.tagIcon, { marginLeft: -5 }]}
                    name="star"
                  />
                  <Text
                    style={[
                      styles.rightSideSmallText,
                      { marginLeft: -10 },
                    ]}>{` out of 5 (${ratingJson?.ratingCount})`}</Text>
                </HView>
                <Text
                  style={
                    styles.text2
                  }>{`Completed Bookings (${ratingJson?.orderCount})`}</Text>
              </View>
            </HView>
          </View>
          <HView style={[styles.filtersContainer, { flexWrap: 'wrap' }]}>
            {/* <HView style={styles.filtersItemContainer}>
              {filters.map((it, index) => (
                <FilterCard key={index} label={it} />
              ))}
            </HView>
            <Text style={styles.filterExtra}>+2</Text> */}
            {activeReviewsType == '0' &&
              [5, 4, 3, 2, 1].map((it, i) => (
                <TouchableIcon
                  key={i}
                  onPress={() => addRemoveStar(it)}
                  containerStyle={styles.filterIconContainer}>
                  <StarCard
                    starCount={it}
                    value=""
                    bgColor={
                      selectedStars.indexOf(it) != -1
                        ? Colors.liteYellow
                        : Colors.white
                    }
                  />
                </TouchableIcon>
              ))}
          </HView>
          <HView style={styles.btnHolder}>
            <Button
              title="Reviews Recieved"
              containerStyle={
                activeReviewsType === '0' ? styles.btn1 : styles.btnLite
              }
              titleStyle={
                activeReviewsType === '0'
                  ? styles.buttonTitle1
                  : styles.buttonTitleLite
              }
              onPress={() => {
                setActiveReviewsType('0');
                getReviewsOnUser1(1);
                setCurrentPage(1);
              }}
            />
            <Button
              title="Pending Reviews"
              containerStyle={
                activeReviewsType === '1' ? styles.btn1 : styles.btnLite
              }
              titleStyle={
                activeReviewsType === '1'
                  ? styles.buttonTitle1
                  : styles.buttonTitleLite
              }
              onPress={() => {
                setCurrentPage(1);
                setActiveReviewsType('1');
                getPendingReviewsOnUser1(1);
              }}
            />
            <Button
              title="Reviews Given"
              containerStyle={
                activeReviewsType === '2' ? styles.btn1 : styles.btnLite
              }
              titleStyle={
                activeReviewsType === '2'
                  ? styles.buttonTitle1
                  : styles.buttonTitleLite
              }
              onPress={() => {
                setActiveReviewsType('2');
                getGivenReviewsOnUser1(1);
                setCurrentPage(1);
              }}
            />
          </HView>
          {reviewLoader && <Loader />}
          {activeReviewsType == '0' ? (
            <FlatList
              //   keyExtractor={(item, index) => item.key}
              style={styles.scroll}
              ListEmptyComponent={() => (
                <Text style={{ marginTop: 50 }}>No reviews available</Text>
              )}
              data={reviewsOnUser}
              renderItem={({ item }) => {
                return <ReviewCard ownReview key={item.key} data={item} />;
              }}
            />
          ) : activeReviewsType == '1'?(
            <FlatList
              keyExtractor={(item, index) => index}
              style={styles.scroll}
              ListEmptyComponent={() => (
                <Text style={{ marginTop: 50 }}>
                  No pending reviews available
                </Text>
              )}
              data={pendingReviews}
              renderItem={({ item }) => {
                return (
                  <PendingReviews
                    ownReview
                    key={item.key}
                    data={item}
                    showReviewPopup={showReviewPopup}
                    showDiscardPopup={showDiscardPopup}
                  />
                );
              }}
            />
          ):(
            <FlatList
              //   keyExtractor={(item, index) => item.key}
              style={styles.scroll}
              ListEmptyComponent={() => (
                <Text style={{ marginTop: 50 }}>No reviews available</Text>
              )}
              data={givenReviews}
              renderItem={({ item }) => {
                return <ReviewCard ownReview key={item.key} data={item} />;
              }}
            />
          )}
        </View>
      </ScrollView>
      {showReview && (
        <ReviewPopup
          handleFilter={setShowReview}
          postReview={postReview}
          storeName={storeName}
          orderTime={orderTime}
          serviceName={serviceName}
        />
      )}
      {showDiscard && (
        <DiscardPopup
          da
          handleFilter={setShowDiscard}
          discardReview={discardReview}
          storeName={storeName}
          orderTime={orderTime}
          serviceName={serviceName}
        />
      )}
    </SafeAreaView>
  );
};
export default ReviewScreen;
