import React from 'react';
import { connect } from 'react-redux';
import { setAuth, trySignIn, trySignOut } from '../actions';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    this.props.setAuth();
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignInClick = () => {
    this.props.trySignIn();
  };
  onSignOutClick = () => {
    this.props.trySignOut();
  };

  renderSignInBtn() {
    return (
      <button onClick={this.onSignInClick} className="ui purple google button">
        <i className="google icon" />
        Sign In With Google
      </button>
    );
  }

  renderSignOutBtn() {
    return (
      <button onClick={this.onSignOutClick} className="ui purple google button">
        <i className="google icon" />
        Sign Out
      </button>
    );
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return;
    } else if (this.props.isSignedIn) {
      return this.renderSignOutBtn();
    } else {
      return this.renderSignInBtn();
    }
  }

  render() {
    console.log(this.props);
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStatetoProps = (state) => {
  return { isSignedIn: state.isSignedIn };
};

export default connect(mapStatetoProps, { setAuth, trySignIn, trySignOut })(
  GoogleAuth
);
