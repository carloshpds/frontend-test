
import React from 'react';

import './overridesPublicPath.js';
import CathoChatBox from './CathoChatBox/CathoChatBox';

class AppComponent extends React.Component {
  render() {
    return (
      <CathoChatBox />
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
