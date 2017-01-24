import { Component } from 'react';
import template from './cathoChatHistory.template.rt';
import './styles/cathoChatHistory.scss';
import ME from '../Data/me.js';

export default class CathoChatHistory extends Component {

  constructor(props){
    super(props);

    this.me    = ME;
    this.state = {
      isLoading : true,
      talkMessages    :  props.talkMessages || [],
      talkMessagesMap : {}
    };
  }


  render(){
    return template.call(this);
  }

}