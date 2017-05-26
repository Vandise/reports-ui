import React from 'react';
import { connect } from 'react-redux';
import { LOGOUT } from 'Actions/authentication';

const mapStateToProps = (state) => ({
  currentUser: state.authentication.currentUser,
});

const mapDispatchToProps = {
  logout: LOGOUT
};

export default connect(mapStateToProps, mapDispatchToProps)(({ currentUser, logout }) => {
  console.log(currentUser, logout);
  return (
    <div className='dashboard-container'>
      <a onClick={() => logout()}>Logout</a>
      <h1>Authorized to view this page</h1>
    </div>
  );
});