import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { connect } from 'react-redux'
import axios from 'axios';
import Config from 'react-native-config';

import { getWeather } from '../actions'
import WeatherList from './WeatherList'

export class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locations: ['東京', '大阪'],
    };
  }

  componentDidMount(){
    this.fetchData(this.props.select)
    
  }
  componentDidUpdate(prevProps){
    if (this.props.select !== prevProps.select) {
      this.fetchData(this.props.select);
    }
  }

  fetchData(select) {
    const weatherUrls = [
      'Tokyo',
      'Osaka'
    ]
    const url = 'http://api.openweathermap.org/data/2.5/weather?units=metric&q='
    let query = url + weatherUrls[select] + ',japan&APPID=' + Config.APPID
    // weatherList.push(query)
    axios.get(query)
    .then( response => {
      // return value
      // weatherList.concat(value)
      this.props.getWeather(response.data);
    })
    .catch((error) => console.error(error));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.location}>
          <Text style={styles.location}>{this.state.locations[this.props.select]}</Text>
        </View>
        <WeatherList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
  },
  location: {
    justifyContent: 'center',
    flexDirection: 'row',
  }
});

const mapStateToProps = state => ({
  select: state.data.select
})

const mapDispatchToProps = {
  getWeather
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather)