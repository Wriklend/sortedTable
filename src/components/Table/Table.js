import React from 'react';
import TableHeader from './TableHeader/TableHeader';
import TableBody from './TableBody/TableBody';

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
    // eslint-disable-next-line array-callback-return
    const getSorted = this.props.profiles.sort((a, b) => {
      if (a[sorting.sortedBy] > b[sorting.sortedBy]) return 1;
      if (a[sorting.sortedBy] === b[sorting.sortedBy]) return 0;
      if (a[sorting.sortedBy] < b[sorting.sortedBy]) return -1;
    });
    if (sorting.reversed) {
      return getSorted.reverse();
    }

    return getSorted;
  }

  getSort = (name) => {
    if (name === this.state.sortedBy) {
      const sortingRules = {
        sortedBy: name,
        reversed: !this.state.reversed
      }
      localStorage.setItem('sorting', JSON.stringify({
        ...sortingRules,
      }));
      this.setState({
        ...sortingRules,
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
    return (
      <table border='1'>
        <TableHeader headers={[...this.getHeaders()]} onHandleClick={this.getSort}/>
        <tbody>
          {localStorage.getItem('sorting') ? (
            this.sortFunc(JSON.parse(localStorage.getItem('sorting'))).map((elem, index) => 
              <TableBody key={index} headers={[...this.getHeaders()]} elem={elem} />
            )) : (
            this.props.profiles.map((elem, index) => 
              <TableBody key={index} headers={[...this.getHeaders()]} elem={elem} />
            )
          )}
        </tbody>
      </table>
    );
  }
}
