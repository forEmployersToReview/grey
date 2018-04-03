import React from 'react';
import ProgressBar from 'react-progressbar.js';
const Line = ProgressBar.Line;

const options = {
  strokeWidth: 1,
  color: '#b9b9b9',
  trailColor: '#f4f4f4'
};
const containerStyle = {
  width: '200px',
  fontSize: '13px',
};

export default ({capacity}) => (
  <Line
    progress={capacity / 100}
    options={options}
    containerStyle={containerStyle}
    initialAnimate={true}
  />
);
