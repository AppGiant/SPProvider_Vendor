import React, {useState} from 'react';
import {View} from '../../Components/StyledComponents';
import Text from '../../Components/TextI';
import styles from './style';
import HView from '../HView';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PopupMenu from '../PopupMenuTransaction';
import TransactionPopup from '../TransactionPopup';
import {Menu, MenuItem, MenuDivider} from 'react-native-material-menu';

const TransactionComponent = ({item, index, clickHandler, menuItems}) => {
  // console.log(item);
  const [isVisible, setIsVisible] = useState(false);

  const setVisibility = (it) => {
    setIsVisible(false);
    // showPopup(name);
    it.onPress();
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setIsVisible(!isVisible)}>
        <HView style={index % 2 == 0 ? styles.container : styles.container1}>
          <View style={styles.view1}>
            <Text style={styles.lightText}>{item.date}</Text>
            <Text style={styles.lightText}>{item.time}</Text>
          </View>
          <View style={styles.view2}>
            <Text style={styles.transaction}>{item.transaction}</Text>
          </View>
          <View style={styles.view3}>
            <Text
              style={
                item.amount > 0 ? styles.greenText : styles.redText
              }>{`$ ${item.amount}`}</Text>
          </View>
          <View style={styles.view4}>
            <Icon
              name="dots-vertical"
              size={20}
              onPress={() => clickHandler(index)}
            />
          </View>
          {/* <Menu
            visible={isVisible}
            // anchor={<Text onPress={showMenu}>Show menu</Text>}
            onRequestClose={() => setIsVisible(false)}>
            <MenuItem onPress={() => setVisibility('View Details')}>
              View Details
            </MenuItem>
            <MenuItem onPress={() => setVisibility('Raise Dispute')}>
              Raise Dispute
            </MenuItem>
            <MenuItem onPress={() => setVisibility('Disputed')}>
              Disputed
            </MenuItem>
          </Menu> */}

          <Menu
            visible={isVisible}
            // anchor={<Text onPress={showMenu}>Show menu</Text>}
            onRequestClose={() => setIsVisible(false)}>
            {menuItems &&
              menuItems.length > 0 &&
              menuItems.map((it, key) => (
                <MenuItem key={key} onPress={() => setVisibility(it)}>
                  {it.title}
                </MenuItem>
              ))}
          </Menu>
        </HView>
      </TouchableOpacity>
    </View>
  );
};

export default TransactionComponent;
