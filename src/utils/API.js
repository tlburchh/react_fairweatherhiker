import axios from "axios";


//receive trails from Hiking API
// const PROXY = 'urlreq.appspot.com/req?method=GET&url='
// const BASEURL = 'https://www.hikingproject.com/data/get-trails?';
// const latRef =  'lat=';
// const longRef = '&lon=';
// const results = '&maxResults=50';
// const KEY = '&key=200310958-80eadbd0eda211e9f1bec2cca75b17cb';

          export default {
  searchTrails: function(latitude, longitude) {
    return axios.get('http://urlreq.appspot.com/req?method=GET&url=https%3A%2F%2Fwww.hikingproject.com%2Fdata%2Fget-trails%3Flat%3D' + latitude + '%26lon%3D' + longitude + '%26maxResults%3D75%26maxDistance%3D15%26key%3D200310958-80eadbd0eda211e9f1bec2cca75b17cb');
  },
};