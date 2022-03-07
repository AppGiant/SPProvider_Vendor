import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Text from '../.../../../../../Components/TextI';
import HView from '../.../../../../../Components/HView';
import styles from './style';
import {
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  View,
} from '../../../../Components/StyledComponents';
import color from '../../../../Constants/color';
import {Colors} from '../../../../Themes';
import {FlatList} from 'react-native';
import {H, W} from '../../../../utils/DimensionCalculator';
import TextBetweenLine from '../../../../Components/TextBetweenLine';
import {Button} from 'react-native-elements/dist/buttons/Button';
import {Screens} from '../../../../Constants/constant';
import {BackHandler} from 'react-native';
import {
  getBusinessCategory,
  getServiceType,
  getSubCategoryByCategoryId,
} from '../../../../api/ApiManager';
import {useIsFocused} from '@react-navigation/native';
import Toast from 'react-native-simple-toast';

const ServiceType = (props) => {
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

  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedSubCategories, setSelectedSubCategories] = useState(0);
  const [selectedServiceTypes, setSelectedServiceTypes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [serviceTypes, setServiceTypes] = useState([]);
  const [serviceTypesId, setServiceTypesId] = useState([]);
  const isFocused = useIsFocused();
  let selectedSer = [];

  useEffect(() => {
    getCategory();
    setServiceTypesId([]);
    setSelectedServiceTypes([]);
    setSelectedCategory(0);
    setSelectedSubCategories(0);
  }, [isFocused]);

  const getCategory = () => {
    getBusinessCategory()
      .then((res) => {
        if (res.status) {
          // console.log('ServiceType => ' + JSON.stringify(res));
          setCategories(res.data);
        } else {
          console.log('ServiceType => ' + JSON.stringify(res));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getSubCategory = (id) => {
    getSubCategoryByCategoryId(id)
      .then((res) => {
        if (res.status) {
          // console.log('getSubCategoryByCategoryId => ' + JSON.stringify(res));
          setSubCategories(res.data);
        } else {
          console.log('getSubCategoryByCategoryId => ' + JSON.stringify(res));
          setSubCategories([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getTypes = () => {
    getServiceType()
      .then((res) => {
        if (res.status) {
          console.log('getServiceType => ' + JSON.stringify(res));
          setServiceTypes(res.data);
        } else {
          console.log('getServiceType => ' + JSON.stringify(res));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubCategories = (id) => {
    const tempSelectedSubCategories = [...selectedSubCategories];
    const i = tempSelectedSubCategories.indexOf(id);
    console.log(i);
    if (i == -1) {
      tempSelectedSubCategories.push(id);
    } else {
      tempSelectedSubCategories.splice(i, 1);
    }
    console.log(tempSelectedSubCategories);
    setSelectedSubCategories(tempSelectedSubCategories);
  };
  const handleServiceTypes = (id) => {
    const tempSelectedServiceTypes = [...selectedServiceTypes];
    const i = tempSelectedServiceTypes.indexOf(id);
    console.log(i);
    if (i == -1) {
      tempSelectedServiceTypes.push(id);
    } else {
      tempSelectedServiceTypes.splice(i, 1);
    }

    setSelectedServiceTypes(tempSelectedServiceTypes);
    serviceTypesId.push(id);
    console.log('selected service type => ' + serviceTypesId);
  };

  const handleSubmit = () => {
    // userChoice();
    if (
      selectedCategory != 0 &&
      selectedSubCategories != 0 &&
      serviceTypesId.length > 0
    ) {
      props.navigation.navigate(Screens.SERVICE_FORM, {
        selectedCategory: selectedCategory,
        selectedSubCategories: selectedSubCategories,
        selectedServiceTypes: serviceTypesId,
      });
    } else {
      if (selectedCategory == 0) {
        Toast.showWithGravity(
          'Please select category',
          Toast.SHORT,
          Toast.BOTTOM,
        );
      } else if (selectedSubCategories == 0) {
        Toast.showWithGravity(
          'Please select sub category',
          Toast.SHORT,
          Toast.BOTTOM,
        );
      } else if (serviceTypesId.length == 0) {
        Toast.showWithGravity(
          'Please select one or more service types',
          Toast.SHORT,
          Toast.BOTTOM,
        );
      } else {
        Toast.showWithGravity(
          'Please select category & sub category',
          Toast.SHORT,
          Toast.BOTTOM,
        );
      }
    }
  };

  const [userCategory, setUserCategory] = useState('');
  const [userSubCategory, setUserSubCategory] = useState('');
  const [userServiceTypes, setUserServiceTypes] = useState([]);

  const userChoice = () => {
    categories.forEach((e) => {
      if (e.id == selectedCategory) {
        setUserCategory(e.name);
        // console.log('categories => ' + e.name);
      }
    });
    subCategories.forEach((e) => {
      if (e.id == selectedSubCategories) {
        setUserSubCategory(e.name);
        // console.log('sub categoreis => ' + e.title);
      }
    });
    serviceTypes.forEach((e) => {
      if (selectedServiceTypes.indexOf(e.id) != -1) {
        selectedSer.push(e.title);
        // console.log('service types => ' + e.title);
      }
    });
    // setUserServiceTypes(selectedSer);
  };

  const selectedCatId = (id) => {
    console.log('selected Id => ' + id);
    setSelectedCategory(id);
    getSubCategory(id);
  };

  const selectedSubCatId = (id) => {
    console.log('selected sub cat => ' + id);
    setSelectedSubCategories(id);
    getTypes();
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.mainContainer}>
        <Text style={styles.headText}>Chosen Categories</Text>
        <ScrollView>
          {
            <FlatList
              contentContainerStyle={{alignItems: 'flex-start'}}
              numColumns={2}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => selectedCatId(item.id)}
                    key={item.id}
                    style={[
                      styles.container,
                      {
                        backgroundColor:
                          item.id == selectedCategory
                            ? color.PRIMARY
                            : color.WHITE,
                      },
                    ]}>
                    <HView style={{backgroundColor: 'transparent'}}>
                      {false && (
                        <Icon
                          color={
                            item.id == selectedCategory
                              ? color.WHITE
                              : Colors.text
                          }
                          style={styles.icon}
                          size={25}
                          name={item.iconName}></Icon>
                      )}
                      <Text
                        style={[
                          styles.text,
                          {
                            color:
                              item.id == selectedCategory
                                ? color.WHITE
                                : Colors.text,
                          },
                        ]}>
                        {item.name}
                      </Text>
                    </HView>
                  </TouchableOpacity>
                );
              }}
              data={categories}></FlatList>
          }
        </ScrollView>
        <TextBetweenLine />
        <Text style={styles.headText}>Sub Categories</Text>
        <ScrollView>
          {
            <FlatList
              contentContainerStyle={{alignItems: 'flex-start'}}
              numColumns={2}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => selectedSubCatId(item.id)}
                    key={item.id}
                    style={[
                      styles.container,
                      {
                        backgroundColor:
                          item.id == selectedSubCategories
                            ? color.PRIMARY
                            : color.WHITE,
                      },
                    ]}>
                    <HView style={{backgroundColor: 'transparent'}}>
                      {false && (
                        <Icon
                          color={
                            item.id == selectedSubCategories
                              ? color.WHITE
                              : Colors.text
                          }
                          style={styles.icon}
                          size={25}
                          name={item.iconName}></Icon>
                      )}
                      <Text
                        style={[
                          styles.text,
                          {
                            color:
                              item.id == selectedSubCategories
                                ? color.WHITE
                                : Colors.text,
                          },
                        ]}>
                        {item.name}
                      </Text>
                    </HView>
                  </TouchableOpacity>
                );
              }}
              data={subCategories}></FlatList>
          }
        </ScrollView>
        <TextBetweenLine />
        <Text style={styles.headText}>Service Types</Text>
        <ScrollView>
          {
            <FlatList
              contentContainerStyle={{alignItems: 'flex-start'}}
              numColumns={2}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => handleServiceTypes(item.id)}
                    key={item.id}
                    style={[
                      styles.container,
                      {
                        backgroundColor:
                          selectedServiceTypes.indexOf(item.id) != -1
                            ? color.PRIMARY
                            : color.WHITE,
                      },
                    ]}>
                    <HView style={{backgroundColor: 'transparent'}}>
                      {false && (
                        <Icon
                          color={
                            selectedServiceTypes.indexOf(item.id) != -1
                              ? color.WHITE
                              : Colors.text
                          }
                          style={styles.icon}
                          size={25}
                          name={item.iconName}></Icon>
                      )}
                      <Text
                        style={[
                          styles.text,
                          {
                            color:
                              selectedServiceTypes.indexOf(item.id) != -1
                                ? color.WHITE
                                : Colors.text,
                          },
                        ]}>
                        {item.name}
                      </Text>
                    </HView>
                  </TouchableOpacity>
                );
              }}
              data={serviceTypes}></FlatList>
          }
        </ScrollView>
        <Button
          containerStyle={[styles.buttonContainer, {marginTop: H(50)}]}
          onPress={handleSubmit}
          titleStyle={styles.buttonTitle}
          title="Save & Continue"></Button>
      </View>
    </SafeAreaView>
  );
};
export default ServiceType;
