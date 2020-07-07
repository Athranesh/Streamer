import React from 'react';
import { fetchStream } from '../../actions';
import { connect } from 'react-redux';

class StreamShow extends React.Component {
  componentDidMount() {
    const streamId = this.props.match.params.id;
    this.props.fetchStream(streamId);
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    const { title, description } = this.props.stream;

    return (
      <div>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const streamId = ownProps.match.params.id;
  return {
    stream: state.streams[streamId],
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
