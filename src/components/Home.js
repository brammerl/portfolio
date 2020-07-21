import React, { Component } from 'react';
import mainPage from '../photos/main-page.png';

export default class Home extends Component {
  render() {
    return (
    <div class='main-section about-page'>
      <img src={mainPage} id='about-me-image' alt='Lucia Brammer, full-stack engineer, biologist, artist and skater'/>
    </div>
    )
  }
}
