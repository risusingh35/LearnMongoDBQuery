const { database } = require('../../../db/mongodbConnect')
const insertOneItem = async () => {
    try {
        const user = {
            name: 'Risu Singh',
            age: 30,
            email: "risusingh35@gmail.com"
        }
        const usersCollection = database.collection('users');
        const result = await usersCollection.insertOne(user);
        console.log(`New user inserted with the following id: ${result.insertedId}`);
    } catch (error) {
        console.error('Error while creating ', error);
    }

}
const insertManyItem = () => {
    try {
        const manyUsers=[]
        for (let i = 100; i < 200; i++) {
            manyUsers.push({
                name: 'Risu Singh'+i,
                age: 30+i,
                email: "risusingh35@gmail.com"+i
            })
            
        }
       
        const usersCollection =database.collection('users')

       const result= usersCollection.insertMany(manyUsers)
       console.log(`New user inserted with the following id: ${result}`);
    } catch (error) {
        console.error('Error while insertManyItem');
    }
}
module.exports = { insertOneItem ,insertManyItem}