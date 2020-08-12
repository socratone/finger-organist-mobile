import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Nav() {
  return (
    <View style={styles.container}>
      <View>
        <MaterialCommunityIcons name="menu" size={23} />
      </View>
      <View>
        <MaterialCommunityIcons name="home-outline" size={23} />
      </View>
      <View>
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
});
