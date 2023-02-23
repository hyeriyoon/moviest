import StarRatings from 'react-star-ratings';
 
const RatingStars = star => {
  
  return (
    <StarRatings
    rating={star.rating / 2}
    starRatedColor="#ffbf00"
    starEmptyColor="#6b6b6b"
    starDimension={window.innerWidth<720? "20px" : "12px"}
    starSpacing="1px"
    numberOfStars={5}
    name='rating'
  />
  )
}

export default RatingStars;