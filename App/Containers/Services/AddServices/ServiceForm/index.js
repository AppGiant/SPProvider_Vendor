import { Formik } from 'formik';
import React, { useState, useEffect } from 'react';
import { Card } from 'react-native-elements';
import {
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
} from '../../../../Components/StyledComponents';
import Text from '../../../../Components/TextI';
import InputComponent from '../../../../Components/InputComponent';
import TextBetweenLine from '../../../../Components/TextBetweenLine';
import styles from './style';
import HView from '../../../../Components/HView';
import DropDownPicker from '../../../../Components/DropDownPicker';
import { H, W } from '../../../../utils/DimensionCalculator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-elements/dist/buttons/Button';
import color from '../../../../Constants/color';
import colors from '../../../../Themes/Colors';
import TouchableIcon from '../../../../Components/TouchableIcon';
import { Screens } from '../../../../Constants/constant';
import ImagePicker from 'react-native-image-crop-picker';
import { ImageBackground, Linking } from 'react-native';
import { check, request } from '../../../../utils/PermissionCheck';
import { BackHandler } from 'react-native';
import { StackActions } from '@react-navigation/native';
import {
  addServices,
  editServices,
  getCompleteService,
  getSiteLanguages,
} from '../../../../api/ApiManager';
import { useFocusEffect } from '@react-navigation/native';
import Toast from 'react-native-simple-toast';
import VariationCard from '../../../../Components/VariationCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

