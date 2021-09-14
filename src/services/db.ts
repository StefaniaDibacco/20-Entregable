import mongoose from 'mongoose';

mongoose.connect('mongodb://root:12345@localhost:27017/ecommerce');

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const mensajes = new Schema({
  _id: ObjectId,
  author: String,
  text: String,
  time: Date,
});

const productos = new Schema({
  _id: ObjectId,
  title: String,
  price: Number,
  thumbnail: String,
  stock: Number,
});

export const _mensajes = mongoose.model('mensajes', mensajes);
export const _productos = mongoose.model('productos', productos);
