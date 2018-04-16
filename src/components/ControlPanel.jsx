import React, { Component } from 'react';
import MockArticle from './MockArticle';
import MockFooter from './MockFooter';
import MockHeader from './MockHeader';
import MockNav from './MockNav';

import './ControlPanel.css';
import defaultLayoutImage from '../images/default.svg';
import smLayoutImage from '../images/sm.svg';
import mdLayoutImage from '../images/md.svg';
import lgLayoutImage from '../images/lg.svg';

class ControlPanel extends Component {
  constructor(props){
      super(props);
      this.state = {
          activeLayout: '',
          layout: {
              none: "",
              sm: `
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 
    "header nav"
    "article article"
    "footer footer";
}

.ad {
  display: none;
}
              `,
              md: `
.container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: 
    "header header"
    "nav article"
    "footer footer";
}

.ad {
  display: none;
}
              `,
              lg: `
.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-areas: 
    "header header header"
    "nav article ad"
    "footer footer footer";
}
              `,
              responsive: `
@media (max-width: 767px) {
  .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-areas: 
        "header nav"
        "article article"
        "footer footer";
  }
  .ad {
      display: none;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .container {
      display: grid;
      grid-template-columns: 1fr 3fr;
      grid-template-areas: 
        "header header"
        "nav article"
        "footer footer";
  }
  .ad {
      display: none;
  }
}

@media (min-width: 992px) {
  .container {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr;
      grid-template-areas: 
        "header header header"
        "nav article ad"
        "footer footer footer";
  }
}
              `
          }
      };
      
      this.handleSelectChange = this.handleSelectChange.bind(this);
  }
    
  render() {
    return (
      <div className="control-panel">
        <h1>EasyCSSGrid</h1>
        <h3>Layout Types</h3>
        <div className="layout-container">
            <div>
                <img src={defaultLayoutImage} />
                <p>Default</p>
            </div>
            <div>
                <img src={smLayoutImage} />
                <p>Small</p>
            </div>
            <div>
                <img src={mdLayoutImage} />
                <p>Medium</p>
            </div>
            <div>
                <img src={lgLayoutImage} />
                <p>Large</p>
            </div>
        </div>
        <p>Pick Layout Type:</p>
        <select onChange={this.handleSelectChange}>
          <option value="none">Default (No Rules)</option>
          <option value="sm">Small (for >375px)</option>
          <option value="md">Medium (for >768px)</option>
          <option value="lg">Large (for >992px)</option>
          <option value="responsive">Responsive (All applied at breakpoints)</option>
        </select>
        <h3>CSS</h3>
        <p>Container Div Rules</p>
        <textArea style={{width: '100%',height:'100px'}}>
            {this.state.activeLayout}
        </textArea>
        <p>Component Div Rules</p>
        <textArea style={{width: '100%',height:'100px'}}>
        {`
.header {
  grid-area: header;
}

.footer {
  grid-area: footer;
}

.nav {
  grid-area: nav;
}

.article {
  grid-area: article;
}

.ad {
  grid-area: ad;
}
        `}
        </textArea>
        <h3>Contribute</h3>
        <p><a href="">View GitHub Repo</a></p>
        <p>Inspired by <a href="https://cvan.io/flexboxin5/">Flexbox in 5</a></p>
      </div>
    );
  }
  
  handleSelectChange(event){
      const cssClass = event.target.value;
      this.setState({activeLayout : this.state.layout[cssClass]})
      this.props.setCSS(cssClass);
  }
}

export default ControlPanel;
