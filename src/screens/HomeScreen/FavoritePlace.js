import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import Images from '../../assets/img/Images';
import Colors from '../../constants/Colors/Colors';
import {SvgXml} from 'react-native-svg';
import indexXML from '../../assets/svg/indexXML';

const tempData = [
  {
    name: 'Rio Coffee 5',
    place: 'My Dong, Phan Rang',
    image: Images.rio_5,
    rating: 4.7,
  },
  {
    name: 'Rio Coffee 3',
    place: 'Phuoc My, Phan Rang',
    image: Images.rio_3,
    rating: 4.8,
  },

  {
    name: 'Rio Coffee 7',
    place: 'Dau Do, Phan Rang',
    image: Images.rio_7,
    rating: 4.6,
  },
];
const renderItem = ({item}) => (
  <TouchableOpacity style={styles.boxContainer}>
    <Image style={styles.imageStyle} source={item.image} resizeMode="cover" />
    <View style={styles.viewContainer}>
      <View style={styles.bottomView}>
        <Text style={styles.placeName}>{item.name}</Text>
        <View style={styles.placeStyle}>
          <SvgXml width={16} height={16} xml={indexXML.Location} />
          <Text style={styles.placeText}>{item.place}</Text>
        </View>

        <View style={styles.starView}>
          <SvgXml
            style={styles.starStyle}
            width={10}
            height={10}
            xml={indexXML.Star_yellow}
          />
          <SvgXml
            style={styles.starStyle}
            width={10}
            height={10}
            xml={indexXML.Star_yellow}
          />
          <SvgXml
            style={styles.starStyle}
            width={10}
            height={10}
            xml={indexXML.Star_yellow}
          />
          <SvgXml
            style={styles.starStyle}
            width={10}
            height={10}
            xml={indexXML.Star_yellow}
          />
          <SvgXml
            style={styles.starStyle}
            width={10}
            height={10}
            xml={indexXML.Star_nor}
          />
          <Text style={styles.ratingStyle}>{item.rating}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const FavoritePlace = () => {
  return (
    <FlatList
      data={tempData}
      showsHorizontalScrollIndicator={false}
      style={styles.listStyle}
      renderItem={renderItem}
      horizontal
    />
  );
};

export default FavoritePlace;

const styles = StyleSheet.create({
  listStyle: {
    width: '100%',
    height: 250,
  },
  boxContainer: {
    width: 200,
    height: 250,
    backgroundColor: 'white',
    marginHorizontal: 10,
    borderRadius: 15,
  },
  imageStyle: {
    flex: 1,
    borderRadius: 15,
    width: 200,
    height: 250,
  },
  viewContainer: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    position: 'absolute',
    flexDirection: 'column-reverse',
    top: 0,
    left: 0,
    width: 200,
    height: 250,
    borderRadius: 15,
    //
  },
  placeText: {
    color: Colors.BACKGROUND_WHITE,
    fontWeight: '700',
  },
  placeName: {
    color: Colors.BACKGROUND_WHITE,
    fontWeight: 'bold',
    fontSize: 20,
  },
  placeStyle: {
    flexDirection: 'row',
  },
  starView: {
    // height: 25,
    // backgroundColor: 'white',
    // paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  starStyle: {
    marginHorizontal: 2,
  },
  ratingStyle: {
    color: Colors.BACKGROUND_WHITE,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  bottomView: {
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 15,
    borderRadius: 15,
    borderTopEndRadius: 0,
    borderTopStartRadius: 0,
  },
});
