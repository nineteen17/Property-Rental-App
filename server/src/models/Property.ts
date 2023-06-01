import mongoose from 'mongoose'

let PropertySchema = new mongoose.Schema({
  location: { 
    address:{type: String, require: true},
    suburb:{type: String, require: true},
    city:{type: String, require: true}
   },
  bathrooms: {type: Number, require: true},
  bedrooms: {type: Number, require: true},
  squareMeters: {type:Number, require: true},
  parkings: {type:Number},
  petFriendly: {type:String, default:"Not allowed"},
  outDoorArea: {type:Boolean},
  description: { type: String },
  propertyType: {type: String},
  geolocation: {
    lat:{type:Number},
    lng:{type:Number}
  },
  imgUrls: {type:Array},
  name: {type: String, require: true},//listing name
  price: {type: Number},
  listingTime: {
    type: Date,
    required: true,
    default: Date.now
  }
})

export default mongoose.model('Property', PropertySchema)