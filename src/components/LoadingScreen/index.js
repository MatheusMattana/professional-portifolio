import React from 'react';
import loadingGif from '../../assets/loading.gif';

const index = () => {
  return (
    <div className="loading-container">
      <img src={loadingGif} alt="" />
    </div>
  );
};

export default index;
