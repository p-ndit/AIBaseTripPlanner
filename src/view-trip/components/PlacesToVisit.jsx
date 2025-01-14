import React from "react";
import PlaceCardItem from "./PlaceCardItem";

function PlacesToVisit({ trip }) {
  return (
    <div>
      <h2 className="font-bold text-lg">Places to visit</h2>

      <div>
        {Object.entries(trip?.tripData?.itinerary || {}).map(
          ([day, itineraryData], index) => (
            <div key={index} >
                
              <h2 className="font-medium text-lg">{day}</h2>

              <div className="grid md:grid-cols-2 gap-5">
              {itineraryData.places?.map((place, placeIndex) => (
                <div key={placeIndex} >
                  <div className="">

                    <PlaceCardItem place={place} />

                  </div>
                </div>
              ))}
            </div>
            </div>
          )
          
        )}
      </div>
    </div>
  );
}

export default PlacesToVisit;
