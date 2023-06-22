import React, { Component } from 'react'
import styles from './style.module.css';
import SubContents from './SubContents';
import Advertisement from './Advertissement';
export default class Main extends Component {
  render() {
    return (
      <div className={styles.main}>
        <div className='flex'>
          <SubContents />
          <SubContents />
          <SubContents />
        </div>
        <Advertisement />
      </div>
    )
  }
}
