import { View, Text, Dimensions, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import { useState, useRef, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  interpolate, 
  Extrapolation,
  withTiming,
  SharedValue
} from "react-native-reanimated";

const { width } = Dimensions.get("window");

interface OnboardingItemType {
  id: string;
  title: string;
  description: string;
  image: any;
}

const onboardingData: OnboardingItemType[] = [
  {
    id: "1",
    title: "Run your business smarter with AI",
    description: "Manage your sales, inventory, customers, create invoices, monitor sales and automate repetitive task",
    image: require("../../../assets/images/image-one.jpeg"),
  },
  {
    id: "2",
    title: "Everything you need in one place",
    description: "Manage your sales, inventory, customers, create invoices, monitor sales and automate repetitive task",
    image: require("../../../assets/images/image-two.jpeg"),
  },
  {
    id: "3",
    title: "Make better decisions every day",
    description: "Manage your sales, inventory, customers, create invoices, monitor sales and automate repetitive task",
    image: require("../../../assets/images/image-three.jpeg"),
  },
];

// 1. EXTRACTED ITEM COMPONENT TO AGREE WITH THE RULES OF HOOKS
interface ItemProps {
  item: OnboardingItemType;
  index: number;
  scrollX: SharedValue<number>;
}

function OnboardingItem({ item, index, scrollX }: ItemProps) {
  const inputRange = [
    (index - 1) * width,
    index * width,
    (index + 1) * width,
  ];

  // ✅ Valid Hook Placement: Top-level of a standard function component
  const rTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scrollX.value, inputRange, [0, 1, 0], Extrapolation.CLAMP);
    const translateY = interpolate(scrollX.value, inputRange, [40, 0, 40], Extrapolation.CLAMP);
    return { opacity, transform: [{ translateY }] };
  });

  // ✅ Valid Hook Placement: Top-level of a standard function component
  const rImageStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scrollX.value, inputRange, [0, 1, 0], Extrapolation.CLAMP);
    const scale = interpolate(scrollX.value, inputRange, [0.8, 1, 0.8], Extrapolation.CLAMP);
    return { opacity, transform: [{ scale }] };
  });

  return (
    <View style={{ width: width, flex: 1, paddingTop: 20 }}>
      {/* Animated Text Container */}
      <Animated.View style={[styles.textWrapper, rTextStyle]}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.descText}>{item.description}</Text>
      </Animated.View>

      {/* Animated Image Container */}
      <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-end" }}>
        <Animated.Image 
          source={item.image} 
          style={[{ width: width, height: "100%" }, rImageStyle]} 
          resizeMode="contain" 
        />
      </View>
    </View>
  );
}

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const scrollX = useSharedValue(0);
  const isUserScrolling = useRef(false);

  const viewabilityConfig = useRef({ itemVisiblePercentThreshold: 50 }).current;
  
  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index ?? 0);
    }
  }).current;

  useEffect(() => {
    const interval = setInterval(() => {
      if (isUserScrolling.current) return;
      const nextIndex = currentIndex === onboardingData.length - 1 ? 0 : currentIndex + 1;
      
      flatListRef.current?.scrollToIndex({ 
        index: nextIndex, 
        animated: true 
      });
    }, 3500);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        ref={flatListRef}
        data={onboardingData}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        keyExtractor={(item) => item.id}
        onScroll={(event) => {
          scrollX.value = event.nativeEvent.contentOffset.x;
        }}
        scrollEventThrottle={16}
        onScrollBeginDrag={() => { isUserScrolling.current = true; }}
        onScrollEndDrag={() => { isUserScrolling.current = false; }}
        onMomentumScrollEnd={() => { isUserScrolling.current = false; }}
        // 2. RENDER THE SEPARATE CHILD COMPONENT PASSING CURRENT STATE SHARED VALUES
        renderItem={({ item, index }) => (
          <OnboardingItem item={item} index={index} scrollX={scrollX} />
        )}
      />

      {/* Premium Animated Dot Indicators */}
      <View style={styles.dotContainer}>
        {onboardingData.map((_, index) => {
          const rDotStyle = useAnimatedStyle(() => {
            const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
            const dotWidth = interpolate(scrollX.value, inputRange, [8, 24, 8], Extrapolation.CLAMP);
            const backgroundColor = interpolate(scrollX.value, inputRange, [0, 1, 0], Extrapolation.CLAMP) > 0.5 
              ? "#10B981" 
              : "#D1D5DB";

            return {
              width: dotWidth,
              backgroundColor: withTiming(backgroundColor, { duration: 150 }),
            };
          });

          return (
            <Animated.View 
              key={index} 
              style={[styles.baseDot, rDotStyle]} 
            />
          );
        })}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          activeOpacity={0.8} 
          style={styles.button} 
          onPress={() => router.push("/(auth)/sign-up")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.switchModeWrapper}>
        <Pressable 
          style={styles.switchModeContainer}
          onPress={() => router.push("/(auth)/sign-in")}
        >
          <Text style={styles.switchModeText}>
            Already have an account? <Text style={styles.hyperlinkText}> Log In </Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textWrapper: {
    paddingHorizontal: 24, 
    marginBottom: 24
  },
  titleText: {
    fontSize: 28, 
    fontWeight: "700", 
    color: "#000", 
    marginBottom: 12
  },
  descText: {
    fontSize: 16, 
    color: "#6B7280", 
    lineHeight: 24
  },
  dotContainer: {
    flexDirection: "row", 
    justifyContent: "center", 
    marginVertical: 24, 
    alignItems: "center"
  },
  baseDot: {
    height: 8, 
    borderRadius: 999, 
    marginHorizontal: 4
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#10B981',
    width: '100%',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  switchModeWrapper: {
    width: "100%", 
    flexDirection: "row", 
    justifyContent: "center", 
    marginBottom: 20
  },
  switchModeContainer: {
    padding: 4
  },
  switchModeText: {
    fontSize: 14,
  },
  hyperlinkText: {
    color: '#10B981',
    fontWeight: '600',
  }
});
