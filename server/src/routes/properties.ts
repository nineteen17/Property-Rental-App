import express from 'express'
import * as PropertyController from '../controllers/propertyController'

const router = express.Router()

router.get('/', PropertyController.getAllProperties)

router.post('/', PropertyController.createOneProperty)

router.get('/:id', PropertyController.getOneProperty)

router.delete('/:id', PropertyController.deleteOneProperty)

router.put('/:id', PropertyController.updateEntireProperty)

router.patch('/:id', PropertyController.updatePropertyPartial)

export default router