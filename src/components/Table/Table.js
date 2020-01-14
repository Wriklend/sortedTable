import React from 'react';
import { connect } from 'react-redux';
import { loadProfiles, getSortProfiles } from '../../redux/profiles/actions';
import TableHeader from './TableHeader/TableHeader';
import store from '../../redux/store/store';

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
    };
  }
  
  static getDerivedStateFromProps(props) {
    return {
      profiles: props.profiles
    };
  }

  getHeaders = () => {
    let headers = [];
    for (let key in this.state.profiles[0]) {
      headers.push(key);
    }
    return headers;
  }

  sortFunc = (name) => {
    return this.props.profiles.sort((a, b) => {
      if (a[name] > b[name]) return 1;
      if (a[name] === b[name]) return 0;
      if (a[name] < b[name]) return -1;
    });
  }

  getSort = (name) => {
    this.setState({
      profiles: this.sortFunc(name),
    })
  }

  showState = () => {
    console.log(this.state, 'state');
    console.log(this.props, 'props');
  }

  render() {
    console.log('table render')
    return (
      <table border='1'>
        <TableHeader headers={this.getHeaders()} onHandleClick={this.getSort}/>
        <tbody>
        {this.state.profiles.map((elem, index) => 
          <tr key={index}>
            {this.getHeaders().map((item, index) => 
            <td key={index} onClick={this.showState}>{elem[item]}</td>
            )}
          </tr>
        )}
        </tbody>
      </table>
    );
  }
}



