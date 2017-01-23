
import './main.dev.scss';
import CathoChatBox from './CathoChatBox/CathoChatBox.js';
import React from 'react';

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <h1 className="app-title">Catho Chat Box</h1>

        <CathoChatBox />
      </div>

    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
