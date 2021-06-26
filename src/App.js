import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Nav'
import img1 from './images/logo.png';
import './App.css'
import { Button } from '@material-ui/core';
import Clock from 'react-live-clock';
import Sidebar from "react-sidebar";


class App extends Component {
  constructor(props){
  super(props);
   this.state = {
    List:[],
    count:0,
  }
}

increment=()=> {
  this.setState({count: this.state.count + 1});



  var today = new Date();
  var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

  var List = [...this.state.List];
  List.push(time);
  this.setState({List});
  

};



render(){

  return(
    <div>

      <Navbar expand="xl">
          <Navbar.Item align="center" style={{backgroundColor:"tomato",width: '100%',height: '100px' }}>
              <div class="time" style={{color:"whitesmoke",font:"italic",fontSize:"x-large"}}>Current time is : <nbsp></nbsp><Clock format="HH:mm:ss" interval={1000} ticking={true} /> </div>
          </Navbar.Item>
      </Navbar>

      <div class="split1 left1">
        <img align="left" src={img1} alt="logo" width="100%" height="16%" /> 
        <Sidebar class="button">

           <div class="height">
            <Button style={{backgroundColor:"#bf3b3b",color:"whitesmoke",font:"italic",fontSize:"large"}} className='counter' onClick={this.increment}>Click</Button>
            </div>
        </Sidebar>
      </div>   

 





      <div class="App">
          <ul >{this.state.List.map(function(List) {return <h2>You clicked at {List}</h2>})}</ul>                   
      </div>

  
    <div class="main-footer"> 
      <p align="center"  style={{color:"whitesmoke",font:"italic",fontSize:"x-large"}}>You cliked {this.state.count} times.</p>
    </div>
   

    </div>
  );

}
}

export default App;