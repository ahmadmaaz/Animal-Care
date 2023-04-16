import React from 'react'
import curveLine from "../../../assets/curveLine.png"
type Props = {
    header:string
}

function CustomHeader({header}: Props) {
  return (
    <div className="py-8">
      <h1 className="text-5xl py-8 text-center">{header}</h1>
      <div className="flex justify-center ">
        <img src={curveLine} />
      </div>
    </div>
  );
}

export default CustomHeader