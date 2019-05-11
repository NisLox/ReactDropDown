import React from 'react';
import { ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';

class dropdownTest extends React.Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false,
        };
      }

      toggle() {
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }
    

    render() {
        return (
          <div >
           <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle>{this.props.dropdownValue}</DropdownToggle>
            <DropdownMenu>
                <DropdownItem onClick={this.props.selectedValue}>Home</DropdownItem>
                <DropdownItem onClick={this.props.selectedValue}>Work</DropdownItem>
                <DropdownItem onClick={this.props.selectedValue}>Contact</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
    
          </div>
        );
      }
    }

export default dropdownTest;
