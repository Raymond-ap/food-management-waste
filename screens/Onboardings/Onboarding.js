import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const _DATAITEM = [
  {
    title: "Support by sharing",
    description:
      "Too much food to eat? No problem! Share your meal with the world and help support the cause to reduce food waste.",
  },
  {
    title: "Request items for free",
  },
  {
    title: "Support by sharing",
    description:
      "Too much food to eat? No problem! Share your meal with the world and help support the cause to reduce food waste.",
  },
];

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const ref = React.useRef(null);
  const navigation = useNavigation();

  const nextSlide = () => {
    const _next = currentIndex + 1;
    const offset = _next * Dimensions.get("window").width;
    ref?.current?.scrollToOffset({ offset });
  };

  return (
    <ImageBackground
      source={require("../../assets/images/onboarding.jpg")}
      style={styles.image}
      resizeMode="cover"
    >
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0.8)"]}
        style={styles.gradient}
      >
        <FlatList
          ref={ref}
          data={_DATAITEM}
          pagingEnabled
          bounces={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          onScroll={(event) => {
            const offsetX = event.nativeEvent.contentOffset.x;
            const currentIndex = Math.round(
              offsetX / Dimensions.get("window").width
            );
            setCurrentIndex(currentIndex);
          }}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          )}
        />
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.buttonText}>Skip</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <View style={styles.indicators}>
            {_DATAITEM.map((_, index) => (
              <View
                style={[
                  styles.indicator,
                  {
                    backgroundColor:
                      currentIndex === index ? "#093FFF" : "#fff",
                  },
                ]}
                key={index}
              />
            ))}
          </View>
          {currentIndex === _DATAITEM.length - 1 ? (
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.button}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.buttonText}>get started</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.button}
              onPress={() => nextSlide()}
            >
              <Text style={styles.buttonText}>next</Text>
            </TouchableOpacity>
          )}
        </View>
      </LinearGradient>
      <StatusBar
        translucent={true}
        backgroundColor={"transparent"}
        style="light"
      />
    </ImageBackground>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width,
    flex: 1,
  },
  container: {
    width: Dimensions.get("window").width,
    paddingHorizontal: 15,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
    position: "absolute",
    top: 50,
    right: 10,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  buttonText: {
    textTransform: "capitalize",
    fontSize: 16,
    color: "#fff",
    letterSpacing: 1,
  },
  content: {
    flex: 1,
    position: "absolute",
    bottom: 70,
    width: "100%",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
    textTransform: "capitalize",
    color: "#fff",
    letterSpacing: 1,
    width: "80%",
    lineHeight: 27,
    marginBottom: 3,
  },
  description: {
    color: "#f9f9f9",
    fontSize: 14,
    lineHeight: 21,
  },
  footer: {
    flex: 1,
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  indicators: {
    flexDirection: "row",
    alignItems: "center",
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 50,
    marginHorizontal: 2,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
});
