import React, {useContext} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {GlobalContext} from '../context/GlobalContext';
import Header from '../assets/headers/item-header.png';
import BackIcon from '../assets/icons/back-icon.png';
import Planes from '../assets/templates/airplanes.png';

const {width, height} = Dimensions.get('window');

export default function Detail() {
  const navigation = useNavigation();
  const {item, categories} = useContext(GlobalContext);
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
        <ScrollView contentContainerStyle={styles.scroll}>
          <Text style={styles.name}>{item?.name}</Text>

          <Image
            source={item?.mainImage}
            style={categories !== 2 ? styles.mainImage : styles.imageSecond}
          />

          <Text style={styles.description}>{item?.detail}</Text>

          {item?.images?.length ? (
            <View style={styles.imagesContainer}>
              {item?.images?.map((image, index) => (
                <Image source={image} style={styles.image} key={index} />
              ))}
            </View>
          ) : (
            ''
          )}
        </ScrollView>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Order')}>
          <Text style={styles.buttonText}>Арендовать</Text>
        </TouchableOpacity>

        <Image source={Planes} style={styles.template} />
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
    height: height * 0.73,
    backgroundColor: '#80253A',
    alignSelf: 'center',
    borderRadius: 12,
    paddingTop: 10,
  },
  name: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Jura-Bold',
    textAlign: 'center',
  },
  mainImage: {
    height: height / 5,
    width: '80%',
    borderRadius: 8,
    alignSelf: 'center',
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Jura-Regular',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  imagesContainer: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  image: {
    width: '45%',
    height: height / 8,
    marginTop: 10,
    borderRadius: 18,
  },
  imageSecond: {
    height: height / 3,
    width: '60%',
    borderRadius: 8,
    alignSelf: 'center',
    marginVertical: 10,
  },
  scroll: {
    paddingBottom: 0,
  },
  template: {
    height: height / 10,
    width: '100%',
    marginTop: 10,
    alignSelf: 'flex-end',
  },
  button: {
    backgroundColor: '#03203D',
    paddingVertical: 8,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: height / 25,
    alignSelf: 'center',
    borderRadius: 15,
    zIndex: 100,
  },
  buttonText: {
    fontSize: 14,
    color: 'white',
    fontFamily: 'Jura-Bold',
    textAlign: 'center',
  },
});
