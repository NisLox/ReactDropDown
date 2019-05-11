import React from 'react';
import './App.css';
import { ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import DropdownTest from "./dropdownTest"

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
        <button type="button" onClick={this.printInformation} class="btn btn-primary">Primary</button>
      </div>
    );
  }
}

export default App;
