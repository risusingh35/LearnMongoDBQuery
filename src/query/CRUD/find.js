const { ObjectId } = require('mongodb');
const {database}=require('../../../db/mongodbConnect')
const findAll = async () => {
    const users=await database.collection('users').find({}).toArray()
    console.log({users,length:users.length});
    
}
const findOne = async () => {
    const users=await database.collection('users').find({_id:new ObjectId('66b32b399c6efaa313a09537')}).toArray()
    console.log({users,length:users.length});
    
}
const findSome = async () => {
    const users=await database.collection('users').find({age:40}).toArray()
    console.log({users,length:users.length});
    
}
module.exports = { findAll,findOne ,findSome}