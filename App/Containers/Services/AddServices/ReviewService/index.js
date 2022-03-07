import React, {useEffect, useState} from 'react';
import {Card} from 'react-native-elements';
import HView from '../../../../Components/HView';
import {
  View,
  SafeAreaView,
  ScrollView,
} from '../../../../Components/StyledComponents';
import TextBetweenLine from '../../../../Components/TextBetweenLine';
import Text from '../../../../Components/TextI';
import VariationCard from '../../../../Components/VariationCard';
import {H} from '../../../../utils/DimensionCalculator';
import styles from './style';
import {BackHandler} from 'react-native';
import {Button} from 'react-native-elements/dist/buttons/Button';
import {withTranslation} from 'react-i18next';
import {Screens} from '../../../../Constants/constant';
import {useIsFocused} from '@react-navigation/native';
import {getCompleteService} from '../../../../api/ApiManager';

const ReviewService = ({t, ...props}) => {
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
  const [outerScrollEnabled, setOuterScrollEnabled] = useState(true);
  const [fromReview, setFromReview] = useState(false);
  const [serviceId, setServiceId] = useState(props?.route.params.serviceId);
  const isFocused = useIsFocused();

  const [data, setData] = useState([]);
  useEffect(() => {
    getCompleteServiceByServiceId();
  }, [isFocused]);

  // const initData = () => {
  //   if (props?.route.params.reviewData) {
  //     setFromReview(true);
  //     setData(props?.route.params.reviewData);
  //     console.log(
  //       'Review screen 1 => ' + JSON.stringify(props.route.params.reviewData),
  //     );
  //   } else if (props?.route.params.dataForReview) {
  //     setFromReview(false);
  //     console.log(
  //       'Review screen 2 => ' +
  //         JSON.stringify(props.route.params.dataForReview),
  //     );
  //     setData([props?.route.params.dataForReview]);
  //   }
  // };

  const getCompleteServiceByServiceId = () => {
    getCompleteService(serviceId)
      .then((res) => {
        if (res.status) {
          // console.log(JSON.stringify(res));
          setData(res.data);
        } else {
          console.log(JSON.stringify(res));
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.mainContainer}>
        <ScrollView>
          <Card containerStyle={styles.cardContainerStyle}>
            <Text style={styles.headText}>
              {!props.route.params.viewed
                ? `Review Your Service Listing`
                : `View Your Service Listing`}
            </Text>
            <TextBetweenLine />
            <View style={{marginTop: H(20)}}>
              <HView style={styles.row}>
                <Text style={styles.subHeadText}>{'Service Name'}</Text>
                {
                  <Text style={styles.valueText}>
                    {data[0]?.primaryServiceName}
                  </Text>
                }
              </HView>
              <HView style={styles.row}>
                <Text style={styles.subHeadText}>{'Service Category'}</Text>
                {
                  <Text style={styles.valueText}>
                    {data[0]?.category?.name}
                  </Text>
                }
              </HView>
              <HView style={styles.row}>
                <Text style={styles.subHeadText}>{'Service Sub Category'}</Text>
                {
                  <Text style={styles.valueText}>
                    {data[0]?.subcategory?.name}
                  </Text>
                }
              </HView>
              <HView style={styles.row}>
                <Text style={styles.subHeadText}>{'Service Type'}</Text>
                <HView style={{flex: 1, paddingStart: 8}}>
                  {data[0]?.ServiceTypeRelations.slice(0, 2).map((it, i) => {
                    return (
                      <Text numberOfLines={1} key={i} style={{paddingEnd: 2}}>
                        {it?.ServiceType?.name}
                      </Text>
                    );
                  })}
                  {data[0]?.ServiceTypeRelations.length > 2 && (
                    <Text>....</Text>
                  )}
                </HView>
              </HView>
              <HView style={styles.row}>
                <Text style={styles.subHeadText}>{'Service Duration'}</Text>
                {
                  <HView style={{flex: 1}}>
                    {data[0]?.Variations[0]?.VariationProperties?.map(
                      (it, i) => {
                        return (
                          <HView key={i} style={{paddingStart: 8}}>
                            <Text style={{paddingEnd: 2}}>{it.value}</Text>
                            <Text style={{paddingEnd: 4}}>{it.key}</Text>
                          </HView>
                        );
                      },
                    )}
                  </HView>
                }
              </HView>
              <HView style={styles.row}>
                <Text style={styles.subHeadText}>{'Allowed To Book Time'}</Text>
                {
                  <Text style={styles.valueText}>
                    {data[0]?.allowTimeToBookInMinutes}
                  </Text>
                }
              </HView>
              <HView style={styles.row}>
                <Text style={styles.subHeadText}>{'Description'}</Text>
                <Text style={styles.valueText}>
                  {data[0]?.primaryLanguageDesc}
                </Text>
              </HView>
            </View>
          </Card>
          <ScrollView
            horizontal
            scrollEnabled={outerScrollEnabled}
            showsHorizontalScrollIndicator={false}>
            {data[0]?.Variations.map((it, index) => {
              return (
                <VariationCard
                  key={index}
                  item={it}
                  length={0}
                  navigation={props.navigation}
                  screen="REVIEW SERVICE"
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
          {!props.route.params.viewed && (
            <Button
              buttonStyle={styles.buttonStyle}
              title={t('Confirm & Save')}
              onPress={() => props.navigation.navigate(Screens.SERVICES)}
              titleStyle={styles.buttonTitle}
              containerStyle={[styles.buttonContainer]}></Button>
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default withTranslation()(ReviewService);
