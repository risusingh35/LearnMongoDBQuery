const { ObjectId } = require('mongodb');
const { database } = require('../../../db/mongodbConnect')
userCollection = database.collection('users')
const updateOne = async () => {
    const result = await userCollection.updateOne({ _id: new ObjectId('66b32b399c6efaa313a09544') }, { $set: { isActive: false } })
    console.log({ result });
}
const updateMany = async () => {
    const result = await userCollection.updateMany({ age: 40 }, { $set: { phone: 'rksp@gmail.com' } })
    console.log({ result });

}
const replaceOne = async () => {
    try {
        const result = await userCollection.replaceOne({ age: 40 }, {
            name: 'Risu Singh10',
            age: 40,
            email: 'rksp@gmail.com1'
        })
        console.log({ result });
    } catch (error) {
        console.error('Error replaceOne', error);

    }
}
module.exports = { updateOne, updateMany, replaceOne }