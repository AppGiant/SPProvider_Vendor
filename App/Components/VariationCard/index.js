import React, {useEffect, useState} from 'react';
import {Text, Alert} from 'react-native';
import {Card} from 'react-native-elements';
import HView from '../HView';
import styles from './style';
import {ScrollView, View} from '../StyledComponents';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../Themes';
import {Screens} from '../../Constants/constant';
import {useIsFocused} from '@react-navigation/native';
import {deleteVariation} from '../../api/ApiManager';

const VariationCard = ({
  item,
  screen,
  handleInnerPressIn,
  handleInnerPressOut,
  navigation,
  onDeleteVariation,
  length,
}) => {
  // console.log('VariationCard => ' + JSON.stringify(item));
  // console.log('length => ' + length);
  const [variationId, setVariationId] = useState(item.id);
  const [serviceId, setServiceId] = useState(item.serviceId);
  const isFocused = useIsFocused();
  let price = '';
  let variations = [];
  try {
    if (item && item.Variations && item.Variations[0] && item.Variations[0].VariationProperties) {
      variations = item?.Variations[0].VariationProperties;
      price = item?.Variations[0]?.price;
      // console.log('variations 1 => ' + variations);
    }
  } catch (err) {
    console.log('ERR IN VARIATIONCARD 1 => ' + err);
  }

  try {
    if (item && item.VariationProperties) {
      variations = item?.VariationProperties;
      // console.log('variations 2 => ' + variations);
    }
  } catch (err) {
    console.log('ERR IN VARIATIONCARD 2 => ' + err);
  }

  try {
    if (item && item.properties && item.properties) {
      variations = item?.properties;
      // console.log('variations 3 => ' + variations);
    }
  } catch (err) {
    console.log('ERR IN VARIATIONCARD 3 => ' + err);
  }

  const deleteVariationById = () => {
    deleteVariation(item.id, item.serviceId)
      .then((res) => {
        if (res.status) {
          onDeleteVariation();
          console.log(res.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const createTwoButtonAlert = () =>
    Alert.alert(
      'Delete Variation',
      'Are you sure, You want to delete this variation?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => deleteVariationById()},
      ],
    );

  return (
    <Card containerStyle={styles.containerStyle}>
      <HView style={styles.header}>
        <Text style={styles.headText}>
          {item?.primaryLanguageVariationName
            ? item?.primaryLanguageVariationName
            : item?.primaryServiceName}
        </Text>
        {price ? (
          <Text style={styles.price}>{'$' + (price + ' Price')}</Text>
        ) : (
          <Text style={styles.price}>
            {'$' + (item?.price ? item?.price + ' Price' : ' Price')}
          </Text>
        )}
      </HView>
      <HView>
        {variations &&
          variations.map((it, i) => {
            return (
              <HView key={i}>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={styles.subHeadText}>
                  {it.value + ' '}
                </Text>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={styles.subHeadText}>
                  {it.key + ' '}
                </Text>
              </HView>
            );
          })}
      </HView>
      {!item.VariationProperties ? (
        <View>
          {/* {item && item.images && item.images.length > 0 ? (
            <ScrollView
              style={{marginTop: H(10)}}
              horizontal
              nestedScrollEnabled
              showsHorizontalScrollIndicator={false}>
              {item &&
                item.images &&
                item.images.map((it, ind) => {
                  return (
                    <TouchableWithoutFeedback
                      key={ind}
                      onPressIn={handleInnerPressIn}
                      onPressOut={handleInnerPressOut}>
                      <Image
                        style={styles.variationImage}
                        source={{
                          uri: `data:image/png;base64,${it.data}`,
                        }}></Image>
                    </TouchableWithoutFeedback>
                  );
                })}
            </ScrollView>
          ) : // <Text style={styles.noImageText}>
          //   No Image is Uploaded for this Variation
          // </Text>
          null} */}
        </View>
      ) : (
        <HView style={styles.btnContainer}>
          {length != 0 && (
            <Icon
              name={'circle-edit-outline'}
              size={24}
              onPress={() =>
                navigation.navigate(Screens.EDIT_VARIATIONS, {
                  variationId: item.id,
                  serviceId: item.serviceId,
                })
              }
            />
          )}
          {length > 1 ? (
            <Icon
              name="trash-can-outline"
              size={24}
              color={Colors.error}
              style={styles.deleteIcon}
              onPress={createTwoButtonAlert}
            />
          ) : null}
        </HView>
      )}
    </Card>
  );
};
export default VariationCard;
