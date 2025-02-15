import React from "react";
import seriesData from "../api/seriesData.json";
import SeriesCard from "./SeriesCard"
export const NetflixSeries = () => {
  // const name = "Pirates Of The Caribbean";
  // const rating = "8.2";
  // const summary = "Pirates of the Caribbean is an American fantasy supernatural swashbuckler film series produced by Jerry Bruckheimer and based on Walt Disney's theme park attraction of the same name. The film series serves as a major component of the titular media franchise.";
  let age = 166;
  // let consent = "Watch Now";
  // if (age < 18) {
  //   consent = "Not Available";
  // }

  // const returnGenre = () => {
  //   const gener = "Action"
  //   return gener;
  // }
  return (
    <ul className="grid grid-three-cols" >
      {
        seriesData.map((curElement) => {
          return <SeriesCard key={curElement.id} data={curElement} />
        })
      }

    </ul>
  );
};