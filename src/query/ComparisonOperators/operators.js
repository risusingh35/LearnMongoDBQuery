const { database } = require('../../../db/mongodbConnect')
const userCollection = database.collection('users')
const ComparisonOperators = async () => {
    
    // $eq equal to example
    const equalTo = await userCollection.find({ age: { $eq: 41 } }).toArray()
    console.log(equalTo);

    // 
}
module.exports = { optExample: ComparisonOperators }

