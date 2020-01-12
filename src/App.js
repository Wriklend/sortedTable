import React from 'react';
import { connect } from 'react-redux';
import { loadProfiles } from './redux/profiles/actions';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  fetchProfiles = () => {
    this.props.loadProfiles();
    console.log(this.props)
  }

  componentDidMount = () => {
    this.fetchProfiles();
  }

  render() {

    return (
      <table>
      </table>
    );
  }
}

const mapStateToProps = state => ({ profiles: state.profiles });
const mapDispatchToProps = dispatch => ({
  loadProfiles: (payload) => dispatch(loadProfiles(payload)),
});

export { App };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

