const { insertOneItem, insertManyItem } = require('./CRUD/create')
const { findAll ,findOne ,findSome} = require('./CRUD/find')
const {updateOne,updateMany,replaceOne}=require('./CRUD/update')
const {optExample}=require('./ComparisonOperators/operators')
const queryIndex = () => {
    console.log("**********queryIndex JS**********");
    // insertOneItem()
    // insertManyItem()

    // findAll()
    // findOne()
    // findSome()
    
    // replaceOne()
    // updateMany()

    optExample()
}
module.exports = { queryIndex }