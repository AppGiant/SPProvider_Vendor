import React, {useState} from 'react';
import BookingCard from '../../Components/BookingCard';
// import CompleteBookingCard from '../../Components/CompleteBookingCard';
import {ScrollView} from '../../Components/StyledComponents';

const Bookings = () => {
  const [values, setValues] = useState([
    // {
    //   bookingId: 'SP15912501',
    //   spName: 'Halais',
    //   address: 'Jeddah Nazlah',
    //   date: '06/11/2020',
    //   time: '02:00 PM- 02:30 PM',
    //   service: 'ABC',
    //   serviceType: 'In store',
    //   spFee: '2',
    //   price: 950,
    // },
    {
      bookingId: 'SP121212',
      serviceName: 'Hair cut',
      dateAndTime: ':06/11/2020, 2:00 PM',
      staff: 'Chris J',
      customer: 'Ehsaan',
      email: 'Ehsaan@gmail.com',
      phone: +89904390490,
      status: 'Cancel',
    },
    {
      bookingId: 'SP121212',
      serviceName: 'Hair cut',
      dateAndTime: ':06/11/2020, 2:00 PM',
      staff: 'Chris J',
      customer: 'Ehsaan',
      email: 'Ehsaan@gmail.com',
      phone: +89904390490,
      status: 'Cancel',
    },
    {
      bookingId: 'SP121212',
      serviceName: 'Hair cut',
      dateAndTime: ':06/11/2020, 2:00 PM',
      staff: 'Chris J',
      customer: 'Ehsaan',
      email: 'Ehsaan@gmail.com',
      phone: +89904390490,
      status: 'Cancel',
    },
  ]);

  // return <ScrollView>{values.map((it,index)=><BookingCard key={index} values={it} />)}</ScrollView>
  return (
    <ScrollView>
      {/* {values.map((it, index) => (
        <CompleteBookingCard key={index} values={it} showDots={false} />
      ))} */}
    </ScrollView>
  );
};
export default Bookings;
