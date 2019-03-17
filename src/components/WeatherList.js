import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  FlatList,
  ListView,
  View,
} from 'react-native';
import { connect } from 'react-redux'

export class WeatherList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      temps: {
        temp: '',
        temp_max: '',
        temp_min: ''
      },
      weather: {
        description: ''
      }
    };
  }

  componentDidUpdate(prevProps){
    if (this.props.weather !== prevProps.weather) {
      this.setState({
        temps: this.props.weather.main,
        weather: this.props.weather.weather[0],
      });
    }
  }

  render() {
    return (
      <View style={styles.ListContainer}>
        <FlatList
          data={[
            {key: '天気', param: this.state.weather.description},
            {key: '温度', param: this.state.temps.temp},
            {key: '最高温度', param: this.state.temps.temp_max},
            {key: '最低温度', param: this.state.temps.temp_min},
          ]}
          renderItem={({item}) => 
            <Text style={styles.item}>
                <Text>{item.key}</Text>
                <Text>： </Text>
                <Text>{item.param}</Text>
            </Text>
          }
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

const mapStateToProps = state => ({
  weather: state.data.weather
})

export default connect(
  mapStateToProps
)(WeatherList)