import React from 'react';
import HeadCell from './HeadCell/HeadCell'

export default class TableHeader extends React.Component {
  handleClick = (name, reverse) => {
    this.props.onHandleClick(name, reverse);
  }

  render() {
    return (
      <thead>
        <tr>
          {this.props.headers.map((item, index) => 
            <HeadCell 
              key={index} 
              clickListener={this.handleClick} 
              name={item} item={item} 
              sortedName={this.props.sortedName}
            />
          )}
        </tr>
      </thead>
    );
  }
}
