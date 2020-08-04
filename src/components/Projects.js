import React, { Component } from 'react'
import StackList from './StackList';
import AffirmeCard from './Affirme-Card';
import CryptoCard from './Crypto-Stimulus-Card'
import Divider from '@material-ui/core/Divider';

export default class Projects extends Component {
  render() {
    return (
      <div className='row section-content'>
        <div className='column-1-2'>
        <StackList/>
        </div>
        <Divider orientation="vertical" flexItem />
        <div class='column-2-2-projects'>
          <h3 className='title'> Projects </h3>
          <div class='card'>
          <AffirmeCard/>
          </div>
          <div class='card'>
          <CryptoCard/>
          </div>   
        </div>
      </div>
    )
  }
}
