import React from 'react';
import './App.css';
import DropdownTest from "./dropdownTest"
import Button1 from "./Button1"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.select = this.select.bind(this);
    this.printInformation = this.printInformation.bind(this);
    this.state = {
      value : "Home"
    };
  }

  select(event) {
    this.setState({
      value: event.target.innerText
    });
  }

  printInformation(){
    console.log(this.state.value)
  }

  render() {
    return (
      <div className="App">
        <DropdownTest dropdownOpen={this.state.dropdownOpen} dropdownValue={this.state.value} selectedValue={this.select}/>
        <Button1 passPrint={this.printInformation}/>
      </div>
    );
  }
}

export default App;
