import React from 'react';
import StorePolicyCard from '../../../Components/StorePolicyCard';
import styles from './style';
import {
  View,
  ScrollView,
  SafeAreaView,
} from '../../../Components/StyledComponents';
import Text from '../../../Components/TextI';
import InputComponent from '../../../Components/InputComponent';
import Button from '../../../Components/CustomButton';

const MyPolicies = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.headText}>My Policies</Text>
          <StorePolicyCard value="Rescheduling" />
          <StorePolicyCard value="Cancellations" />
          <View style={styles.roundCard}>
            <InputComponent
              placeholder="Describe your policies here"
              style={styles.input}
            />
          </View>
          <Button
            title="Update Policy"
            containerStyle={styles.btn1}
            style={styles.buttonTitle1}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default MyPolicies;
