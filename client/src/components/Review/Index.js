import React, { useState } from "react";
import Rating from "react-rating";
import { useDispatch } from "react-redux";
import { addProductReview } from "../../app/actions/productActions";
const Index = ({ product }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const sendReview = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let alreadyReviewed;
    for (let i = 0; i < product.reviews.length; i++) {
      if (product.reviews[i].userid === currentUser._id) {
        alreadyReviewed = true;
      }
    }
    if (alreadyReviewed) {
      alert("You Have Already Reviewed This Product.");
    } else {
      const review = {
        rating: rating,
        comment: comment,
      };

      dispatch(addProductReview(review, product._id));
      alert("Your Review Has Been Submitted.");
    }
  };
  return (
    <div>
      <br />
      <h1>Give Your Review</h1>
      <Rating
        initialRating={rating}
        emptySymbol="far fa-star fa-1x"
        fullSymbol="fas fa-star fa-1x"
        onChange={(e) => setRating(e)}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="Write your review here..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button className="btn btn-dark mt-3" onClick={sendReview}>
        Submit Review
      </button>
      <div className="text-start mt-3">
        <h2>Reviews</h2>
        {product.reviews &&
          product.reviews.map((review) => {
            return (
              <div style={{ backgroundColor: "whitesmoke" }}>
                <Rating
                  initialRating={review.rating}
                  emptySymbol="far fa-star fa-1x"
                  fullSymbol="fas fa-star fa-1x"
                  onChange={(e) => setRating(e)}
                  readonly
                />

                <p>{review.comment}</p>
                <p>
                  By: <b>{review.name.toUpperCase()}</b>
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Index;
