import React from 'react';
import { Link } from 'react-router-dom';

class Books extends React.Component {
	constructor(props) {
		super(props);
		this.state = {Book: []};
		this.headers = [
			{ key: 'id', label: 'Id'},
			{ key: 'bookname', label: 'bookName' },
			{ key: 'author', label: 'author' }
		];
		this.deleteBook = this.deleteBook.bind(this);
	}
	 
	componentDidMount() {
		fetch('https://mi-linux.wlv.ac.uk/~1922139/ci3/index.php/Api/books')
			.then(response => {
				return response.json();
			}).then(result => {
				console.log(result);
				this.setState({
					book:result
				});
			});
	}
	
	deleteBook(id) {
		if(window.confirm("Are you sure want to delete?")) {
			fetch('https://mi-linux.wlv.ac.uk/~1922139/ci3/index.php/Api/delete_books' + id, {
                                method : 'DELETE'
                                   }).then(response => { 
					if(response.status === 200) {
						alert("Website deleted successfully");
                                                fetch('https://mi-linux.wlv.ac.uk/~1922139/ci3/index.php/Api/books')
						.then(response => {
							return response.json();
						}).then(result => {
							console.log(result);
							this.setState({
								book:result
							});
						});
					} 
			 });
		}
	}
	
	render() {
		return (
			<div id="container">
				<Link to="/Create">Add Books</Link>
				<p/>
				<table>
					<thead>
						<tr>
						{
							this.headers.map(function(h) {
								return (
									<th key = {h.key}>{h.label}</th>
								)
							})
						}
						  <th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{ this.state.Book.map(function(item, key) {
							return (
								<tr key = {key}>
								  <td>{item.id}</td>
								  <td>{item.bookName}</td>
								  <td>{item.author}</td>
								  <td>
										<Link to={`/Update/${item.id}`}>Edit</Link>
										 
										<a href="javascript:void(0);" onClick={this.deleteWebsite.bind(this, item.id)}>Delete</a>
								  </td>
								</tr>
											)
							}.bind(this))
						}
					</tbody>
				</table>
			</div>
		)
	}
}

export default Books;
//lecturer methods
/*const Books = ({ books }) => {
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
   class Newbooks extends React.Component {

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
  
 export default Newbooks;*/