import React from 'react';
import { connect } from 'react-redux';
import LoggedOutPage from '../pages/loggedOutPage';
import AuthorizedContainer from '../containers/authorized';

const mapDispatchToProps = {};
const mapStateToProps = state => ({
  isLoggedIn: state.authentication.isLoggedIn,
  currentUser: state.authentication.currentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(({ children, isLoggedIn }) => {
  return (
    <div className='application-container'>
      { isLoggedIn ? <AuthorizedContainer children={children} /> : <LoggedOutPage /> }
    </div>
  );
});