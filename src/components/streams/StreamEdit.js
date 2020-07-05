import React from 'react';
import { fetchStream, editStream } from '../../actions';
import { connect } from 'react-redux';

import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  loadInitialValues() {
    let initialValues;
    if (this.props.stream) {
      initialValues = {
        title: this.props.stream.title,
        description: this.props.stream.description,
      };
    }
    return initialValues;
  }

  onSubmit = (formValues) => {
    const streamId = this.props.match.params.id;
    this.props.editStream(streamId, formValues);
  };

  render() {
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
          //initialValues is a specific redux-form property name and must be used as such to use those initial values. The object that is passed down must have key value pairs, with keys matching the names used in the form itself. In this example, the form has 2 names: title and description. Check Load initial values helper method in this component.
          initialValues={this.loadInitialValues()}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const currentId = ownProps.match.params.id;

  return { stream: state.streams[currentId] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
