import React, { Component } from 'react'
const github = require('../photos/github.png')
const linkedin = require('../photos/linkedin.png')
const email = require('../photos/mail.png')

const openLinkedIn = () => {
  window.open('https://www.linkedin.com/in/luciabrammer/')
}

const openGithub = () => {
  window.open('https://github.com/brammerl')
}

export default class Contact extends Component {
  render() {
    return (
      <div id='contact-body'>
        <div class='contact-main'>
          <div>
            <img src={github} alt='link to github' className='icon' onClick={()=> openGithub()}/>
          </div>
          <div>
            <img src={linkedin} alt='link to github' className='icon' onClick={() => openLinkedIn()}/>
          </div>
          <div>
            <a href='mailto:brammerl96@gmail.com'>
            <img src={email} alt='link to github' className='icon'/>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
