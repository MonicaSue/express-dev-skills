import { cars } from "../data/car-data.js"

function index(req, res) {
  res.render('cars/index', {
    cars: cars
  })
}

export {
  index,
}