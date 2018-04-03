import React from 'react';
import ElemContainer from './ElemContainer';

// Performance issues on lines 11, 12, 13.
const ContainerCard = ({ collection }) => {
  if (!!collection) {
    return (
      <div className="elem-box-wrapper">
        <h2>CONTAINER</h2>
        <div className="elem-container-wrap">
          {Object.keys(collection)
            .sort()
            .map((letter, index) => {
              return (
                <div
                  className="elem-container-inner-wrapp"
                  key={`${letter}-${index}`}
                >
                  <p className="elem-container-title">{letter}</p>
                  <hr className="elem-separator" />
                  <ElemContainer containerList={collection[letter]} />
                </div>
              );
            })}
        </div>
      </div>
    );
  }
  return null;
};

export default ContainerCard;
