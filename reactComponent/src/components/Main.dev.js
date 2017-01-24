
import './main.dev.scss';
import CathoChatBox from './CathoChatBox/CathoChatBox.js';
import template from './main.dev.template.rt';
import React from 'react';

class AppComponent extends React.Component {

  constructor(props){
     super(props);
     this.state = {
       chatBoxIsAlive: true
     }
  }

  render() {
    return template.call(this);
  }

  setChatAlive(isAlive){
    this.setState({ chatBoxIsAlive: isAlive });
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
