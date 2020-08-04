import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import aboutMeLogo from '../photos/about-me-logo.png';
import profilePic from '../photos/profile-pic.png';

export default class Home extends Component {
  render() {
    return (
    <div class='home-section about-page'>
      <img src={aboutMeLogo} id='about-me-image' alt='Lucia Brammer, full-stack engineer, biologist, artist and skater'/>
      <Divider orientation="vertical" flexItem />
      <img src={profilePic} id='profile-pic' alt='Lucia Brammer, full-stack engineer, biologist, artist and skater'/>
    </div>
    )
  }
}