const ServiceForm = (props) => {
  const popAction = StackActions.pop(1);
  const [serviceId, setServiceId] = useState(props?.route.params.serviceId);
  const [storeId, setStoreId] = useState();
  const isFocused = useIsFocused();
  const [completeService, setCompleteService] = useState(
    props?.route.params.completeService
      ? props?.route.params.completeService
      : 0,
  );
  const [categoryId, setCategoryId] = useState(
    props?.route.params.selectedCategory,
  );
  const [subCategoryId, setSubCategoryId] = useState(
    props?.route.params.selectedSubCategories,
  );
  const [serviceType, setServiceType] = useState(
    props?.route.params.selectedServiceTypes,
  );
  const [isEdit, setIsEdit] = useState(false);
  const [serviceTypeIds, setServiceTypeIds] = useState([]);
  const [currency, setCurrency] = useState('');

  useEffect(() => {
    getStoredId();
    getServiceTypes();
    getCompleteServiceByServiceId();
    setServiceTypeIds([]);
  }, [isFocused]);

  const getServiceTypes = () => {
    // completeService[0]?.ServiceTypeRelations.forEach((e) => {
    //   serviceType.push(e.serviceTypeId);
    // });
  };

  const getStoredId = () => {
    AsyncStorage.getItem('storeData')
      .then((res) => {
        if (res) {
          let res1 = JSON.parse(res);
          setStoreId(res1?.StoreData?.store?.id);
          setCurrency(res1.StoreData?.store?.StoreAddSetting?.Currency?.name);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCompleteServiceByServiceId = () => {
    let serviceIds = [];
    console.log('serviceId getCompleteService => ' + serviceId);
    getCompleteService(serviceId)
      .then((res) => {
        if (res.status) {
          // console.log('getCompleteService => ' + JSON.stringify(res));
          setCompleteService(res.data);
          console.log(res.data[0]);
          setValuePrimaryLanguageDropDown(res.data[0].primaryLanguageId);
          setValueSecondaryLanguageDropDown(res.data[0].secondaryLanguageId);
          setValueAllowedBookTimeDropDown(res.data[0].allowTimeToBookInMinutes >= 60 ? 'hr' : 'min');
          setIsEdit(true);
          res?.data[0]?.ServiceTypeRelations.forEach((e) => {
            serviceIds.push(e.serviceTypeId);
            // console.log('getCompleteService => ' + JSON.stringify(e));
          });
          setServiceTypeIds([...new Set(serviceIds)]);
          serviceIds = [];
        } else {
          console.log('getCompleteService => ' + JSON.stringify(res));
          setIsEdit(false);
          setServiceTypeIds([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDeleteVariation = () => {
    getCompleteServiceByServiceId();
  };

  const checkDurationValidation = () => {
    let isHourError = false, isMinuteError = false;
    variations.forEach(variation => {
      if (variation.properties[0].errorMessage) {
        isHourError = true;
      } else if (variation.properties[1].errorMessage) {
        isMinuteError = true;
      }
    });
    if (isHourError) {
      Toast.showWithGravity("Please enter the valid input for Hours", Toast.SHORT, Toast.BOTTOM);
      return false;
    } else if (isMinuteError) {
      Toast.showWithGravity("Please enter the valid input for Minutes", Toast.SHORT, Toast.BOTTOM);
      return false;
    }
    return true;
  };

  const addStoreService = () => {
    // console.log('variations => ' + JSON.stringify(variations));

    const dataForReview = {
      storeId: storeId,
      categoryId: categoryId,
      subcategoryId: subCategoryId,
      servicetype: serviceType,
      parent: 0,
      primaryLanguageId: valuePrimaryLanguageDropDown,
      secondaryLanguageId: valueSecondaryLanguageDropDown,
      primaryServiceName: priServiceName,
      secondaryServiceName: secServiceName,
      primaryLanguageDesc: priDesc,
      secondaryLanguageDesc: secDesc,
      allowTimeToBookInMinutes: 45,
      display: 1,
      active: 1,
      variations: variations,
    };

    if (priServiceName == '') {
      Toast.showWithGravity(
        'Please enter primary service name',
        Toast.SHORT,
        Toast.BOTTOM,
      );
    } else if (secServiceName == '') {
      Toast.showWithGravity(
        'Please enter secondary service name',
        Toast.SHORT,
        Toast.BOTTOM,
      );
    } else if (priDesc == '') {
      Toast.showWithGravity(
        'Please enter primary description name',
        Toast.SHORT,
        Toast.BOTTOM,
      );
    } else if (secDesc == '') {
      Toast.showWithGravity(
        'Please enter secondary description name',
        Toast.SHORT,
        Toast.BOTTOM,
      );
    } else if (allowedBookTime == '') {
      Toast.showWithGravity(
        'Please enter allowed book time',
        Toast.SHORT,
        Toast.BOTTOM,
      );
    } else if (checkDurationValidation()) {
      console.log('add service');
      const tempVariations = [...variations];
      tempVariations.forEach(variation => {
        delete variation.properties[0].errorMessage;
        delete variation.properties[1].errorMessage;
      });
      addServices({
        storeId: storeId,
        categoryId: categoryId,
        subcategoryId: subCategoryId,
        servicetype: serviceType,
        parent: 0,
        primaryLanguageId: valuePrimaryLanguageDropDown,
        secondaryLanguageId: valueSecondaryLanguageDropDown,
        primaryServiceName: priServiceName,
        secondaryServiceName: secServiceName,
        primaryLanguageDesc: priDesc,
        secondaryLanguageDesc: secDesc,
        allowTimeToBookInMinutes: valueAllowedBookTimeDropDown == 'hr' ? allowedBookTime * 60 : allowedBookTime,
        display: 1,
        active: 1,
        variations: tempVariations,
      })
        .then((res) => {
          if (res.status) {
            console.log('add service => ' + JSON.stringify(res));
            props.navigation.navigate(Screens.REVIEW_SERVICE_EDIT, {
              serviceId: res.id,
            });
            setServiceId(res.id);
            // props.navigation.navigate(Screens.SERVICES);
          } else {
            Toast.showWithGravity(res.message, Toast.SHORT, Toast.BOTTOM);
            console.log('add service => ' + JSON.stringify(res));
          }
        })
        .catch((err) => {
          console.log('err in addService => ' + err);
        });
    }
  };

  const editServiceById = () => {
    console.log({
      storeId: storeId,
      categoryId: completeService[0].categoryId,
      subcategoryId: completeService[0].subcategoryId,
      servicetype: serviceTypeIds,
      parent: 0,
      primaryLanguageId: valuePrimaryLanguageDropDown,
      secondaryLanguageId: valueSecondaryLanguageDropDown,
      primaryServiceName: priServiceName,
      secondaryServiceName: secServiceName,
      primaryLanguageDesc: priDesc,
      secondaryLanguageDesc: secDesc,
      allowTimeToBookInMinutes: valueAllowedBookTimeDropDown == 'hr' ? allowedBookTime * 60 : allowedBookTime,
      display: 1,
      active: 1,
    });

    if (priServiceName == '') {
      Toast.showWithGravity(
        'Please enter primary service name',
        Toast.SHORT,
        Toast.BOTTOM,
      );
    } else if (secServiceName == '') {
      Toast.showWithGravity(
        'Please enter secondary service name',
        Toast.SHORT,
        Toast.BOTTOM,
      );
    } else if (priDesc == '') {
      Toast.showWithGravity(
        'Please enter primary description name',
        Toast.SHORT,
        Toast.BOTTOM,
      );
    } else if (secDesc == '') {
      Toast.showWithGravity(
        'Please enter secondary description name',
        Toast.SHORT,
        Toast.BOTTOM,
      );
    } else if (allowedBookTime == '') {
      Toast.showWithGravity(
        'Please enter allowed book time',
        Toast.SHORT,
        Toast.BOTTOM,
      );
    } else if (checkDurationValidation()) {
      console.log('edit service');
      const tempVariations = [...variations];
      tempVariations.forEach(variation => {
        delete variation.properties[0].errorMessage;
        delete variation.properties[1].errorMessage;
      });

      editServices(serviceId, {
        storeId: storeId,
        categoryId: completeService[0].categoryId,
        subcategoryId: completeService[0].subcategoryId,
        servicetype: serviceTypeIds,
        parent: 0,
        primaryLanguageId: valuePrimaryLanguageDropDown,
        secondaryLanguageId: valueSecondaryLanguageDropDown,
        primaryServiceName: priServiceName,
        secondaryServiceName: secServiceName,
        primaryLanguageDesc: priDesc,
        secondaryLanguageDesc: secDesc,
        allowTimeToBookInMinutes: valueAllowedBookTimeDropDown == 'hr' ? allowedBookTime * 60 : allowedBookTime,
        display: 1,
        active: 1,
      })
        .then((res) => {
          if (res.status) {
            // console.log('editServices => ' + JSON.stringify(res));
            Toast.showWithGravity(res.message, Toast.SHORT, Toast.BOTTOM);
            props.navigation.navigate(Screens.REVIEW_SERVICE_EDIT, {
              serviceId: serviceId,
            });
          } else {
            console.log('editServices => ' + JSON.stringify(res));
            Toast.showWithGravity(res.message, Toast.SHORT, Toast.BOTTOM);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handler = () => {
    props.navigation.goBack();
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
  const [priServiceName, setPriServiceName] = useState(
    completeService && completeService[0]?.primaryServiceName
      ? completeService[0]?.primaryServiceName
      : '',
  );
  const [secServiceName, setSecServiceName] = useState(
    completeService && completeService[0]?.secondaryServiceName
      ? completeService[0]?.secondaryServiceName
      : '',
  );
  const [priDesc, setPriDesc] = useState(
    completeService && completeService[0]?.primaryLanguageDesc
      ? completeService[0]?.primaryLanguageDesc
      : '',
  );
  const [secDesc, setSecDesc] = useState(
    completeService && completeService[0]?.secondaryLanguageDesc
      ? completeService[0]?.secondaryLanguageDesc
      : '',
  );
  const [allowedBookTime, setAllowedBookTime] = useState(
    completeService && completeService[0]&& String(completeService[0].allowTimeToBookInMinutes>=60?Math.floor(completeService[0].allowTimeToBookInMinutes/60):completeService[0].allowTimeToBookInMinutes)
  );
  const [priLangVarName, setPriLangVarName] = useState('');
  const [secLangVarName, setSecLangVarName] = useState('');
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState('');
  const [price, setPrice] = useState('');

  const [openPrimaryLanguageDropDown, setOpenPrimaryLanguageDropDown] =
    useState(false);
  const [valuePrimaryLanguageDropDown, setValuePrimaryLanguageDropDown] =
    useState(1);
  const [itemsPrimaryLanguageDropDown, setItemsPrimaryLanguageDropDown] = useState([]);
  const [openSecondaryLanguageDropDown, setOpenSecondaryLanguageDropDown] =
    useState(false);
  const [valueSecondaryLanguageDropDown, setValueSecondaryLanguageDropDown] =
    useState(1);
  const [itemsSecondaryLanguageDropDown, setItemsSecondaryLanguageDropDown] = useState([]);
  const [openAllowedBookTimeDropDown, setOpenAllowedBookTimeDropDown] =
    useState(false);
  const [valueAllowedBookTimeDropDown, setValueAllowedBookTimeDropDown] =
    useState(1);
  const [itemsAllowedBookTimeDropDown, setItemsAllowedBookTimeDropDown] =
    useState([
      { label: 'Minutes', value: 'min', key: 1 },
      { label: 'Hours', value: 'hr', key: 2 },
      // {label: 'Days', value: 'day', key: 3},
      // {label: 'Weeks', value: 'week', key: 4},
      // {label: 'Months', value: 'month', key: 5},
    ]);
  const [openServiceTypeDropDown, setOpenServiceTypeDropDown] = useState(false);
  const [valueServiceTypeDropDown, setValueServiceTypeDropDown] = useState([]);
  const [itemsServiceTypeDropDown, setItemsServiceTypeDropDown] = useState([
    { label: 'In Store', value: 'inStore', key: 1 },
    { label: 'Pick up', value: 'pickup', key: 2 },
  ]);

  const [variations, setVariations] = useState([
    {
      price: '',
      primaryLanguageVariationName: '',
      secondaryLanguageVariationName: '',
      properties: [
        { key: 'Hours', value: '', errorMessage: '' },
        { key: 'Minutes', value: '', errorMessage: '' },
      ],

      // images: [],
    },
  ]);

  useEffect(() => {
    getLanguageList();
  }, []);

  const getLanguageList = () => {
    getSiteLanguages().then(res => {
      if (res.status) {
        let data = res.data.map(item => {
          return {
            label: item.name,
            value: item.id,
            key: item.id
          };
        });
        setItemsPrimaryLanguageDropDown(data);
        setItemsSecondaryLanguageDropDown(data);
      }
    }).catch(error => {
      console.log(error);
    })
  };

  const addVariation = () => {
    console.log(variations);
    const tempVariations = [...variations];
    tempVariations.push({
      price: '',
      primaryLanguageVariationName: '',
      secondaryLanguageVariationName: '',
      properties: [
        { key: 'Hours', value: '', errorMessage: '' },
        { key: 'Minutes', value: '', errorMessage: '' },
      ],

      // images: [],
    });
    setVariations(tempVariations);
    // fromApiVariations.push(tempApiVariations);
  };
  const removeVariation = (index) => {
    const tempVariations = [...variations];
    tempVariations.splice(index, 1);
    setVariations(tempVariations);
  };
  const removeImage = (index, ind) => {
    const tempVariations = [...variations];
    const tempImages = tempVariations[index].images;
    tempImages.splice(ind, 1);
    tempVariations[index].images = tempImages;
    setVariations(tempVariations);
  };
  const openPicker = (index) => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      multiple: true,
      includeBase64: true,
    })
      .then((image) => {
        const tempVariations = [...variations];
        image.map((it) => {
          tempVariations[index].images.push({ data: it.data });
        });
        setVariations(tempVariations);
        //alert(JSON.stringify(image.path));
        //alert("DONEEE")
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleLibraryPermission = async (index) => {
    const res = await check('READ_STORAGE');
    //console.log(res)
    if (res == 4 || res == 3) {
      console.log('GRANTED');
      openPicker(index);
    } else if (res == 2) {
      const res1 = request('READ_STORAGE');
      if (res1) {
        openPicker(index);
      }
    }
  };

  const VariationImageUploadComponent = ({ index }) => {
    return (
      <View>
        {/* <Text style={styles.headText}>Product Images</Text>
        <Text>
          Supported file formats are JPEG, JPG,PNG, GIF. Product images are
          usually 200 * 200 with file size upto 5MB
        </Text>
        <ScrollView horizontal style={styles.variationsImageContainer}>
          {variations &&
            variations[index] &&
            variations[index].images &&
            variations[index].images.map((it, ind) => {
              return (
                <ImageBackground
                  key={ind}
                  style={styles.variationImage}
                  source={{
                    uri: `data:image/png;base64,${it.data}`,
                  }}>
                  <TouchableIcon
                    style={{
                      alignSelf: 'flex-end',
                      backgroundColor: 'transparent',
                    }}
                    onPress={() => removeImage(index, ind)}>
                    <Icon color={colors.error} size={20} name="close-circle" />
                  </TouchableIcon>
                </ImageBackground>
              );
            })}
        </ScrollView>

        <TouchableOpacity
          onPress={() => handleLibraryPermission(index)}
          style={styles.addImageView}>
          <Icon size={18} color={color.BORDER} name="plus"></Icon>
        </TouchableOpacity> */}
      </View>
    );
  };
  const getServiceTypeText = () => {
    let txt = '';
    let len = valueServiceTypeDropDown.length;
    valueServiceTypeDropDown.map((it, i) => {
      txt += it;
      if (i != len - 1) txt += ', ';
    });

    return txt;
  };

  const [outerScrollEnabled, setOuterScrollEnabled] = useState(true);
  const handleVariationPrimaryLanguageName = (index, value) => {
    const tempVariations = [...variations];
    tempVariations[index].primaryLanguageVariationName = value;
    setVariations(tempVariations);
  };
  const handleVariationSecondaryLanguageName = (index, value) => {
    const tempVariations = [...variations];
    tempVariations[index].secondaryLanguageVariationName = value;
    setVariations(tempVariations);
  };
  const handleVariationPrice = (index, value) => {
    const tempVariations = [...variations];
    tempVariations[index].price = value;
    setVariations(tempVariations);
  };
  const handleVariationHours = (index, value) => {
    console.log('Hours value => ' + value);
    const tempVariations = [...variations];
    (tempVariations[index].properties[0] = { key: 'Hours', value: value, errorMessage: getValidationMessage(value, 'Hours') }),
      setVariations(tempVariations);
  };
  const handleVariationMinutes = (index, value) => {
    console.log('Minutes value => ' + value);
    const tempVariations = [...variations];
    (tempVariations[index].properties[1] = { key: 'Minutes', value: value, errorMessage: getValidationMessage(value, 'Minutes') }),
      setVariations(tempVariations);
  };
  const ValidationSchema = {
    Hours: function (value) {
      if (value < 0 || value > 59) {
        return "Invalid data";
      }
    },
    Minutes: function (value) {
      if (value < 1 || value > 59) {
        return "Invalid data";
      }
    }
  };
  const getValidationMessage = (value, key) => {
    return ValidationSchema[key](value) || "";
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.mainContainer}>
        <ScrollView>
          <View style={styles.cardsContainer}>
            <Card containerStyle={styles.cardContainerStyle}>
              <Text style={styles.headText}>Service Details</Text>
              <TextBetweenLine />
              <Text style={styles.subHeadText}>Primary Language</Text>
              <DropDownPicker
                open={openPrimaryLanguageDropDown}
                value={valuePrimaryLanguageDropDown}
                items={itemsPrimaryLanguageDropDown}
                setOpen={setOpenPrimaryLanguageDropDown}
                setValue={setValuePrimaryLanguageDropDown}
                setItems={setItemsPrimaryLanguageDropDown}
              />
              <InputComponent
                label="Primary Language Service Name"
                value={priServiceName}
                onChangeText={(value) => setPriServiceName(value)}
              />
              <InputComponent
                label="Primary Language Description"
                value={priDesc}
                onChangeText={(value) => setPriDesc(value)}
              />
            </Card>

            <Card containerStyle={styles.cardContainerStyle}>
              <Text style={styles.subHeadText}>Secondary Language</Text>
              <DropDownPicker
                open={openSecondaryLanguageDropDown}
                value={valueSecondaryLanguageDropDown}
                items={itemsSecondaryLanguageDropDown}
                setOpen={setOpenSecondaryLanguageDropDown}
                setValue={setValueSecondaryLanguageDropDown}
                setItems={setItemsSecondaryLanguageDropDown}
              />
              <InputComponent
                label="Secondary Language Service Name"
                value={secServiceName}
                onChangeText={(value) => setSecServiceName(value)}
              />
              <InputComponent
                label="Secondary Language Description"
                value={secDesc}
                onChangeText={(value) => setSecDesc(value)}
              />
            </Card>

            <Card containerStyle={styles.cardContainerStyle}>
              <HView style={styles.varContainer}>
                <Text style={styles.headText}>Service Variations</Text>
                {completeService.length > 0 ? (
                  <TouchableOpacity
                    onPress={() =>
                      props.navigation.navigate(Screens.ADD_VARIATIONS, {
                        serviceId: serviceId,
                      })
                    }>
                    <Text style={styles.addText}>Add Variations</Text>
                  </TouchableOpacity>
                ) : null}
              </HView>
              <TextBetweenLine />
              {completeService.length > 0 ? (
                <ScrollView
                  horizontal
                  scrollEnabled={outerScrollEnabled}
                  showsHorizontalScrollIndicator={false}>
                  {completeService[0]?.Variations.map((it, index) => {
                    // console.log('completeService => ' + JSON.stringify(it));
                    return (
                      <VariationCard
                        key={index}
                        item={it}
                        length={completeService[0]?.Variations.length}
                        onDeleteVariation={onDeleteVariation}
                        screen={'SERVICE FORM'}
                        navigation={props.navigation}
                        handleInnerPressOut={() => {
                          setOuterScrollEnabled(true);
                        }}
                        handleInnerPressIn={() => {
                          setOuterScrollEnabled(false);
                        }}
                      />
                    );
                  })}
                </ScrollView>
              ) : (
                variations.map((it, index) => (
                  <View key={index}>
                    {index != 0 && (
                      <TouchableIcon
                        style={{ alignSelf: 'flex-end' }}
                        onPress={() => removeVariation(index)}>
                        <Icon
                          color={colors.error}
                          size={20}
                          name="close-circle"
                        />
                      </TouchableIcon>
                    )}
                    <InputComponent
                      label="Primary Language Variation Name"
                      onChangeText={(value) =>
                        handleVariationPrimaryLanguageName(index, value)
                      }
                    />
                    <InputComponent
                      label="Secondary Language Variation Name"
                      onChangeText={(value) =>
                        handleVariationSecondaryLanguageName(index, value)
                      }
                    />
                    <HView style={{ flexWrap: 'wrap' }}>
                      <InputComponent
                        label="Hours"
                        keyboardType="numeric"
                        onChangeText={(value) =>
                          handleVariationHours(index, value)
                        }
                        containerStyle={{ width: W(150), marginEnd: W(38) }}
                        errorMessage={it.properties[0].errorMessage}
                      />

                      <InputComponent
                        label="Minutes"
                        keyboardType="numeric"
                        onChangeText={(value) =>
                          handleVariationMinutes(index, value)
                        }
                        containerStyle={{ width: W(150) }}
                        errorMessage={it.properties[1].errorMessage}
                      />
                    </HView>
                    <InputComponent
                      leftIcon={<Text>{currency}</Text>}
                      label="Price"
                      onChangeText={(value) =>
                        handleVariationPrice(index, value)
                      }
                      keyboardType="numeric"
                      containerStyle={{ width: W(160) }}
                    />
                    {index != 0 && (
                      <VariationImageUploadComponent index={index} />
                    )}
                  </View>
                ))
              )}
              {!completeService.length > 0 && (
                <Button
                  onPress={addVariation}
                  titleStyle={styles.buttonTitle}
                  containerStyle={styles.buttonContainer}
                  title="Add Variation"></Button>
              )}
            </Card>
            <Card containerStyle={styles.cardContainerStyle}>
              <Text style={styles.subHeadText}>Allowed to Book Time</Text>
              <HView>
                <InputComponent
                  keyboardType="numeric"
                  style={{ marginRight: 10 }}
                  value={allowedBookTime}
                  onChangeText={(value) => setAllowedBookTime(value)}
                  containerStyle={{ width: W(120) }}
                />
                <DropDownPicker
                  placeholder="Select an unit"
                  style={styles.unitDropdown}
                  open={openAllowedBookTimeDropDown}
                  value={valueAllowedBookTimeDropDown}
                  items={itemsAllowedBookTimeDropDown}
                  setOpen={setOpenAllowedBookTimeDropDown}
                  setValue={setValueAllowedBookTimeDropDown}
                  setItems={setItemsAllowedBookTimeDropDown}
                  containerStyle={styles.allowedDropDownStyle}
                />
                <View style={openAllowedBookTimeDropDown ? { margin: 60 } : {}} />
              </HView>

            </Card>
            {/* <Card containerStyle={[styles.cardContainerStyle, {zIndex: 4000}]}>
              <Text>Allowed to Book Time</Text>
              <HView
                style={{
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <InputComponent
                  keyboardType="numeric"
                  value={allowedBookTime}
                  onChangeText={(value) => setAllowedBookTime(value)}
                  containerStyle={{width: W(150), marginEnd: W(10)}}
                />
                <View style={styles.allowedDropDownStyle}>
                  <DropDownPicker
                    placeholder="Select an unit"
                    style={styles.unitDropdown}
                    open={openAllowedBookTimeDropDown}
                    value={valueAllowedBookTimeDropDown}
                    items={itemsAllowedBookTimeDropDown}
                    setOpen={setOpenAllowedBookTimeDropDown}
                    setValue={setValueAllowedBookTimeDropDown}
                    setItems={setItemsAllowedBookTimeDropDown}
                    containerStyle={{width: W(160)}}
                  />
                </View>
              </HView>
            </Card> */}
            {/* <Card containerStyle={[styles.cardContainerStyle, {zIndex: 2000}]}>
              <Text style={styles.subHeadText}>Service Types</Text>
              <DropDownPicker
                open={openServiceTypeDropDown}
                value={valueServiceTypeDropDown}
                items={itemsServiceTypeDropDown}
                setOpen={setOpenServiceTypeDropDown}
                setValue={setValueServiceTypeDropDown}
                setItems={setItemsServiceTypeDropDown}
                multiple
                multipleText={getServiceTypeText()}
              />
            </Card> */}
            {/* <Card containerStyle={[styles.cardContainerStyle, {zIndex: 10}]}>
              <VariationImageUploadComponent index={0} />
            </Card> */}
          </View>

          <Button
            // onPress={addVariation}
            titleStyle={styles.buttonTitle}
            containerStyle={styles.buttonContainer}
            title="Back To Categories"
            onPress={() => props.navigation.dispatch(popAction)}></Button>
          <Button
            onPress={() => (isEdit ? editServiceById() : addStoreService())}
            titleStyle={styles.buttonTitlePrimary}
            containerStyle={styles.buttonContainerPrimary}
            title="Save & Continue"></Button>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default ServiceForm;
