import React from 'react';
import TableHeader from './TableHeader/TableHeader';

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedBy: '',
      reversed: false,
    };
  }

  componentDidMount = () => {
    if (localStorage.getItem('sorting')) {
      this.setState({
        sortedBy: JSON.parse(localStorage.getItem('sorting')).sortedBy,
        reversed: JSON.parse(localStorage.getItem('sorting')).reversed,
      });
    }
  }

  getHeaders = () => {
    let headers = new Set();
      this.props.profiles.forEach(item => {
        for (let key in item) {
          headers.add(key);
        }
      });
    return headers;
  }

  sortFunc = (sorting) => {
    if (sorting.reversed) {
      // eslint-disable-next-line array-callback-return
      return this.props.profiles.sort((a, b) => {
        if (a[sorting.sortedBy] > b[sorting.sortedBy]) return 1;
        if (a[sorting.sortedBy] === b[sorting.sortedBy]) return 0;
        if (a[sorting.sortedBy] < b[sorting.sortedBy]) return -1;
      }).reverse();
    }

    // eslint-disable-next-line array-callback-return
    return this.props.profiles.sort((a, b) => {
      if (a[sorting.sortedBy] > b[sorting.sortedBy]) return 1;
      if (a[sorting.sortedBy] === b[sorting.sortedBy]) return 0;
      if (a[sorting.sortedBy] < b[sorting.sortedBy]) return -1;
    });
  }

  getSort = (name) => {
    if (name === this.state.sortedBy) {
      localStorage.setItem('sorting', JSON.stringify({
        sortedBy: name,
        reversed: !this.state.reversed
      }));
      this.setState({
        sortedBy: name,
        reversed: !this.state.reversed,
      });
      return;
    }

    localStorage.setItem('sorting', JSON.stringify({
      sortedBy: name,
      reversed: false
    }));
    this.setState({
      sortedBy: name,
      reversed: false,
    });
  }

  render() {
    if (localStorage.getItem('sorting')) {
      return (
        <table border='1'>
          <TableHeader headers={[...this.getHeaders()]} onHandleClick={this.getSort}/>
          <tbody>
            {this.sortFunc(JSON.parse(localStorage.getItem('sorting'))).map((elem, index) => 
              <tr key={index}>
                {[...this.getHeaders()].map((item, index) => 
                  <td key={index}>{elem[item]}</td>
                )}
              </tr>
              )}
          </tbody>
        </table>
      );
    }

    return (
      <table border='1'>
        <TableHeader headers={[...this.getHeaders()]} onHandleClick={this.getSort}/>
        <tbody>
          {this.props.profiles.map((elem, index) => 
            <tr key={index}>
              {[...this.getHeaders()].map((item, index) => 
                <td key={index}>{elem[item]}</td>
              )}
            </tr>
          )}
        </tbody>
      </table>
    );
  }
}
