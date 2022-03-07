import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
} from '../../Components/StyledComponents';
import Text from '../../Components/TextI';
import HView from '../../Components/HView';
import styles from './style';

const TableFormat = ({columns}) => {
  return (
    <HView style={styles.header}>
      <View style={styles.columnDate}>
        <Text style={styles.dateText}>{columns.col1}</Text>
      </View>
      <View style={styles.columnTransaction}>
        <Text style={styles.transactionText}>{columns.col2}</Text>
      </View>
      <View style={styles.columnAmount}>
        <Text style={styles.amountText}>{columns.col3}</Text>
      </View>
    </HView>
  );
};

export default TableFormat;
