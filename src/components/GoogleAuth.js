import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '171877497873-1fonueo2nev151uf5kikg3g4ne36bfe2.apps.googleusercontent.com',
        scope: 'email',
      });
    });
  }

  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
