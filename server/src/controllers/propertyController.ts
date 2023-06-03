import { Request, Response } from 'express'
import * as propertyService from '../services/propertyService'

export const createOneProperty = async (req: Request, res: Response) => {
  try {
    const saveProperty = await propertyService.createOneProperty(req.body);
    res.status(200).json(saveProperty);
  } catch (e) {
    res.status(404).json(e);
  }
};


export const getAllProperties = async (req: Request, res: Response) => {
  try{
    const properties = await propertyService.getAllProperties()
    res.status(200).json(properties)
  } catch (e) {
    res.status(404).json(e);
  }
}

export const getOneProperty = async (req: Request, res: Response) => {
  const id = req.params.id
  
  try {
    const property = await propertyService.getOnePropertyById(id)
    res.status(200).json(property)
  } catch (e) {
    res.status(404).json({"error":"The property cannot be found."})
  }
}

export const getPropertiesByFilter = async (req: Request, res: Response) => {
  const queryParams = req.query
  
  try {
    const properties = await propertyService.getPropertiesByFilter(queryParams)
    res.status(200).json(properties)
  } catch (e) {
    res.status(404).json({"error":"The properties cannot be found."})
  }
}

export const deleteOneProperty = async (req: Request, res: Response) => {
  const id = req.params.id
  
  try {
    await propertyService.deleteOnePropertyById(id)
    res.status(200).json("Property has been deleted successfully.")
  } catch (e) {
    res.status(404).json({"error": "The property cannot be found."})
  }
}

export const updateEntireProperty = async (req: Request, res: Response) => {
  const id = req.params.id
  
  try {
    const property = await propertyService.updateEntireProperty(id,req.body)
    res.status(200).json(property)
  } catch (e) {
    res.status(404).json({"error": "The property cannot be found."})
  }
}

export const updatePropertyPartial = async (req: Request, res: Response) => {
    const id = req.params.id
    
    try {
      const property = await propertyService.updatePropertyPartial(id,req.body)
      res.status(200).json(property)
    } catch (e) {
      res.status(404).json({"error": "The property cannot be found."})
    }
  }