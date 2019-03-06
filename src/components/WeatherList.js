import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  ListView,
  View,
} from 'react-native';

export default class WeatherList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [{},{}],
    };
  }


  render() {
    return (
      <View style={styles.ListContainer}>
        <FlatList
          data={[
            {key: '温度'},
            {key: '湿度'},
            {key: '気温差'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ListContainer: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    borderWidth: 0.5,
    borderTopColor: '#FF00FF00',
  },
});