import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import DropDown from './dropDown';

export default function Nav() {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <MaterialCommunityIcons name="menu" size={23} />
        <DropDown />
      </View>
      <View style={styles.icon}>
        <MaterialCommunityIcons name="home-outline" size={23} />
      </View>
      <View style={styles.icon}>
        <MaterialCommunityIcons name="magnify" size={23} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'wheat',
    justifyContent: 'space-evenly',
    height: 50,
    width: '100%',
  },
  icon: {
    // flex: 1,
  },
});
