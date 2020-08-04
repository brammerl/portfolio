import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import collage from '../photos/collage.png'
export default class About extends Component {
  render() {
    return (
      <div class='row, section-content'>
        <div class='column-1-2'>
          <div class='collage-container'>
            <img class='collage' src={collage} alt='a collage of lucia doing stuff'/>
          </div>
        </div>
        <Divider orientation="vertical" flexItem />
        <div class='column-2-2'>
            <h2 class='about-me-title title'>About Me</h2>
            <div className='about-me-text text'>
              <p>I am a full-stack engineer with a background in Biological resarch. My excitement for "mixing things up" is a testament to how much I enjoy working across the full-stack. I often utilize collaborative work that involves championing people as individuals and as a part of a team. 
                <br/>
                <br/>
                I believe that tech can be used to help others and in return inspire them to pay it forward. How do we use today's tech to create a better tomorrow? </p>
            </div>
            <div>
              <h2 class='title'>Not At My Desk? You Can Find Me:</h2>
              <ul>
                <li>
                  Skateboarding 
                </li>
                <li>
                  Creating something! (art, ditgital media, movement) 
                </li>
                <li>
                  Fostering animals 
                </li>
              </ul>
            </div>
        </div>
      </div>
    )
  }
}
