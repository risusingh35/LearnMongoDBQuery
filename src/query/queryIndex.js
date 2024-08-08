const { insertOneItem, insertManyItem } = require('./CRUD/create')
const { findAll, findOne, findSome } = require('./CRUD/find')
const { updateOne, updateMany, replaceOne } = require('./CRUD/update')
const { ComparisonOperators } = require('./ComparisonOperators/operators')
const { logicalOperators } = require('./LogicalOperators/logicalOperators')
const { ElementOperators } = require('./ElementOperators/ElementOperators')
const { EvaluationOperators } = require('./EvaluationOperators/EvaluationOperators')
const { arrayOperators } = require('./Array Operators/arrayOperators')

const queryIndex = () => {
    console.log("**********queryIndex JS**********");
    // insertOneItem()
    // insertManyItem()

    // findAll()
    // findOne()
    // findSome()

    // updateOne()
    // replaceOne()
    // updateMany()

    // ComparisonOperators()

    // logicalOperators()

    // ElementOperators()

    // EvaluationOperators()

    arrayOperators()
}
module.exports = { queryIndex }