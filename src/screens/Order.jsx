import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../assets/headers/item-header.png';
import BackIcon from '../assets/icons/back-icon.png';
import {DatePicker} from 'react-native-woodpicker';

const {height} = Dimensions.get('window');

export default function Order() {
  const navigation = useNavigation();
  const [pickedDateSecond, setPickedDateSecond] = useState(new Date());
  const [pickedDate, setPickedDate] = useState(new Date());

  const formatDate = inputDateString => {
    const date = new Date(inputDateString);

    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const year = date.getUTCFullYear();

    return `${day}.${month}.${year}`;
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Image source={Header} style={styles.header} />

      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => navigation.navigate('Main')}>
        <Image source={BackIcon} style={styles.backImage} />
        <Text style={styles.backText}>Вернуться в меню</Text>
      </TouchableOpacity>

      <View style={styles.container}>
        <Text style={styles.name}>Выберите дату</Text>

        <View style={styles.card}>
          <Text style={styles.text}>Отправление: </Text>
          <DatePicker
            value={pickedDateSecond}
            onDateChange={setPickedDateSecond}
            title="Date Picker"
            text={formatDate(pickedDateSecond)}
            isNullable={false}
            iosDisplay="inline"
            containerStyle={styles.input}
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.text}>Возвращение:</Text>
          <DatePicker
            value={pickedDate}
            onDateChange={setPickedDate}
            title="Date Picker"
            text={formatDate(pickedDate)}
            isNullable={false}
            iosDisplay="inline"
            containerStyle={styles.input}
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.text}>Ваш номер: {'    '}</Text>
          <TextInput
            style={styles.input}
            placeholder={'Номер телефона...'}
            placeholderTextColor={'#867B7B'}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('OrderConfirm')}>
          <Text style={styles.buttonText}>Подтвердить</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#03203D',
  },
  header: {
    height: height / 7,
    width: '110%',
  },
  backContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 15,
  },
  backImage: {
    height: 15,
    width: 18,
    marginLeft: 15,
    marginTop: 15,
  },
  backText: {
    fontSize: 14,
    fontFamily: 'Jura-Regular',
    marginTop: 12,
    marginLeft: 8,
    color: '#DE1846',
  },
  container: {
    width: '85%',
    height: height * 0.35,
    backgroundColor: '#80253A',
    alignSelf: 'center',
    borderRadius: 20,
    paddingTop: 10,
    marginTop: 50,
  },
  name: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Jura-Bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#03203D',
    paddingVertical: 8,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: -10,
    alignSelf: 'center',
    borderRadius: 15,
    zIndex: 100,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    padding: 10,
  },
  buttonText: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Jura-Bold',
    textAlign: 'center',
  },
  card: {
    width: '100%',
    marginTop: 30,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  text: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Jura-Bold',
  },
  input: {
    backgroundColor: 'white',
    width: '60%',
    paddingLeft: 10,
    marginLeft: 10,
    height: 20,
    fontFamily: 'Jura-Regular',
    color: 'black',
  },
  dateInput: {
    backgroundColor: 'white',
    width: '60%',
    paddingLeft: 10,
    marginLeft: 10,
    height: 30,
    fontFamily: 'Jura-Regular',
    color: 'black',
  },
});
