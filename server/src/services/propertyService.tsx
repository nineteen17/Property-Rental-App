import Property from '../models/Property'
//import { PropertyType } from '../types/Property'


export const createOneProperty = async (body: any) => {
  const newProperty = new Property(body)
  const saveProperty = await newProperty.save()
  return saveProperty
}

export const getAllProperties = async () => {
  const Properties = await Property.find()
  return Properties
}

export const getOnePropertyById = async (id: string) => {
  const matchedProperty = await Property.findById(id).exec()

  if (!matchedProperty || matchedProperty === null) {
    throw { error: 'The Property cannot be found.' }
  }
  return matchedProperty
}

export const deleteOnePropertyById = async (id: string) => {
  const deleteProperty = await Property.findByIdAndDelete(id)
  return deleteProperty
}

export const updateOneProperty = async (id: string, body: any) => {
  const updateProperty = await Property.findByIdAndUpdate(
    id,
    { $set: body },
    { new: true }
  )
  return updateProperty
}