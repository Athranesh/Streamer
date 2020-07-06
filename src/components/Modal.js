import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="ui dimmer modals visible active" onClick={props.onDismiss}>
      {
        //we add onClick={(e) => e.stopPropagation()} to the element below. The reason is, in the absense of it, the onClick event handler of its parent element will be activated even if event happens on its child element through event propogation. Adding stopPropogation to the element below it stops that from happening, and the event handling of history.push will only happen on the parent element}
      }
      <div
        className="ui standard modal visible active"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="header">{props.title}</div>
        <div className="content">{props.content}</div>
        <div className="actions">{props.actions}</div>
      </div>
    </div>,

    document.querySelector('#modal')
  );
};

export default Modal;
