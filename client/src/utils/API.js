import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const APIKEY = "8797868011be4f069df172672fab0310";

export default {
  // Gets all articles
  getArticles: function(response) {
    return axios.get(BASEURL + APIKEY)
    .then(function (err, response){
      response = JSON.parse(response);
      console.log(response);
    });
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get(BASEURL + APIKEY + id)
    .then(function (err, response){
      response = JSON.parse(response);
      console.log(response);
    });
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/saved/" + id);
  },
  // Saves a article to the database
  saveArticle: function(bookData) {
    return axios.post("/api/saved", bookData);
  }
};