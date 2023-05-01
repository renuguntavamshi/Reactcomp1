import './App.css';
import {Component} from 'react';
import {ClassComponent} from './Component/ClassComponent';
import FunctionComponent from './Component/FunctionComponent';
import React from 'react';
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showfunction: false,
      showclass: false

    }

  }
  show1 = () => {
    this.setState({
      showfunction:!this.state.showfunction
    })}
    show2 = () => {
      this.setState({
        showclass:!this.state.showclass
      })
  }
  render() {
    return (
      <div className='head'>
        <h1  className='mainheading'>Styling using Functional and Class Component</h1>
        <button className="btn1"  onClick={this.show2}>To see styling in Class Component</button>
         &nbsp; &nbsp;<button className="btn1" onClick={this.show1}>To see styling in Functional Component</button>
     <div id='maincontainer'>  
     {this.state.showfunction && <FunctionComponent/>}
     {this.state.showclass && <ClassComponent/>}
     </div>
      </div>
  
    );
  }
  
}

export default App;