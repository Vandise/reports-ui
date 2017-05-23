import React from 'react';
import Auth from '../util/googleAuth';

export default class LoggedOutPage extends React.Component {

  submit(e) {
    e.preventDefault();
  }

  onGoogleSignIn(googleUser) {
    let profile = googleUser.getBasicProfile();
    let token = googleUser.getAuthResponse().id_token;
    console.log(googleUser, profile, token);
  }

  componentDidMount() {
    Auth.renderLoginButton('google-sign-in', this.onGoogleSignIn.bind(this), (f) => {
      console.log(f);
    });
  }

  render() {
    return (
      <div className='page-loggedout'>
        <div className='vertical-center'>
          <div id='google-sign-in' className='google-sign-in'>Log in with <span className='google'>Google</span></div>
        </div>
      </div>
    );
  }
}
