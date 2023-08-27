import React from 'react'
import { FaStar,FaStarHalfAlt,FaRegStar} from 'react-icons/fa'
const Rating = ({rate}) => {
  const wholeRate=Math.trunc(rate);
  return (
    <div>
        {Array.from(Array(5),(_,i)=>{
            return (
            <span>
                {i<wholeRate?<FaStar/>:i+0.5==rate?<FaStarHalfAlt/>:<FaRegStar/>}
            </span>
            );
        })}
    </div>
  )
}

export default Rating