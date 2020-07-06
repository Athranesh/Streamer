import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { Link } from 'react-router-dom';
import { fetchStream, deleteStream } from '../../actions';
import { connect } from 'react-redux';

class StreamDelete extends React.Component {
  componentDidMount() {
    const streamId = this.props.match.params.id;
    this.props.fetchStream(streamId);
  }

  onDelete = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  renderActions = () => {
    return (
      <React.Fragment>
        <Link className="ui button" to="/">
          Cancel
        </Link>
        <button className="ui button negative" onClick={this.onDelete}>
          Delete
        </button>
      </React.Fragment>
    );
  };

  renderContent() {
    return (
      <React.Fragment>
        Are you sure you want to delete the stream titled:
        <h3>{this.props.stream.title}</h3>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        {this.props.stream && (
          <Modal
            title="Delete Stream"
            content={this.renderContent()}
            actions={this.renderActions()}
            onDismiss={() => {
              history.push('/');
            }}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownState) => {
  const streamId = ownState.match.params.id;
  return { stream: state.streams[streamId] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
