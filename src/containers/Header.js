// Modules
import React from 'react';
import { connect } from 'react-redux';

// Actions
import {
  fetchContainers,
  fetchVessels,
  fetchVesselPlans
} from '../actions/workday';

// First mount, do initial fetch.
// Render default generic header
class Header extends React.Component {
  componentDidMount() {
    const { fetchContainers, fetchVessels, fetchVesselPlans } = this.props;
    fetchContainers();
    fetchVessels();
    fetchVesselPlans();
  }

  render() {
    return (
      <nav className="elem-header">
        <h2 className="elem-h2">HEADER</h2>
      </nav>
    );
  }
}

export default connect(null, {
  fetchContainers,
  fetchVessels,
  fetchVesselPlans
})(Header);
