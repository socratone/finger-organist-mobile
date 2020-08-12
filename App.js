import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import Nav from './app/screens/nav';
import Home from './app/screens/home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Nav />
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
