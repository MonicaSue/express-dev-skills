import { Car } from "../models/car.js"

function index(req, res) {
  Car.find({})
  .then(cars => {
    res.render('cars/index', {
      cars: cars,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function newCar(req, res) {
  res.render('cars/new')
}

function create(req, res) {
  console.log(req.body)
  req.body.detailed = false
  Car.create(req.body)
  .then(car => {
    res.redirect('/cars')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/cars')
  })
}

function show(req, res) {
  console.log(req.params.carId)
  Car.findById(req.params.carId)
  .then(car => {
    res.render('cars/show', {
      car: car
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/cars')
  })
}

export {
  index,
  newCar as new,
  create,
  show,
}