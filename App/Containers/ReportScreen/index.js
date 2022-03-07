import React, {useState, useEffect} from 'react';
import CustomGiftCard from '../../Components/CustomGiftCard';
import {
  SafeAreaView,
  ScrollView,
  View,
} from '../../Components/StyledComponents';
import Text from '../../Components/TextI';
import styles from './style';
import colors from '../../Constants/color';
import HView from '../../Components/HView';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ReportCard from '../../Components/ReportCard';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ExportReportPopup from '../../Components/ExportReportPopup';
import {BackHandler} from 'react-native';

const ReportScreen = (props) => {
  const values = [
    {
      date: '14 Nov, 2020',
      totalBookings: '104',
      accepted: '100',
      completed: '100',
      rejected: '01',
      noShow: '02',
      cancelled: '01',
      spFee: '$100.00',
      revenue: '$2530.00',
    },
    {
      date: '14 Nov, 2020',
      totalBookings: '104',
      accepted: '100',
      completed: '100',
      rejected: '01',
      noShow: '02',
      cancelled: '01',
      spFee: '$100.00',
      revenue: '$2530.00',
    },

    {
      date: '14 Nov, 2020',
      totalBookings: '104',
      accepted: '100',
      completed: '100',
      rejected: '01',
      noShow: '02',
      cancelled: '01',
      spFee: '$100.00',
      revenue: '$2530.00',
    },
  ];

  const [showExportPopup, setExportPopup] = useState(false);

  const showPopup = () => {
    setExportPopup(!showExportPopup);
    console.log('Export Report');
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.headText}>Booking Statistics</Text>
          <HView style={styles.subContainer}>
            <HView style={styles.dateView}>
              <Text style={styles.dateText}>Date</Text>
              <Icon
                name="calendar-month"
                size={20}
                style={styles.calendarIcon}
              />
            </HView>
            <Text style={styles.applyText}>Apply Filters</Text>
            <Text style={styles.clearText}>Clear filters</Text>
          </HView>

          <HView style={styles.exportView}>
            <TouchableOpacity
              onPress={() => showPopup()}
              style={{flexDirection: 'row'}}>
              <Icon name="file-export" size={20} style={styles.exportIcon} />
              <Text style={styles.exportText}>Export Report</Text>
            </TouchableOpacity>
          </HView>

          {values.map((it, i) => (
            <ReportCard key={i} it={it} />
          ))}
        </View>
      </ScrollView>
      {showExportPopup && <ExportReportPopup handleFilter={setExportPopup} />}
    </SafeAreaView>
  );
};
export default ReportScreen;
