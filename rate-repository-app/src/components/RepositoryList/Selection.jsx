import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
  pickerContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  pickerLabel: {
    marginRight: 10,
  },
  picker: {
    height: 40,
    width: 200,
  },
});

const Selection = ({ selectedOrder, setOrder }) => {
    const handleOrderChange = (itemValue) => {
      setOrder(itemValue);
    };

    return (
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          selectedValue={selectedOrder}
          onValueChange={handleOrderChange}
        >
          <Picker.Item label="Select Order..." value={null} />
          <Picker.Item label="Latest Repositories" value={{ orderBy: 'CREATED_AT', orderDirection: 'DESC' }} />
          <Picker.Item label="Highest Rated Repositories" value={{ orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' }} />
          <Picker.Item label="Lowest Rated Repositories" value={{ orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' }} />
        </Picker>
      </View>
    )
};

export default Selection;