import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StatusBar } from "expo-status-bar";

const LoginScreen = () => {
  const siginWithFacebook = () => {};

  const signInWithGoogle = () => {};

  const signInWithApple = () => {};

  return (
    <ImageBackground
      source={require("../../assets/images/onboarding.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0.8)"]}
        style={styles.gradient}
      >
        <View style={styles.container}>
          <View style={styles.wrapper}>
            <Text style={styles.headline}>get started</Text>
            <Text style={styles.subText}>
              We don't need handful of people doing zero waste perfectly. We
              need millions of people doing it imperfectly
            </Text>
          </View>
          <View style={{ marginVertical: 10 }}>
            <AuthButoon
              text={"Connect with Facebook"}
              style={{ backgroundColor: "#093FFF" }}
            />
            {Platform.OS === "ios" ? (
              <AuthButoon
                text={"Connect with Apple"}
                style={{ backgroundColor: "#000" }}
              />
            ) : (
              <AuthButoon
                text={"Connect with Google"}
                style={{ backgroundColor: "#f95738" }}
              />
            )}
          </View>
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

const AuthButoon = ({ text, onPress, style, color }) => {
  return (
    <TouchableOpacity style={[styles.btn, style]} activeOpacity={1}>
      <Text style={[styles.btntext, color]}>{text}</Text>
    </TouchableOpacity>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: Dimensions.get("window").width,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  headline: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "800",
    textTransform: "capitalize",
    marginBottom: 1,
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  subText: {
    width: "90%",
    color: "#D1D1D6",
    textAlign: "center",
    lineHeight: 21,
  },
  btn: {
    paddingVertical: Platform.OS === "ios" ? 15 : 14,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginVertical: 8,
  },
  btntext: {
    fontWeight: "bold",
    letterSpacing: 1,
    color: "#fff",
  },
});
