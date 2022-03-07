import React from 'react';
import {View} from '../StyledComponents';
import Text from '../TextI';
import {W} from '../../utils/DimensionCalculator';
const TextBetweenLine = ({text}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: W(10),
      }}>
      <View style={{flex: 1, height: 1, backgroundColor: 'lightgray'}} />
      {text&&<View>
        <Text style={{width: 50, textAlign: 'center'}}>{text}</Text>
      </View>}
      <View style={{flex: 1, height: 1, backgroundColor: 'lightgray'}} />
    </View>
  );
};
export default TextBetweenLine;
