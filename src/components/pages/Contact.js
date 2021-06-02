import React from 'react';
import { Link } from 'react-router-dom';

const Books = ({ books }) => {
    return (
      <div>
        <center><h1>Books List</h1></center>
        {books.map((books) => (
          <div className="card mt-2" key={books.id}>
            <div className="card-body">
              <h5 className="card-title">{books.bookName}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{books.author}</h6>
              <p className="card-text">{books.review}</p>
            </div>
          </div>
        ))}
      </div>
    )
  };
   class News extends React.Component {

    state = {
      books: []
    }
     componentDidMount() {
      fetch('https://mi-linux.wlv.ac.uk/~1922139/ci3/index.php/Api/books')
      .then(res => res.json())
      .then((data) => {
        this.setState({ books: data })
      })
      .catch(console.log)
    }
     render() {
      return (
        <Books books={this.state.books} />
      )
    }
  }
  
 export default News;