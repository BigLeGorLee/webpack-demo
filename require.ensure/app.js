import React from 'react';

module.exports = React.createClass({
  render: function () {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="/dash">Dashboard</Link></li>
          </ul>
          Logged in as Jane
        </header>
        {this.props.children}
      </div>
    );
  }
});

