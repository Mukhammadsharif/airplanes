import React, {useContext} from 'react';
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import Background from '../assets/backgrounds/background.png';
import Header from '../assets/headers/main-header.png';
import {useNavigation} from '@react-navigation/native';
import {GlobalContext} from '../context/GlobalContext';

const {width, height} = Dimensions.get('window');

export default function Menu() {
  const navigation = useNavigation();
  const {setCategories} = useContext(GlobalContext);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ImageBackground source={Background} style={styles.imageBackground}>
        <Image source={Header} style={styles.header} />

        <View style={styles.container}>
          <TouchableOpacity
            style={styles.mainCard}
            onPress={() => navigation.navigate('Main')}>
            <Text style={styles.cardText}>Главная</Text>
            <View style={styles.line} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              setCategories(0);
              navigation.navigate('Main');
            }}>
            <Text style={styles.cardText}>Самолеты</Text>
            <View style={styles.line} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              setCategories(1);
              navigation.navigate('Main');
            }}>
            <Text style={styles.cardText}>Вертолеты</Text>
            <View style={styles.line} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              setCategories(2);
              navigation.navigate('Main');
            }}>
            <Text style={styles.cardText}>Воздушные шары</Text>
            <View style={styles.line} />
          </TouchableOpacity>
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
    height: height / 5,
    width: '100%',
  },
  container: {
    width: width,
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: height - height / 5,
  },
  mainCard: {
    width: width * 0.75,
    height: 50,
  },
  card: {
    width: width * 0.7,
    marginTop: 15,
  },
  cardText: {
    fontSize: 32,
    color: 'white',
    fontFamily: 'Jura-Bold',
    width: '100%',
  },
  line: {
    width: '100%',
    height: 6,
    backgroundColor: '#E40539',
    marginTop: 8,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
});
