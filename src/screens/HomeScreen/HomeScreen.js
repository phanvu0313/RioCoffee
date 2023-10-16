import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView, useSafeAreaInsets} from 'react-native-safe-area-context';
import Colors from '../../constants/Colors/Colors';
import Display from '../../constants/Display/Display';
import {SvgXml} from 'react-native-svg';
import indexXML from '../../assets/svg/indexXML';
import MyReward from './MyReward';
import {useNavigation} from '@react-navigation/native';
import FavoritePlace from './FavoritePlace';
const CARD_HEIGHT = 150;
const CARD_HAFT_HEIGHT = CARD_HEIGHT / 2;
const HEADER_HEIGHT = 200;
const CARD_WIDTH = Display.width * 0.9;
const CARD_MARGIN = Display.width * 0.05;
const CARD_REWARD_HEIGHT = 100;

const Header = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={styles.headerContainer}>
      <View style={styles.topContainer}>
        <Text style={[styles.nameStyle]}>
          Rio <Text style={styles.coffeeText}>Coffee</Text>
        </Text>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.cardTopContainer}>
          <View style={styles.contentCardTop}>
            <Text style={styles.contentTopText}>Your card balance</Text>
            <Text style={styles.contentNumberText}>$287.00</Text>
          </View>
          <View style={styles.lineStyle}></View>
        </View>
        <View style={styles.cardBottomContainer}>
          <View style={styles.iconContainer}>
            <SvgXml width={25} height={25} xml={indexXML.TopUp} />
            <Text style={styles.iconText}>TopUp</Text>
          </View>
          <View style={styles.iconContainer}>
            <SvgXml width={25} height={25} xml={indexXML.Pay} />
            <Text style={styles.iconText}>Pay</Text>
          </View>
          <View style={styles.iconContainer}>
            <SvgXml width={25} height={25} xml={indexXML.Reward} />
            <Text style={styles.iconText}>Promo</Text>
          </View>
          <View style={styles.iconContainer}>
            <SvgXml width={25} height={25} xml={indexXML.History} />
            <Text style={styles.iconText}>History</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const SessionView = ({title, navigateTo, children}) => {
  const navigation = useNavigation();
  const navigateToScreen = () => {
    navigation.navigate(navigateTo);
  };
  return (
    <View style={styles.sessionContainer}>
      <View style={styles.topSession}>
        <Text style={styles.titleText}>{title}</Text>
        <TouchableOpacity onPress={navigateToScreen}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mainSession}>{children}</View>
    </View>
  );
};

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        style={styles.listContainer}
        contentContainerStyle={styles.listContentContainerStyle}>
        <SessionView title={'My reward'} navigateTo={'RewardScreen'}>
          <MyReward />
        </SessionView>
        <SessionView title={'Favorite Place'} navigateTo={'RewardScreen'}>
          <FavoritePlace />
        </SessionView>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    width: '100%',
    height: HEADER_HEIGHT,
    backgroundColor: Colors.PRIMARY_DEFAULT,
    paddingHorizontal: 40,
  },
  nameStyle: {
    color: Colors.WARNING_DEFAULT,
    fontSize: 35,
    fontWeight: 'bold',
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomContainer: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: Colors.BACKGROUND_WHITE,
    borderRadius: 20,
    position: 'absolute',
    bottom: -CARD_HAFT_HEIGHT,
    left: CARD_MARGIN,
    zIndex: 1,
  },
  listContainer: {
    // backgroundColor: Colors.PRIMARY_LIGHT_200,
    zIndex: -1,
  },
  listContentContainerStyle: {
    marginTop: CARD_HAFT_HEIGHT,
  },
  lineStyle: {
    height: 1,
    width: '80%',
    backgroundColor: Colors.PRIMARY_LIGHT_200,
  },
  cardTopContainer: {
    height: CARD_HEIGHT / 2 - 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardBottomContainer: {
    height: CARD_HEIGHT / 2,
    flexDirection: 'row',
    width: '100%',
  },
  contentCardTop: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  contentTopText: {
    color: Colors.SECONDARY_DEFAULT,
    fontWeight: '500',
  },
  contentNumberText: {
    fontSize: 20,
    fontWeight: '600',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    color: Colors.SECONDARY_DEFAULT,
    fontWeight: '500',
    fontSize: 12,
  },
  sessionContainer: {
    padding: 20,
  },
  topSession: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  titleText: {
    color: Colors.SECONDARY_DEFAULT,
    fontWeight: '600',
    fontSize: 20,
  },
  viewAllText: {
    color: Colors.PRIMARY_DEFAULT,
  },
  coffeeText: {
    color: Colors.BACKGROUND_WHITE,
    fontSize: 30,
    fontWeight: 'bold',
  },
});
