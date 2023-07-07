import React from 'react';

const ShimmerUI = () => {

  return (
    <div className="card w-80 m-2 p-4 shadow-xl">
      <div className="animate-pulse">
        <div className="bg-gray-200 h-48 w-full "></div>
        <div className="mt-4">
          <div className="bg-gray-200 h-4 w-2/3 mb-2"></div>
          <div className="bg-gray-200 h-4 w-1/2 mb-2"></div>
          <div className="bg-gray-200 h-4 w-1/4"></div>
        </div>
      </div>
    </div>
  );
};



export default ShimmerUI;
