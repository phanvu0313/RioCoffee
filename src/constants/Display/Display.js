const {Dimensions} = require('react-native');

const {height, width} = Dimensions.get('window');
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const setHeight = h => (height / 100) * h;
const setWidth = w => (width / 100) * w;

export default {setHeight, setWidth, height, width, screenWidth, screenHeight};
