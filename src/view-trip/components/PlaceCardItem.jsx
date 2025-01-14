import { Button } from "@/components/ui/Button";
import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";
import React, { useEffect, useState } from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";

function PlaceCardItem({ place }) {

  const [photoUrl,setPhotoUrl]=useState();
      useEffect(() =>{
          place && GetPlacePhoto();
      },[place])
  
      const GetPlacePhoto= async() =>{
          const data = {
              textQuery : place.placeName
          }
          const result = await GetPlaceDetails(data).then(resp=>{
  
              const PhotoUrl = PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
              setPhotoUrl(PhotoUrl);
          })
      }

  return (
    <Link to={`https://www.google.com/maps/search/?api=1&query=${place?.placeName}`} target="_blank">
      <div className="border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer">
        <img
          src={photoUrl?photoUrl:"/placeholder.png"}
          className="w-[150px] h-[130px] rounded-xl object-cover"
          alt="Place"
        />

        <div>
          <h2 className="font-bold text-lg">{place.placeName}</h2>
          <p className="text-sm text-gray-400">{place.placeDetails}</p>
          <h2 className="font-semibold text-md mt-1 text-gray-600">
            {place.timeTravel}
          </h2>
          <h2 className="font-medium text-sm text-orange-600 mt-2">
            {place.ticketPricing}
          </h2>

          {/* <Button className="bg-black text-white" size="sm"><FaMapLocationDot /></Button> */}
        </div>
      </div>
    </Link>
  );
}

export default PlaceCardItem;
