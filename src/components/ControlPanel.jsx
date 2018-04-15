import React, { Component } from 'react';
import MockArticle from './MockArticle';
import MockFooter from './MockFooter';
import MockHeader from './MockHeader';
import MockNav from './MockNav';

import './ControlPanel.css';

class ControlPanel extends Component {
  render() {
    return (
      <div className="control-panel">
        <h1>ControlPanel</h1>
        <h3>Layout Types</h3>
        <p>Pick Layout Type:</p>
        <select>
          <option value="none">Default (No Rules)</option>
          <option value="sm">Small (for >375px)</option>
          <option value="md">Medium (for >768px)</option>
          <option value="lg">Large (for >992px)</option>
          <option value="responsive">Responsive (Resize the window)</option>
          <option value="custom">Custom</option>
        </select>
        <h3>CSS</h3>
        <p>Container Div Rules</p>
        <p>Layout Rules</p>
        <p>Custom</p>
        <textArea style={{width: '100%',height:'100px'}}/>
        <h3>Contribute</h3>
        <p><a href="">View GitHub Repo</a></p>
        <p>Inspired by <a href="https://cvan.io/flexboxin5/">Flexbox in 5</a></p>
      </div>
    );
  }
}

export default ControlPanel;
