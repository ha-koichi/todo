import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Navbar extends Component {

  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.bigBlue}>天気</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    top: 90,
    marginBottom: 100,
    alignItems: 'center',
  },
});