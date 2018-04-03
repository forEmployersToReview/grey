// Modules
import React from 'react';
import { connect } from 'react-redux';

// Components
import ElemContainer from '../components/ElemContainer';

class Plans extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      container_ids: [],
      selected_vessel: {},
      containers_vessel: []
    };
  }

  componentWillReceiveProps({ vessel_id, plans, vessels, containers }) {
    if (this.props.vessel_id !== vessel_id && plans.length) {
      const vesselPlan = plans.filter(plan => plan.vessel_id === vessel_id)[0];
      const selected_vessel = vessels.find(({ id }) => id === vessel_id);
      if (vesselPlan) {
        const { container_ids } = vesselPlan;
        const containers_vessel = container_ids.map(id => containers.originalById[id]);

        this.setState({ container_ids, selected_vessel, containers_vessel });
        return;
      }
      this.setState({
        container_ids: [],
        selected_vessel: {},
        containers_vessel: []
      });
    }
  }

  render() {
    const { selected_vessel, containers_vessel } = this.state;
    return (
      <div className="elem-box-wrapper">
        <h2>CENTER</h2>
        <div className="des-container-wrap">
          <span>{selected_vessel.name}</span>
          <ElemContainer containerList={containers_vessel} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ containers, plans, vessels }) => ({
  containers,
  plans,
  vessels
});

export default connect(mapStateToProps, null)(Plans);
