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
import Header from '../assets/headers/category-header.png';
import BackIcon from '../assets/icons/back-icon.png';
import {airplanes} from '../data/data';
import {GlobalContext} from '../context/GlobalContext';

const {width, height} = Dimensions.get('window');

export default function Main() {
  const navigation = useNavigation();
  const {categories, setCategories, setItem} = useContext(GlobalContext);
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Image source={Header} style={styles.header} />

      <View style={styles.categories}>
        <TouchableOpacity
          style={styles.categoryCard}
          onPress={() => {
            setCategories(0);
          }}>
          <Text style={styles.categoryText}>Самолеты</Text>
          {categories === 0 ? <View style={styles.line} /> : ''}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryCard}
          onPress={() => {
            setCategories(1);
          }}>
          <Text style={styles.categoryText}>Вертолеты</Text>
          {categories === 1 ? <View style={styles.line} /> : ''}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.categoryCard}
          onPress={() => {
            setCategories(2);
          }}>
          <Text style={styles.categoryText}>Воздушные шары</Text>
          {categories === 2 ? <View style={styles.line} /> : ''}
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => navigation.goBack()}>
        <Image source={BackIcon} style={styles.backImage} />
        <Text style={styles.backText}>Вернуться в меню</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <ScrollView contentContainerStyle={styles.container}>
        {airplanes[categories].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => {
              setItem(item);
              navigation.navigate('Detail');
            }}>
            <View style={styles.cardBackground}>
              <View>
                <Image
                  source={item.cartImage}
                  style={
                    categories !== 2 ? styles.cardImage : styles.cardImageSecond
                  }
                />
              </View>

              <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.detail}>посмотреть характеристики</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#03203D',
    borderBottomWidth: 8,
    borderColor: '#E40539',
  },
  imageBackground: {
    flex: 1,
  },
  header: {
    height: height / 7,
    width: '110%',
  },
  categories: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 5,
  },
  line: {
    width: '90%',
    height: 6,
    backgroundColor: '#E40539',
    marginTop: 8,
    borderRadius: 12,
  },
  categoryCard: {
    width: '28%',
    alignItems: 'center',
  },
  categoryText: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'Jura-Bold',
    textAlign: 'center',
  },
  backContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
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
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#80253A',
  },
  container: {
    paddingBottom: 100,
  },
  card: {
    width: '100%',
    marginTop: 25,
    borderColor: '#80253A',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  cardBackground: {
    backgroundColor: '#80253A',
    width: '80%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardImage: {
    height: 80,
    aspectRatio: 2.2,
    marginLeft: -40,
    marginTop: 15,
  },
  cardImageSecond: {
    height: 110,
    aspectRatio: 0.8,
    marginLeft: 15,
    marginTop: -10,
  },
  textContainer: {
    width: '60%',
    paddingRight: 20,
    paddingVertical: 15,
  },
  name: {
    fontSize: 13,
    color: 'white',
    fontFamily: 'Jura-Bold',
    textAlign: 'center',
  },
  detail: {
    fontSize: 13,
    color: 'white',
    fontFamily: 'Jura-Regular',
    textAlign: 'center',
    marginTop: 10,
  },
});
