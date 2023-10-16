import {useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Display from '../../constants/Display/Display';
import Colors from '../../constants/Colors/Colors';

function BottomTab({state, descriptors, navigation}) {
  const insets = useSafeAreaInsets();
  const BAR_WIDTH = Display.width / state?.routes.length;

  const prevIndexRef = useRef(state.index);
  const barValue = useSharedValue(0);

  useEffect(() => {
    if (state.index !== prevIndexRef.current) {
      barValue.value = BAR_WIDTH * state.index;
    }

    prevIndexRef.current = state.index;
  }, [state.index]);

  const barAnimation = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(barValue.value, {
            duration: 60,
            useNativeDriver: true,
          }),
        },
      ],
    };
  });
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        console.log(options);
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[
              styles.button,
              {flex: 1, paddingBottom: Math.max(insets.bottom, 15)},
            ]}>
            {options.tabBarIcon({focused: isFocused, color: '', string: ''})}
          </Pressable>
        );
      })}
      <Animated.View
        style={[styles.barContainer, {width: BAR_WIDTH}, barAnimation]}>
        <View style={[styles.barInside]}></View>
      </Animated.View>
    </View>
  );
}
export default BottomTab;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    paddingTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  barContainer: {
    zIndex: 1,
    height: 3,
    position: 'absolute',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  barInside: {
    backgroundColor: Colors.PRIMARY_DEFAULT,
    width: '45%',
    height: '100%',
    borderBottomRightRadius: 2,
    borderBottomLeftRadius: 2,
  },
});
