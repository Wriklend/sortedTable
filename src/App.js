import React from 'react';
import Table from './components/Table/Table';

export default class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Table profiles={this.props.profiles}/>
    );
  }
}
