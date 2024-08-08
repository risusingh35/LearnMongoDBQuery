const { database } = require('../../../db/mongodbConnect')

const arrayOperators = async () => {
    const userCollection = database.collection('users')
    // $all: Matches arrays that contain all elements specified in the query.

    // const allExample = await userCollection.find({score:{$all:[10,20]}}).toArray()
    // console.log(allExample);


    // $elemMatch: Selects documents if an element in the array matches all the specified criteria.

    // const elemMatchData = await userCollection.find({ result: { $elemMatch: {  maths: { $gte: 75 } } } }).toArray()
    // console.log('elemMatchData', elemMatchData);
    // console.log(JSON.stringify(elemMatchData, null, 2));


    // $size: Selects documents if the array field is a specified size.
    
    // const sizeData=await userCollection.find({score:{$size:5}}).toArray()
    // console.log('sizeData',sizeData);
    


}
module.exports = { arrayOperators }