import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, View } from 'react-native';

import React from 'react';

export default function SignupScreen() {
  return (
    <View>
        <StatusBar hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
