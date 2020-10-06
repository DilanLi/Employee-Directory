import axios from "axios";
const BASEURL = "https://acnhapi.com/v1a/villagers/";


export default {
  search: function(id) {
    let results = axios.get(BASEURL + id);
    console.log(results)
    return results;
  }
};