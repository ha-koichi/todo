import axios from 'axios';
import Config from 'react-native-config';

export default function() {
  const request = axios.create({
    baseURL: 'http://weather.livedoor.com'
  })
  request.get('/forecast/rss/area/130010.xml')
  .then(res => {
    alert(res.data)
    return res.data;
  })
  .done();
};

function xmlPerser(xml) {
  var parser = new DOMParser();
  return parser.parseFromString(xml, "application/xml");
}