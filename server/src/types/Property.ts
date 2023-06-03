export interface IProperty {
    location: { 
      address: String,
      suburb: String,
      city: String
     },
    bathrooms: Number,
    bedrooms: Number,
    parkings: Number,
    petFriendly: String,
    outDoorArea?: Boolean,
    description?: String,
    propertyType: String,
    geolocation?: {
      lat: Number,
      lng: Number
    },
    imgUrls?: Array<String>,
    name: String,
    price: Number,
    listingTime: Date
    }