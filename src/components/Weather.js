import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import * as rssParser from 'react-native-rss-parser';

// import {getWeather} from '../Api';
// import Api from '../Api'
import axios from 'axios';
import WeatherList from './WeatherList'
import SegmentButton from './SegmentButton'

export default class Weather extends Component {

  constructor(props) {
    super(props);
    this.state = {
      location: ['東京', '大阪'],
      weatherList: [],
    };
  }

  // fetch() {
  //   const request = axios.create({
  //     baseURL: 'http://weather.livedoor.com'
  //   })
  //   request.get('/forecast/rss/area/130010.xml')
  //   .then(res => {
  //     alert(res.data)
  //     return res.data;
  //   });
  // };

  componentDidMount(){
    this.fetchData()
    // this.setState({
    //   forecast: Api()
    // });
    // alert(await Api())
  }
  
  fetchData() {
    const request = axios.create({
      baseURL: 'http://weather.livedoor.com'
    })
    const parseString = require('react-native-xml2js').parseString;
    request.get('/forecast/rss/area/130010.xml')
    .then(res => {
      parseString(res.data, function (err, result) {
        console.log(rssParser.parse(res.data))
        this.setState({ weatherList: rssParser.parse(res.data)});
      })
    })
    .catch(function(error) {
      console.log(error)
    })
    // .then(res => {
    //   rssParser.parse(res.data) 
    //     his.setState({ weatherList: res.data})
       
      // parseString(res.data, function (err, result) {
      //   alert(res.data.class)
      //   // this.setState({ forecast: result});
      // });
      // const parser = xml2js.Parser()
      // parser.parseString(xml, (err, result) => {
      //   this.setState({ forecast: result});
      // });
      // xml = new XMLParser().parseFromString(res.data)
      // this.setState({forecast: xml})
    // })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.location[this.props.select]}</Text>
        <Text>{this.state.weatherList}</Text>
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
    // height: 20,
    flex: 4,
    // marginTop: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
});

