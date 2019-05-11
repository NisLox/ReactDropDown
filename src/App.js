import React from 'react';
import './App.css';
import { ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.select = this.select.bind(this);
    this.printInformation = this.printInformation.bind(this);
    this.state = {
      dropdownOpen: false,
      value : "Home"
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  select(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      value: event.target.innerText
    });
  }

  printInformation(){
    console.log(this.state.value)
  }

  render() {
    return (
      <div className="App">
       <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle>{this.state.value}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={this.select}>Work</DropdownItem>
          <DropdownItem onClick={this.select}>Contact</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>

      <button type="button" onClick={this.printInformation} class="btn btn-primary">Primary</button>
      </div>
    );
  }
}

export default App;
