import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";

import WeatherList from './WeatherList'
import SegmentButton from './SegmentButton'

export default class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      segmentButton: this.props.SegmentButton,
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>晴れ</Text>
        <WeatherList />
      </View>

      // <Content padder>
      //   <CardItem header bordered>
      //     <Text>NativeBase</Text>
      //   </CardItem>
      //   <CardItem bordered>
      //     <Body>
      //       <Text>
      //         NativeBase is a free and open source framework that enable
      //         developers to build
      //         high-quality mobile apps using React Native iOS and Android
      //         apps
      //         with a fusion of ES6.
      //       </Text>
      //     </Body>
      //   </CardItem>
      //   <WeatherList />
      // </Content>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 20,
    flex: 1,
    marginTop: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
});

