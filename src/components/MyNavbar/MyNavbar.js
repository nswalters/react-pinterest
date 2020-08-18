import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import PropTypes from 'prop-types';

import Auth from '../Auth/Auth';

class MyNavbar extends React.Component {
  static propTypes = {
    authed: PropTypes.bool.isRequired,
  }

  logoutClickEvent = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;

    const loadComponent = () => {
      if (authed) {
        return (
          <button className="btn btn-secondary ml-auto" onClick={this.logoutClickEvent}>Log Out</button>
        );
      }

      return <Auth />;
    };

    return (
      <div>
        <nav className="navbar navbar-light bg-dark">
          <span className="navbar-brand mb-0 h1 text-light">Navbar</span>
          {loadComponent()}
        </nav>
      </div>
    );
  }
}

export default MyNavbar;
