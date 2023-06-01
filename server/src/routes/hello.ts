import express from 'express'

import helloController from '../controllers/helloController'

const router = express.Router()

router.get('/api/hello', helloController.getHello)

export default router
