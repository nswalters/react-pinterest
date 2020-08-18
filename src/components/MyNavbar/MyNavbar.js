import React from 'react';

class MyNavbar extends React.Component {
  render() {
    const { authed } = this.props;

    const loadComponent = () => {
      if (authed) {
        return (
          <button className="btn btn-secondary ml-auto">Log Out</button>
        );
      }

      return null;
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
