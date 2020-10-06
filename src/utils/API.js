import axios from "axios";
const BASEURL = "http://acnhapi.com/v1/villagers/" + 2;


export default {
  search: function() {
    let results = axios.get(BASEURL);
    console.log(results)
    return results;
  }
};