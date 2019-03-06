import React, { Component } from 'react';
import { SegmentedControlIOS, StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Segment, Content, Text } from 'native-base';

export default class SegmentButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  render() {
    return (
      <SegmentedControlIOS
        values={['東京', '大坂']}
        selectedIndex={this.state.selectedIndex}
        onChange={(event) => {
          this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
        }}
        style={styles.segmentButton}
      />
    );
  }
}

const styles = StyleSheet.create({
  segmentButton: {
    marginRight: 30,
    marginLeft: 30,
    marginTop: 30,
    // flex: 1,
    // // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
});