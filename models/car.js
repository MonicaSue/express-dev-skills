import mongoose from 'mongoose'

// shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const carSchema = new Schema({
  make: String,
  model: String,
  detailed: Boolean,
})

// Compile the schema into a model and export it
const Car = mongoose.model('Car', carSchema)

export {
  Car
}
