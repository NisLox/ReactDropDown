import React from 'react';
import { ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';

class dropdownTest extends React.Component {

    render() {
        return (
          <div >
           <ButtonDropdown isOpen={this.props.dropdownOpen} toggle={this.props.toggle}>
            <DropdownToggle>{this.props.dropdownValue}</DropdownToggle>
            <DropdownMenu>
              <DropdownItem onClick={this.props.selectedValue}>Work</DropdownItem>
              <DropdownItem onClick={this.props.selectedValue}>Contact</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
    
          </div>
        );
      }
    }

export default dropdownTest;
