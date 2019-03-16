import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import { connect } from 'react-redux'

// import {getWeather} from '../Api';
// import Api from '../Api'
import axios from 'axios';
import Config from 'react-native-config';

import WeatherList from './WeatherList'

export class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locations: ['東京', '大阪'],
      weatherList: {},
      main: {},
      weather: ''
      // w: []
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
    console.log(query)
    // weatherList.push(query)
    axios.get(query)
    .then( response => {
      console.log(response.data.weather[0])
      // return value
      // weatherList.concat(value)
      this.setState({ 
        weatherList: response.data,
        weather: response.data.weather[0],
        temps: response.data.main,
       });
    })
    .catch((error) => console.error(error));
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.location}>
          <Text style={styles.location}>{this.state.locations[this.props.select]}</Text>
        </View>
        <WeatherList temps={this.state.temps} weather={this.state.weather}/>
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

export default connect(
  mapStateToProps
)(Weather)