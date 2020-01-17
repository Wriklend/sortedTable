import React from 'react';

export default class HeadCell extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reverse: false,
    }
  }

  handleClick = (e) => {
    e.persist();
    if (this.props.item !== this.props.sortedName) {
      this.setState({ reverse: false })
    }

    this.props.clickListener(this.props.item, this.state.reverse);
    this.setState({
      reverse: !this.state.reverse,
    });
  }

  render() {
    return (
      <th onClick={this.handleClick}>
        {this.props.item}
      </th>
    );
  }
}
