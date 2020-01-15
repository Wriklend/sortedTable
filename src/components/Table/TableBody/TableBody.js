import React from 'react';

export default class TableBody extends React.Component {
  render() {
    return (
      <tr key={this.props.index}>
        {this.props.headers.map((item, index) => 
          <td key={index}>{this.props.elem[item]}</td>
        )}
      </tr>
    );
  }
}
