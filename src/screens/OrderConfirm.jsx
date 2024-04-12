import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../assets/headers/item-header.png';
import BackIcon from '../assets/icons/back-icon.png';
import Background from '../assets/backgrounds/background.png';
import Right from '../assets/icons/right.png';
import Left from '../assets/icons/left.png';

const {height} = Dimensions.get('window');

export default function OrderConfirm() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ImageBackground source={Background} style={styles.imageBackground}>
        <Image source={Header} style={styles.header} />

        <TouchableOpacity
          style={styles.backContainer}
          onPress={() => navigation.navigate('Main')}>
          <Image source={BackIcon} style={styles.backImage} />
          <Text style={styles.backText}>Вернуться в меню</Text>
        </TouchableOpacity>

        <View style={styles.container}>
          <Image source={Right} style={styles.right} />

          <Text style={styles.title}>Спасибо за ваш заказ!</Text>

          <Text style={styles.subtitle}>
            Мы свяжемся с вами {'\n'}в ближайшее время
          </Text>

          <Image source={Left} style={styles.left} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#03203D',
  },
  imageBackground: {
    flex: 1,
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
  right: {
    width: 70,
    height: 40,
    alignSelf: 'flex-end',
  },
  left: {
    width: 72,
    height: 45,
    alignSelf: 'flex-start',
  },
  container: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Jura-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'Jura-Bold',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 30,
  },
});
