import React, { Component } from 'react';
import MockArticle from './MockArticle';
import MockFooter from './MockFooter';
import MockHeader from './MockHeader';
import MockNav from './MockNav';
import MockAd from './MockAd';

import './MockContainer.css';

class MockContainer extends Component {
  render() {
    return (
      <div className={'mock-container ' + this.props.activeCss}>
        <MockHeader />
        <MockNav />
        <MockArticle />
        <MockAd />
        <MockFooter />
      </div>
    );
  }
}

export default MockContainer;
