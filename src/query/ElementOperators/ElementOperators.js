const { database } = require('../../../db/mongodbConnect')
const ElementOperators = async () => {
    const userCollection = database.collection('users')

    // $exists: Matches documents that have the specified field.

    // const isExists = await userCollection.find({ isActive: { $exists: true } }).toArray()
    // console.log({ isExists });


    // $type: Matches documents where the field is of the specified type.
// for type refer type.txt file
    // const typeExample = await userCollection.find({ isActive: { $type: 8 } }).toArray()
    // console.log({ typeExample });

    

}
module.exports = { ElementOperators }