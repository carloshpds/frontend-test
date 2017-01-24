import { Component } from 'react';
import template from './cathoChatBox.template.rt';
import Talk from './Data/talk.js';
import moment from 'moment';
import './cathoChatBox.scss';
import ME from './Data/me.js';


moment.lang('pt-br');

export default class CategoryBrowse extends Component {

  constructor(props){
    super(props);
    this.state = {
      popupIsOpen : true
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

  submitMessage(event){
    event.preventDefault();

    if(this.message.value){
      let time = new Date().getTime()
      let talkMessages = this.state.talkMessages;
      talkMessages.push({
        id: time,
        user: ME,
        message: {
          time:  time,
          alreadyRead: false,
          message: this.message.value
        }
      });

      this.setState({talkMessages}, () => {
        this.message.value = '';
      });
    }
  }



  changePopupVisibility(isOpen){
    this.setState({
      popupIsOpen: isOpen
    });
  }

}