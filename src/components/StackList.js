import React, { Component } from 'react'

export default class StackList extends Component {
  render() {
    return (
      <div>
        <h2 className='title'>Tech</h2>
        <div className='tech-card-container'>
          <div className='tech-card'>
              <h3 className='subtitle'>Languages</h3>
              <li>JavaScript</li>
              <li>CSS</li>
              <li>HTML</li>
              <li>R</li>
          </div>
          <div className='tech-card'>
            <h3 className='subtitle'>Frameworks</h3>
            <li>React</li>
            <li>Redux</li>
            <li>Express</li>
          </div>
          <div className='tech-card'>
            <h3 className='subtitle'>Tools</h3>
            <li>Node.js</li>
            <li>Compass</li>
            <li>Netlify</li>
          </div>
          <div className='tech-card'>
            <h3 className='subtitle'>Testing</h3>
            <li>Jest</li>
            <li>Supertest</li>
            <li>Travis CI</li>
          </div>
          <div className='tech-card'>
            <h3 className='subtitle'>Currently Learning</h3>
            <li>Python</li>
          </div>
          </div>
      </div>
    )
  }
}
