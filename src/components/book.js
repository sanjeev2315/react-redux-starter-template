import React from 'react';
import { Card, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default function BookCard({book, deleteBook}) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          <Icon name='book outline'/> {book.name}
        </Card.Header>
        <Card.Description>
          <p><Icon name='user outline'/> {book.author}</p>
          <p><Icon name='dollar outline'/> {book.price}</p>
          <p><Icon name='info outline'/> {book.genre}</p>
          <p><Icon name='star outline'/> {book.rating}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Link to={`/books/edit/${book._id}`} className="ui basic button green">Edit</Link>
          <Button basic color="red" onClick={() => deleteBook(book._id)} >Delete</Button>
        </div>
      </Card.Content>
    </Card>
  )
}


BookCard.propTypes = {
  book: React.PropTypes.object.isRequired
}
