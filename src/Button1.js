import React from 'react';

class button1 extends React.Component {
  

    render() {
        return (
          <div >
            <button type="button" onClick={this.props.passPrint} class="btn btn-primary">Primary</button>
          </div>
        );
      }
    }

export default button1;
