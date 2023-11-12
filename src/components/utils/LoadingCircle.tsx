import React from 'react';

const LoadingCircle: React.FC<{width?:number,height?:number}> = ({width=40,height=40}) => {
  return (
    <div className="flex justify-center  items-center">
      <div style={{width:width,height:height}} className="animate-spin  top-[25%]   border-4 border-[#ffffff6f] border-t-white rounded-[50%] "></div>
    </div>
  );
};

export default LoadingCircle;