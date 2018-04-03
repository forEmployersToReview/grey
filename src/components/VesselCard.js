import React from 'react';
import VesselCapacity from './VesselCapacity';

const VesselCard = ({ collection, setVessel }) => (
  <div>
    <div className="elem-box-wrapper">
      <h2>VESSELS</h2>
      {collection.map(({ name, capacity, id }, index) => {
        const fakeCapacity = Math.floor(Math.random(0, 1) * 100);
        return (
          <div key={`${name}${index}`} className="elem-vessel-wrap" onClick={() => setVessel(id)}>
            <section className="elem-vessel-section">
              <span className="elem-vessel-title">
                <h3>Name</h3>
                <h4>{name}</h4>
              </span>
              <button className="elem-vessel-expand">Expand View</button>
            </section>
            <section className="elem-vessel-section">
              <span className="elem-vessel-capacity">
                <h3>Max Capacity</h3>
                <p>{`${capacity} TEU's`}</p>
              </span>
              <div className="elem-vessel-utilization">
                <h3 className="elem-vessel-title">Utilization </h3>
                <div className="elem-vessel-status">
                  <VesselCapacity capacity={fakeCapacity} />
                  <p>{`${fakeCapacity}% Full`}</p>
                </div>
              </div>
            </section>
          </div>
        );
      })}
    </div>
  </div>
);

export default VesselCard;
