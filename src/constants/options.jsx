export const SelectTravelesList = [
    {
        id: 1,
        title: 'Just Me',
        desc: 'One traveler',
        icon: '🧍',
        people: '1 Person'
    },
    {
        id: 2,
        title: 'A Couple',
        desc: 'Two travelers in tandem',
        icon: '🥂',
        people: '2 People'
    },
    {
        id: 3,
        title: 'Family',
        desc: 'A group of fun loving adventurers',
        icon: '🏡', 
        people: '4 People'
    },
    {
        id: 4,
        title: 'Friends',
        desc: 'A group of friends or colleagues',
        icon: '🏕️', 
        people: '5+ People'
    }
]

export const SelectBudgetOptions = [
    {
        id: 1,
        title: 'Cheap',
        desc: 'Budget friendly options',
        icon: '💰'
    },
    {
        id: 2,
        title: 'Moderate',
        desc: 'Standard options',
        icon: '💸'
    },
    {
        id: 3,
        title: 'Luxury',
        desc: 'High end options',
        icon: '💎'
    }
]

export const AI_PROMPT = 'Generate Travel Plane for Location : {location}, for {totalDays} Days for {traveler} with a {budget} budget, give me a hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format.';