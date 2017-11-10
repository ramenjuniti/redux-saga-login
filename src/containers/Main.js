import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

const Main = ({ token }) => {
  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      You are logged in.
      <Link to="/login">Logout</Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  token: state.auth.token
});

export default connect(mapStateToProps)(Main);