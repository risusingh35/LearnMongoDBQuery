const {database}=require('../../../db/mongodbConnect')
const findAll = async () => {
    const users=await database.collection('users').find({}).toArray()
    console.log({users,length:users.length});
    
}
const findOne = async () => {
    const users=await database.collection('users').find({}).toArray()
    console.log({users,length:users.length});
    
}
const findSome = async () => {
    const users=await database.collection('users').find({age:40}).toArray()
    console.log({users,length:users.length});
    
}
module.exports = { findAll,findOne ,findSome}