import React from 'react';
import { connect } from 'react-redux';
import { loadProfiles } from '../../redux/profiles/actions';
import TableHeader from './TableHeader/TableHeader';



class Table extends React.Component {

  fetchProfiles = () => {
    this.props.loadProfiles();    
  }

  componentDidMount = () => {
    this.fetchProfiles();
  }

  getHeaders = () => {
    let headers = [];
    for (let key in this.props.profiles[0]) {
      headers.push(key);
    }

    return headers;
  }
  render() {
    return (
      <table border='1'>
        <TableHeader headers={this.getHeaders()}/>
        <tbody>
        {this.props.profiles.map((elem, index) => 
          <tr key={index}>
            {this.getHeaders().map((item, index) => 
            <td key={index}>{elem[item]}</td>
            )}
          </tr>
        )}
        </tbody>

      </table>
    );
  }
}

const mapStateToProps = state => ({profiles: state.profiles});
const mapDispatchToProps = dispatch => ({
  loadProfiles: (payload) => dispatch(loadProfiles(payload))
});

export { Table };

export default connect(mapStateToProps, mapDispatchToProps)(Table);


