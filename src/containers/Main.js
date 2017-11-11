import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { logout } from '../reducer';

class Main extends React.Component {
  constructor() {
    super();
    this.toLogout = this.toLogout.bind(this);
  }

  toLogout() {
    this.props.dispatch(logout());
  }

  render() {
    const { token } = this.props;

    if (!token) {
      return <Redirect to="/login" />;
    }

    return (
      <div>
        You are logged in.
        <Link to="/login" onClick={this.toLogout} >Logout</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token
});

export default connect(mapStateToProps)(Main);
