import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function IntroScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Homepage');
    }, 10000); // 10 seconds

    return () => clearTimeout(timer); // Clear the timer on component unmount
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, I'm Xuân Hùng 21110194!  Welcome to my app.</Text>
    </View>
  );
}

function Homepage() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Homepage!</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen name="Intro" component={IntroScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Homepage" component={Homepage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});
