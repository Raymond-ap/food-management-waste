import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Onboarding, LoginScreen } from "./screens/";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer theme={DarkTheme} >
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Onboarding">
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar translucent={false} backgroundColor={"#fff"} style="dark" />
    </>
  );
}

const styles = StyleSheet.create({});
