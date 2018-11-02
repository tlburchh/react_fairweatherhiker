import axios from "axios";


//receive trails from Hiking API
const BASEURL = 'https://www.hikingproject.com/data/get-trails?';
const latRef =  'lat=';
const longRef = '&lon=';
const results = '&maxResults=50';
const APIKEY = '&key=200310958-80eadbd0eda211e9f1bec2cca75b17cb';
          export default {
  searchTrails: function(latitude, longitude) {
    return axios.get(BASEURL + latRef + latitude + longRef + longitude + results + APIKEY );
  },

};