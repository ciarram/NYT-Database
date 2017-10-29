import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// queryUrl += '?' + $.param({
//   'api-key': "a7584e5fb7714de09e6a8e16cfffce8b”, ‘begin_date’: “20100710",
//   'end-date': "20140710"
// });
const APIKEY = "8797868011be4f069df172672fab0310";

export default {
  // Gets all articles
  getArticles: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
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