import React from 'react';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '171877497873-1fonueo2nev151uf5kikg3g4ne36bfe2.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.setState({ isSignedIn: this.auth.isSignedIn.get() });

          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignInClick = () => {
    this.auth.signIn().catch((err) => {
      return;
    });
  };
  onSignOutClick = () => {
    this.auth.signOut();
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
    if (this.state.isSignedIn === null) {
      return;
    } else if (this.state.isSignedIn) {
      return this.renderSignOutBtn();
    } else {
      return this.renderSignInBtn();
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

export default GoogleAuth;
