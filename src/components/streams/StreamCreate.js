import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends React.Component {
  renderError(meta) {
    if (meta.submitFailed && meta.error) {
      return (
        <div className="ui error error message">
          <div className="header">{meta.error}</div>
        </div>
      );
    }
  }

  renderInput = (formProps) => {
    const className = `field ${
      formProps.meta.error && formProps.meta.submitFailed ? 'error' : ''
    }`;

    return (
      <div className={className}>
        <label>{formProps.label}</label>
        <input {...formProps.input} />

        {this.renderError(formProps.meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
    //redux form's handle submit automatically does e.preventDefault()

    this.props.createStream(formValues);
  };

  render() {
    return (
      <form
        //handle submit is a prop given by redux form, to which- our own helper method of onSubmit is passed.

        //Form has a className of error, a semantic UI requirement that displays errors on the form. Without it, errors will be hidden.
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field label="Enter Title" name="title" component={this.renderInput} />
        <Field
          label="Enter Description"
          name="description"
          component={this.renderInput}
        />
        <button className="ui button purple">Submit</button>
      </form>
    );
  }
}

/*
Handled by redux form. If validate function returns an empty object, it means the validation has succeeded.

To fail the validation, an object must be returned with keys which are the form input names that failed the validation, and values which are error messages.

Redux form passes any returned errors as props to the same renderInput helper method that renders the fields.

NOTE: the key in the errors object MUST MATCH the name attribute of the corresponding Field component's name.
*/
const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'Please enter a title';
  }
  if (!formValues.description) {
    errors.description = 'Please enter a description';
  }

  return errors;
};

const formWrapped = reduxForm({
  form: 'streamCreate',
  validate,
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
