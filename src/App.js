import React from 'react';
import {connect} from 'react-redux';
import {loadProfiles} from './redux/profiles/actions';
import Table from './components/Table/Table';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  fetchProfiles = () => {
    return this.props.loadProfiles();    
  }

  componentDidMount = () => {
    this.fetchProfiles();

  }

  render() {
    console.log('app render')
    return (
      <Table profiles={this.props.profiles}/>
    );
  }
}

const mapStateToProps = state => ({profiles: state.profiles});
const mapDispatchToProps = dispatch => ({
  loadProfiles: (payload) => dispatch(loadProfiles(payload))
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
