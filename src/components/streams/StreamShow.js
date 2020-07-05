import React from 'react';

const StreamShow = (props) => {
  return (
    <div>
      StreamShow
      <hr />
      Stream Id = {props.match.params.id}
    </div>
  );
};

export default StreamShow;
