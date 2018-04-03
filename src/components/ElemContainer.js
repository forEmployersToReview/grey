import React from 'react';

const ElemContainer = ({ containerList }) => (
  <div className="elem-container-ids">
    {containerList.map((container, contIndex) => (
      <p key={`${contIndex}-container`} className="elem-container">
        {container.container_number}
      </p>
    ))}
  </div>
);

export default ElemContainer;
