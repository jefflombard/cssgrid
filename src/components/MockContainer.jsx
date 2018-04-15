import React, { Component } from 'react';
import MockArticle from './MockArticle';
import MockFooter from './MockFooter';
import MockHeader from './MockHeader';
import MockNav from './MockNav';

import './MockContainer.css';

class MockContainer extends Component {
  render() {
    return (
      <div className="mock-container">
        <MockHeader />
        <MockNav />
        <MockArticle />
        <MockFooter />
      </div>
    );
  }
}

export default MockContainer;
