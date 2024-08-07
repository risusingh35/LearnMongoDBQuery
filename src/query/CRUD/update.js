const { database } = require('../../../db/mongodbConnect')
userCollection = database.collection('users')
const updateOne = async () => {
    const result = await userCollection.updateOne({ age: 40 }, { $set: { email: 'rksp@gmail.com' } })
    console.log({ result });
}
const updateMany = async () => {
    const result = await userCollection.updateMany({ age: 40 }, { $set: { email: 'rksp@gmail.com' } })
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