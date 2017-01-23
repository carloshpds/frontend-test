
import React from 'react';

import './overridesPublicPath.js';
import CategoryBrowse from './CategoryBrowse/CategoryBrowse';

class AppComponent extends React.Component {
  render() {
    return (
      <CategoryBrowse />
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
