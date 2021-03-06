import React from 'react';
import { connect } from 'react-redux';
import Auth from 'Utilities/googleAuth';
import { LOGIN_ATTEMPT } from 'Actions/authentication';

class LoggedOutPage extends React.Component {

  onGoogleSignIn(googleUser) {
    let profile = googleUser.getBasicProfile();
    let token = googleUser.getAuthResponse().id_token;
    console.log(googleUser, googleUser.getHostedDomain());
    this.props.login(profile.getEmail(), token);
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

const mapStateToProps = () => { return {}; };
const mapDispatchToProps = {
  login: LOGIN_ATTEMPT,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoggedOutPage);