export interface Listing {
    location: {
      address: string;
      suburb: string;
      city: string;
    };
    _id: string;
    bathrooms: number;
    bedrooms: number;
    parkings: number;
    petFriendly: string;
    outDoorArea: boolean;
    description: string;
    propertyType: string;
    imgUrls: string[];
    name: string;
    price: number;
    listingTime: string;
    __v: number;
  }
  