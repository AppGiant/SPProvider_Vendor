import React, { useState, useEffect } from 'react';
import { Button } from 'react-native-elements/dist/buttons/Button';
import {
  SafeAreaView,
  ScrollView,
  View,
} from '../../../Components/StyledComponents';
import Text from '../../../Components/TextI';
import NoServiceIcon from '../../../Images/noService.svg';
import styles from './style';
import SVGComponent from '../../../Components/SVGComponent';
import Header from '../../../Components/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import color from '../../../Constants/color';
import { Screens } from '../../../Constants/constant';
import HView from '../../../Components/HView';
import { H, W } from '../../../utils/DimensionCalculator';
import { Card } from 'react-native-elements';
import { Colors } from '../../../Themes';
import { Alert } from 'react-native';
import TouchableIcon from '../../../Components/TouchableIcon';
import Toast from 'react-native-simple-toast';
import { BackHandler } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SearchHeader from '../../../Components/SearchHeader';
import FilterCard from '../../../Components/FilterCard';
import {
  deleteService,
  getCompleteService,
  getServiceListByStoreId,
} from '../../../api/ApiManager';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import Loader from '../../../Components/Loader';

const Services = (props) => {
  const handler = () => {
    BackHandler.exitApp();
    return true;
  };
  useEffect(() => {
    const handlerEvent = BackHandler.addEventListener(
      'hardwareBackPress',
      handler,
    );
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handler);
    };
  }, []);

  const [services, setServices] = useState([]);
  const [fullServices, setFullServices] = useState([]);
  const [storedId, setStoredId] = useState();
  const [sortedMinPrices, setSortedMinPrices] = useState([]);
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);
  const isFocused = useIsFocused();

  useEffect(() => {
    getStoredId();
  }, [isFocused]);

  const getStoredId = () => {
    AsyncStorage.getItem('storeData')
      .then((res) => {
        if (res) {
          let res1 = JSON.parse(res);
          // console.log(
          //   'StoreId Async => ' + JSON.stringify(res1.StoreData.store.id),
          // );

          if (res1 && res1.StoreData.store.id) {
            setStoredId(res1?.StoreData?.store?.id);
            getService(res1.StoreData.store.id);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getService = (id, page) => {
    console.log('storeId => ' + id);
    getServiceListByStoreId(id, page || 1)
      .then((res) => {
        if (res.status) {
          if (page) {
            setServices([...services, ...res.data]);
            setFullServices([...fullServices, ...res.data]);
            setLoader(false);
            setPage(pge => pge + 1);
          } else {
            setServices(res.data);
            setFullServices(res.data);
          }
        } else {
          // console.log('ServiceListByStoreId => ' + JSON.stringify(res));
          Toast.showWithGravity(
            res.message,
            Toast.SHORT,
            Toast.BOTTOM,
          );
          setLoader(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCompleteServiceByServiceId = (id, screen) => {
    getCompleteService(id)
      .then((res) => {
        if (res.status) {
          // console.log('getCompleteService => ' + JSON.stringify(res));
          if (screen == 'REVIEW') {
            // setReviewData(res.data);
            props.navigation.navigate(Screens.REVIEW_SERVICE, {
              variations: [],
              viewed: true,
              reviewData: res.data,
              serviceId: id,
            });
          }
          if (screen == 'EDIT') {
            // setCompleteService(res.data);
            console.log('ServiceList => ' + res.data.id);
            props.navigation.navigate(Screens.SERVICE_FORM, {
              completeService: res.data,
              serviceId: id,
            });
          }
        } else {
          console.log('getCompleteService => ' + JSON.stringify(res));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteServiceByServiceId = (id) => {
    deleteService(id)
      .then((res) => {
        if (res.status) {
          getService(storedId);
          Toast.showWithGravity(res.message, Toast.SHORT, Toast.BOTTOM);
        } else {
          Toast.showWithGravity(res.message, Toast.SHORT, Toast.BOTTOM);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const moveToEditScreen = (id) => {
    console.log('serviceId => ' + id);
    getCompleteServiceByServiceId(id, 'EDIT');
  };

  const moveToReviewScreen = (id) => {
    console.log('serviceId => ' + id);
    getCompleteServiceByServiceId(id, 'REVIEW');
  };

  const getMinPrice = (it) => {
    let curPrice = [];
    // console.log(JSON.stringify(it));
    it.Variations.forEach((element) => {
      curPrice.push(element.price);
    });
    curPrice.sort();
    return curPrice[0];
  };

  const addService = () => {
    props.navigation.navigate(Screens.SERVICE_TYPE, {});
  };
  const onPressDeleteService = (serviceId) => {
    Alert.alert(
      'Delete Service',
      'Are you sure, you want to delete the service?',
      [
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => deleteServiceByServiceId(serviceId),
        },
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => {
            // Toast.showWithGravity("We are working on that")
          },
        },
      ],
    );
  };

  const handleSearch = (query) => {
    const formattedQuery = query.toLowerCase();
    let filteredData = fullServices.filter(item => item.primaryServiceName.toLowerCase().includes(formattedQuery));
    setServices(filteredData);
  };

  const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    const paddingToBottom = 20;
    // console.log('layout height -> ' + contentSize.height);
    return (
      layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom
    );
  };

  const filters = ['Business Type', 'Rating', 'Demography'];
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            if (loader) return;
            setLoader(true);
            getService(page);
          }
        }}
        scrollEventThrottle={400}>
        <View style={{ paddingHorizontal: H(10), paddingBottom: H(100) }}>
          <HView style={styles.header}>
            <TouchableOpacity
              onPress={addService}
              style={styles.addIconContainer}>
              <Icon
                size={25}
                color={color.PRIMARY}
                name="plus-circle-outline"
              />
              <Text style={[styles.lightText, { fontWeight: 'bold' }]}>Add</Text>
            </TouchableOpacity>
          </HView>

          <TouchableOpacity
            onPress={() => props.navigation.navigate(Screens.SERVICE_TYPE)}>
            <HView style={styles.createView}>
              <Icon
                name="plus-circle-outline"
                size={25}
                style={styles.plusIcon}
              />
              <Text style={styles.blueText}>Add New Service</Text>
            </HView>
          </TouchableOpacity>
          <View style={styles.search}>
            <SearchHeader onChangeText={handleSearch} />
            {/* <HView style={styles.filtersContainer}>
              <Text>{'Filters '}</Text>
              <HView style={styles.filtersItemContainer}>
                {filters.map((it, key) => (
                  <FilterCard key={key} label={it} />
                ))}
              </HView>
              <Text style={styles.filterExtra}>+2</Text>
              <TouchableIcon
                onPress={() => console.log('clicked')}
                containerStyle={styles.filterIconContainer}>
                <Icon
                  size={20}
                  color={color.PRIMARY}
                  name="filter-variant"></Icon>
              </TouchableIcon>
            </HView> */}
          </View>
          {services.length > 0 ? (
            <View>
              {services.map((it, index) => {
                // console.log('Service Card => ' + JSON.stringify(it));
                return (
                  <Card key={index} containerStyle={styles.cardContainerStyle}>
                    <HView>
                      <Text style={[styles.subHeadText, { fontSize: 20 }]}>
                        {it.primaryServiceName}
                      </Text>

                      <Text
                        style={[
                          styles.subHeadText,
                          { flex: 1, textAlign: 'right', marginBottom: 10 },
                        ]}>
                        {'$' + getMinPrice(it)}
                      </Text>
                    </HView>
                    <HView>
                      <HView style={styles.servicesDetail}>
                        {it['category'] && it['category'].name && (
                          <Text style={[styles.subHeadText]}>
                            {it['category'].name}
                          </Text>
                        )}
                        <Text style={styles.subHeadText}>{it.type}</Text>
                      </HView>
                      <HView style={styles.icons}>
                        <TouchableIcon
                          onPress={() => moveToReviewScreen(it.id)}
                          style={styles.iconContainer}>
                          <Icon
                            size={25}
                            color={color.PRIMARY}
                            name="eye-outline"></Icon>
                        </TouchableIcon>
                        <TouchableIcon
                          style={styles.iconContainer}
                          onPress={() => moveToEditScreen(it.id)}>
                          <Icon size={25} name="circle-edit-outline"></Icon>
                        </TouchableIcon>
                        <TouchableIcon
                          onPress={() => onPressDeleteService(it.id)}>
                          <Icon
                            size={25}
                            color={Colors.error}
                            name="trash-can-outline"></Icon>
                        </TouchableIcon>
                      </HView>
                    </HView>
                  </Card>
                );
              })}
            </View>
          ) : (
            <View style={styles.container}>
              <SVGComponent>
                <NoServiceIcon />
              </SVGComponent>
              <Text style={styles.headText}>List Your Service</Text>
              <Text style={styles.lightText}>
                You haven’t created any services yet, please add anew service to
                start accepting orders from SP+ Users
              </Text>
              <Button
                onPress={() => addService()}
                // buttonStyle={styles.buttonContainer}
                title="Yes Add My First Service"
                titleStyle={styles.buttonTitle}
                containerStyle={styles.buttonContainer}
              />
            </View>
          )}
          {loader && <Loader />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Services;
