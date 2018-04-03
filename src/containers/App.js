// Modules
import React from 'react';
import { connect } from 'react-redux';

// Components
import Header from './Header.js';
import ContainerCard from '../components/ContainerCard';
import VesselCard from '../components/VesselCard';
import Center from './Center';

// ADD PROPTYPES, PRIORITIZE DEFAULTPROPS OVER CONDITION CHECKS WHERE NEEDED.
// ADD STYLED COMPONENTS, FACTOR OUT POTENTIALLY REUSABLE MODULES.
// MAKE VESSEL CAPACITY REACT TO CONTAINER FULFILMENT OF VASSEL INSTEAD OF RANDOM INT.
// SUBMIT VESSEL UPDATES AND REFLECT CHANGES ON GLOBAL STORE.
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      vessel_id: null
    };
  }

  render() {
    const { vessels, containers } = this.props;
    const { vessel_id } = this.state;
    return (
      <div>
        <Header />
        <section className="des-section-wrapper">
          <VesselCard
            collection={vessels}
            setVessel={vessel_id => this.setState({ vessel_id })}
          />
          <Center vessel_id={vessel_id} />
          <ContainerCard collection={containers.alphabet} />
        </section>
      </div>
    );
  }
}

const mapStateToProps = ({ containers, vessels }) => ({
  containers,
  vessels
});

export default connect(mapStateToProps, null)(App);
