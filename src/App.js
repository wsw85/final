import React from 'react';
//import ReactDOM from 'react-dom';
import HeaderIndex from './header_index.js';

import Content from './content/content_library.js';

import Footer from './footer.js';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
      <HeaderIndex />
      <Content />
      <Footer />
      </div>
      )
  }
}


export default App;
