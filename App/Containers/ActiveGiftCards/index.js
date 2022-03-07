import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import GiftCard from '../../Components/GiftCard';
import {
  SafeAreaView,
  ScrollView,
  View,
} from '../../Components/StyledComponents';
import Text from '../../Components/TextI';
import Button from '../../Components/CustomButton';
import styles from './style';
import HView from '../../Components/HView';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Screens} from '../../Constants/constant';
import DeactivateGCPopup from '../../Components/DeactivateGCPopup';
import {getGiftCardByStoreId} from '../../api/ApiManager';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../../Components/Loader';

const ActiveGiftCards = (props) => {
  const [data, setData] = useState([]);
  const [storeId, setStoreId] = useState();
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

  useEffect(() => {
    getStoredId();
    // getActiveGc();
  }, [isFocused]);

  const getStoredId = () => {
    AsyncStorage.getItem('storeData')
      .then((res) => {
        if (res) {
          let res1 = JSON.parse(res);
          setStoreId(res1?.StoreData?.store?.id);
          getActiveGc(res1?.StoreData?.store?.id);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getActiveGc = (id) => {
    console.log('store id GC => ' + id);
    getGiftCardByStoreId(id, 1)
      .then((res) => {
        if (res.status) {
          // console.log('Active GC => ' + JSON.stringify(res));
          setData(res.data);
          setLoading(false);
        } else {
          console.log(JSON.stringify(res));
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const deactivateGiftCard = () => {
    console.log('deactivate GC called');
    setDeactivatePopup(!deactivatePopup);
  };

  const editGiftCard = () => {
    console.log('edit GC called');
    props.navigation.navigate(Screens.EDIT_GIFT_CARD);
  };

  const menuItems = [
    {
      title: 'Deactivate',
      onPress: deactivateGiftCard,
    },
    {title: 'Edit', onPress: editGiftCard},
  ];

  const [deactivatePopup, setDeactivatePopup] = useState(false);

  if (loading)
    return (
      <View style={[styles.loader, styles.horizontal]}>
        <Loader />
      </View>
    );

  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate(Screens.ADD_GIFT_CARD, {storeId: storeId})
        }>
        <HView style={styles.createView}>
          <Icon name="plus-circle-outline" size={25} style={styles.plusIcon} />
          <Text style={styles.blueText}>Create Gift Card</Text>
        </HView>
      </TouchableOpacity>
      {/* <FlatList
        data={data}
        renderItem={(item) => <GiftCard item={item} menuItems={menuItems} />}
      /> */}
      <ScrollView>
        {data.map((it, i) => {
          return <GiftCard key={i} item={it} menuItems={menuItems} />;
        })}
      </ScrollView>
      {deactivatePopup && (
        <DeactivateGCPopup handleFilter={setDeactivatePopup} />
      )}
    </SafeAreaView>
  );
};
export default ActiveGiftCards;
