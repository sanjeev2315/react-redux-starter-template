import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';

const validate = (values) => {
  const errors = {};
  if(!values.name) {
    errors.name = {
      message: 'You need to provide Book Name'
    }
  }
  if(!values.author) {
    errors.author = {
      message: 'You need to provide Author Name'
    }
  }if(!values.genre) {
    errors.genre = {
      message: 'You need to provide Genre Name'
    }
  } if(!values.rating) {
    errors.rating = {
      message: 'You need to provide Rating'
    }
  } if(!values.price) {
    errors.price = {
      message: 'You need to provide book price'
    }
   }
 
  return errors;
}

class BookForm extends Component {

  componentWillReceiveProps = (nextProps) => { // Load Book Asynchronously
    const { book } = nextProps;
    if(book._id !== this.props.book._id) { // Initialize form only once
      this.props.initialize(book)
    }
  }

  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <Form.Field className={classnames({error:touched && error})}>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span className="error">{error.message}</span>}
    </Form.Field>
  )

  render() {
    const { handleSubmit, pristine, submitting, loading, book } = this.props;
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <h1 style={{marginTop:"1em"}}>{book._id ? 'Edit Book' : 'Add New Book'}</h1>
          <Form onSubmit={handleSubmit} loading={loading}>
            <Field name="name" type="text" component={this.renderField} label="Name"/>
              <Field name="author" type="text" component={this.renderField} label="Author"/>
              <Field name="price" type="text" component={this.renderField} label="Price"/>
            <Field name="genre" type="text" component={this.renderField} label="Genre"/>
            <Field name="rating" type="text" component={this.renderField} label="Rating"/>
            <Button primary type='submit' disabled={pristine || submitting}>Save</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form: 'book', validate})(BookForm);
