import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  //onSubmit method will be passed down to StreamForm child as a prop
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    if (this.props.initialValues) {
      console.log(this.props.initialValues);
    }
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createStream })(StreamCreate);
