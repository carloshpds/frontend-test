import { Component } from 'react';
import template from './CathoChatBox.template.rt';
import Talk from './Data/talk.js';
import './cathoChatBox.scss';

export default class CategoryBrowse extends Component {

  constructor(props){
    super(props);
    this.state = {
      popupIsOpen : false
    };
  }

  render(){
    return template.call(this);
  }

  componentWillMount(){
    let talkMessages = this.loadTalkMessages();
    this.setState({talkMessages}, () => {
      this.isLoading = false
    });
  }

  loadTalkMessages(){
    return Talk.talkMessages;
  }

  close(event) {
    this.props.onClose && this.props.onClose(event);
  }



  changePopupVisibility(isOpen){
    this.setState({
      popupIsOpen: isOpen
    });
  }

}