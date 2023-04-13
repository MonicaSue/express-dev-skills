import { Router } from 'express'
import * as carsCtrl from '../controllers/cars.js'

const router = Router()

// GET localhost:3000/cars
router.get('/', carsCtrl.index)
router.get('/new', carsCtrl.new)
router.get('/:carId', carsCtrl.show)

router.post('/', carsCtrl.create)

router.delete('/:carId', carsCtrl.delete)

export { router }
