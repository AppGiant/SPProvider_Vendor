import React, {useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import DeleteGCPopup from '../../Components/DeleteGCPopup';
import GiftCard from '../../Components/GiftCard';
import {
  SafeAreaView,
  ScrollView,
  View,
} from '../../Components/StyledComponents';
import Text from '../../Components/TextI';
import {Screens} from '../../Constants/constant';

const InactiveGiftCards = (props) => {
  const [title, setTitle] = useState([
    {
      id: '1',
      name: 'Gift Card 1',
      active: false,
    },
    {
      id: '2',
      name: 'Gift Card 2',
      active: false,
    },
    {
      id: '3',
      name: 'Gift Card 3',
      active: false,
    },
  ]);

  const reactivateGiftCard = () => {
    console.log('Reactivate GC called');
    props.navigation.navigate(Screens.REACTIVATE_GIFT_CARD);
  };

  const deleteGiftCard = () => {
    console.log('Delete GC called');
    setShowDeletePopup(!showDeletePopup);
  };

  const menuItems = [
    {title: 'Reactivate', onPress: reactivateGiftCard},
    {title: 'Delete', onPress: deleteGiftCard},
  ];

  const [showDeletePopup, setShowDeletePopup] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={title}
        renderItem={({item}) => <GiftCard item={item} menuItems={menuItems} />}
      />
      {showDeletePopup && <DeleteGCPopup handleFilter={setShowDeletePopup} />}
    </SafeAreaView>
  );
};
export default InactiveGiftCards;
