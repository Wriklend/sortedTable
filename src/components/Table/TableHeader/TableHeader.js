import React from 'react';

export default class TableHeader extends React.Component {
  handleClick = (e) => {
    e.persist()
    this.props.onHandleClick(e.target.attributes.name.value);
  }

  render() {
    return (
      <thead>
        <tr>
          {this.props.headers.map((item, index) => 
            <th key={index} onClick={this.handleClick} name={item}>
              {item}
            </th>
          )}
        </tr>
      </thead>
    );
  }
}
