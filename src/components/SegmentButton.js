import React, { Component } from 'react';
import { SegmentedControlIOS, StyleSheet, View, Text } from 'react-native';

import { connect } from 'react-redux'
import { setSelect } from '../actions'

export class SegmentButton extends Component {

  render() {
    return (
      <View style={styles.container}>
        <SegmentedControlIOS
          values={['東京', '大阪']}
          selectedIndex={this.props.select}
          onChange={(event) => {
            this.props.setSelect(event.nativeEvent.selectedSegmentIndex)
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

const mapStateToProps = state => ({
  select: state.data.select
})

const mapDispatchToProps = {
  setSelect
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SegmentButton)
