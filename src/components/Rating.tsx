import { FaStar,FaStarHalfAlt,FaRegStar} from 'react-icons/fa'
const Rating = ({rate,numberOfReviews}:{rate:number,numberOfReviews:number}) => {
  const wholeRate=Math.trunc(rate);
  return (
    <div>
        {Array.from(Array(5),(_,i)=>{
            return (
            <span key={i}>
                {i<wholeRate?<FaStar/>:i+0.5==rate?<FaStarHalfAlt/>:<FaRegStar/>}
            </span>
            );
        })}
        <span> {numberOfReviews} reviews</span>
    </div>
  )
}

export default Rating