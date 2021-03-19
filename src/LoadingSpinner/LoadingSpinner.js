import React from 'react';
import spinner from './spinner.gif';

const LoadingSpinner = () => {
  return (
    <div className='LoadingSpinner'>
      <img src={spinner} alt='Loading...' />
    </div>
  );
};

export default LoadingSpinner;
