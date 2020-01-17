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
    const getSorted = this.props.profiles.sort((a, b) => {
      return (a[sorting.sortedBy] > b[sorting.sortedBy]) - (a[sorting.sortedBy] < b[sorting.sortedBy]) 
      || (a.Name > b.Name) - (a.Name < b.Name);
    });
    if (sorting.reversed) {
      return getSorted.reverse();
    }

    return getSorted;
  }

  getSort = (name, reverse) => {
    const sorting = {
      sortedBy: name,
      reversed: reverse,
    }
    localStorage.setItem('sorting', JSON.stringify({
      ...sorting,
    }));
    this.setState({
      ...sorting,
    });
  }

  render() {
    return (
      <table border='1'>
        <TableHeader headers={[...this.getHeaders()]} onHandleClick={this.getSort} sortedName={this.state.sortedBy}/>
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
