import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, SearchBtn } from "../../components/Form";
import API from "../../utils/API";

class Articles extends Component {
  // Initialize this.state.books as an empty array
  state = {
    articles: []
  };

  // Add code here to get all books from the database and save them to this.state.books
  componentDidMount() {
    this.getTheArticles();
  }

  getTheArticles = query => {
    API.getArticles(query)
      .then(res => this.setState({ articles: res.data}))
      .catch(err => console.log(err));
  };

  // handleInputChange = event => {
  //   const books = event.target.books;
  //   const value = event.target.value;
  //   this.setState({
  //     [books]: value
  //   });
  // };

  // // When the form is submitted, search the Giphy API for `this.state.search`
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.getBooks(this.state.search);
  // };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1></h1>
            </Jumbotron>
            <form>
              <Input name="title" placeholder="Title (required)" />
              <Input name="author" placeholder="Author (required)" />
              <TextArea name="synopsis" placeholder="Synopsis (Optional)" />
              <SearchBtn>Search</SearchBtn>
            </form>
          </Col>
          <Col size="md-12">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>

                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
