export const IMAGE_URL=`https://image.tmdb.org/t/p/original`

export const voteCount=(vote)=>{
  return parseFloat((vote/1000).toFixed(2));
}
export const ratingCount = (rating) => {
  if (typeof rating !== "number" || isNaN(rating)) {
    console.warn("Invalid input: rating must be a valid number.");
    return 0; // Default value when the input is invalid
  }
  return parseFloat(rating.toFixed(1));
};

