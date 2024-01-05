import React from 'react';

const LoadingCircle: React.FC<{borderColor?:boolean,width?:number,height?:number,borderWidth?:number}> = ({borderColor=false,width=40,height=40,borderWidth=4}) => {
  return (
    <div className="flex justify-center  items-center">
      <div style={{width:width,height:height,borderWidth:`${borderWidth}px`}} className={`animate-spin  top-[25%] ${borderColor ? 'border-t-default-red':'border-t-white'}   border-[#ffffff6f]  rounded-[50%] `}></div>
    </div>
  );
};

export default LoadingCircle;