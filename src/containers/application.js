import React from 'react';
import { connect } from 'react-redux';
import LoggedOutPage from 'Pages/loggedOutPage';
import AuthorizedContainer from 'Containers/authorized';

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