import React, { Component } from 'react';
import { SegmentedControlIOS, StyleSheet, View, Text } from 'react-native';

import { connect } from 'react-redux'
import { addTodo } from '../actions'

export default class SegmentButton extends Component {

  constructor(props) {
    super(props);
    this.showCirculares = this.showCirculares.bind(this);
    this.state = {
      selectedIndex: 0,
    };
  }

  showCirculares(){
    this.props.showView("circulares");
  }

  click (event) {
    this.props.onEventCallback({
      select: event.nativeEvent.selectedSegmentIndex,
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <SegmentedControlIOS
          values={['東京', '大阪']}
          selectedIndex={this.state.selectedIndex}
          onChange={(event) => {
            this.click(event)
            // dispatch(addTodo(input.value));
            this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
          }}
          style={styles.segmentButton}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  segmentButton: {
    marginRight: 30,
    marginLeft: 30,
    // marginTop: 30,
    // flex: 1,
    // // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  container: {
    flex: 1,
  }
});

SegmentButton = connect()(SegmentButton)