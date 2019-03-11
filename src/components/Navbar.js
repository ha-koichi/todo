import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';

export default class Navbar extends Component {

  constructor(props){
    super(props)
    this.state = {
      title: '',
      navigator: '',
    };
  }
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: '天気',
        }}
        style={{flex: 1}}
      />
      // <View style={styles.header}>
      //   <Text style={styles.bigBlue}>天気</Text>
      // </View>
    );
  }
}

class MyScene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired,
  };

  _onForward = () => {
    this.props.navigator.push({
      title: 'Weather',
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Current Scene: {this.props.title}</Text>
        <TouchableHighlight onPress={this._onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});