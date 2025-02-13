import React from "react";

export const NetflixSeries = () => {
  const name = "Pirates Of The Caribbean";
  const rating = "8.2";
  const summary = "Pirates of the Caribbean is an American fantasy supernatural swashbuckler film series produced by Jerry Bruckheimer and based on Walt Disney's theme park attraction of the same name. The film series serves as a major component of the titular media franchise.";
  let age = 16;
  // let consent = "Watch Now";
  // if (age < 18) {
  //   consent = "Not Available";
  // }

  const returnGenre = () => {
    const gener = "Action"
    return gener;
  }
  return (
    <div>
      <div>
        <img src="qot.jpg" alt="qot.jpg" width="40%" height="40%" />
      </div>
      <h2>Name: {name}</h2>
      <h2>Rating: {rating}</h2>
      <p>Summary: {summary}</p>
      <p>Genre: {returnGenre()}</p>
      <button>{age > 18 ? "Watch Now" : "Not Available"}</button>
    </div>
  );
};