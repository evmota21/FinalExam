import React from 'react';
import './App.css';
import Book from './Book';
import BookForm from './BookForm';

class App extends React.Component{

  constructor( props ){
    super( props );
    this.state = {
      title : "",
      author : "",
      thumbnail : "",
      snippet : "",
      array : [{
        title : ""
      }]
    }
  }

  submitTest = (event) =>{
    event.preventDefault();

    let bookName = event.currentTarget.BookName.value;

    console.log(bookName);

    const url = `https://www.googleapis.com/books/v1/volumes?q=${bookName}`;

    const settings = {
      method : 'GET'
    }

    fetch( url, settings )
        .then( response => {
          if(response.ok){
            return response.json();
          }
          throw new Error( response.statusText );
        })
        .then ( responseJSON => {
          console.log(responseJSON);
          for( let i = 0; i < responseJSON.items.length; i++){
            this.setState({
              title : responseJSON.items[i].volumeInfo.title,
              author : responseJSON.items[i].volumeInfo.authors[0],
              thumbnail : responseJSON.items[i].volumeInfo.imageLinks.thumbnail,
              snippet : responseJSON.items[i].searchInfo.textSnippet
            })
            console.log(this.state.title);
            console.log(this.state.author);
        }
        })
        .catch( err => {
          console.log(err);
        })


  }

  render(){
    return(
      <div>
        <BookForm submitTest = {this.submitTest} />
        <Book bookTitle = {this.state.title} bookAuthor = {this.state.author} bookThumb = {this.state.thumbnail} bookSnippet = {this.state.snippet} />
      </div>
    )
  }

}

export default App;
