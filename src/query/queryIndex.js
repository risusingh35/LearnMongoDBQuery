const { insertOneItem, insertManyItem } = require('./CRUD/create')
const { findAll, findOne, findSome } = require('./CRUD/find')
const { updateOne, updateMany, replaceOne } = require('./CRUD/update')
const { ComparisonOperators } = require('./ComparisonOperators/operators')
const { logicalOperators } = require('./LogicalOperators/logicalOperators')
const queryIndex = () => {
    console.log("**********queryIndex JS**********");
    // insertOneItem()
    // insertManyItem()

    // findAll()
    // findOne()
    // findSome()

    // replaceOne()
    // updateMany()

    // ComparisonOperators()

    // logicalOperators()
}
module.exports = { queryIndex }