import React from 'react';
import HeaderIndex from './Header.js';
import Home from './Home.js';
import Content from './content/Controller.js';
import Footer from './Footer.js';

import './App.css';


class App extends React.Component {

	state = {
		SelectId: 0
	}

	updateData = (id) => {
		this.setState({ SelectId: id })
	}
  render() {
    var element;
    if (this.state.SelectId === 0){
      element = <Home updateData = {this.updateData} />;
    } else {
      element = Content[this.state.SelectId].name;
    }
    return (
      <div className="container">
        <HeaderIndex updateData = {this.updateData} id = {this.state.SelectId}/>

        {element}
        
        <Footer />
      </div>
      )
  }
}



export default App;
