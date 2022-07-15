// Outlines the structure of the cards in the database

import mongoose from 'mongoose'

// schema to build database fields
const userSchema = mongoose.Schema({
    name: String,
    imgUrl: String
});

// With noSQL dbs collections are used instead of tables
export default mongoose.model('users', userSchema);