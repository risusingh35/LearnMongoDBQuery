const { database } = require('../../../db/mongodbConnect')
const userCollection = database.collection('users')
const ComparisonOperators = async () => {

    // $eq equal to example
    // const equalTo = await userCollection.find({ age: { $eq: 41 } }).toArray()
    // console.log({equalTo});

    // $ne not equal to
    // const notEqualTo=await userCollection.find({phone:{$ne:'7771815981'}}).toArray()
    // console.log({notEqualTo});

    // $gt greater than
    // const greaterThan=await userCollection.find({age:{$gt:225}}).toArray()
    // console.log({greaterThan});

    // gte greater than or equal to
    // const greaterThanEqual = await userCollection.find({age:{$gte:226}}).sort({age:1}).toArray()
    // console.log({greaterThanEqual});

    // $lt less than
    // const lessThan=await userCollection.find({age:{$lt:31}}).toArray()
    // console.log({lessThan});

    // $lte less than or equal to
    // const lessThanEqualTo = await userCollection.find({ age: { $lte: 31 } }).toArray()
    // console.log({ lessThanEqualTo });
    // $in in array
    // const inArray = await userCollection.find({ age: { $in: [30, 31, 227] } }).toArray()
    // console.log({ inArray });

    // $nin not in array 
    // const notInArray = await userCollection.find({ phone: { $nin: ['7771815981'] } }).toArray()
    // console.log({ notInArray });

}
module.exports = { ComparisonOperators }

