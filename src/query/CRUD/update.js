const { ObjectId } = require('mongodb');
const { database } = require('../../../db/mongodbConnect')
userCollection = database.collection('users')
const developerRoles = [
    { _id:new ObjectId('66b3205636bde415092c0cf8'), boi: "Focuses on the client-side development of web applications using HTML, CSS, JavaScript, React, Vue, or Angular." },
    { _id:new ObjectId('66b3205636bde415092c0cf9'), boi: "Works on server-side logic and integration with databases using technologies like Node.js, Express, Django, Ruby on Rails, Java, or Python." },
    { _id:new ObjectId('66b32b399c6efaa313a094d6'), boi: "Handles both frontend and backend development tasks, often using a combination of tools like React with Node.js or Angular with Django." },
    { _id:new ObjectId('66b32b399c6efaa313a0953a'), boi: "Specializes in the deployment and operation of software applications using Docker, Kubernetes, Jenkins, AWS, Azure, and CI/CD pipelines." }
  ];
  
const updateOne = async () => {
    // developerRoles.forEach((dev)=>{
    // userCollection.updateOne({ _id:dev._id}, { $set: { boi:dev.boi} })
    // })
    // const result = await userCollection.updateOne({ _id: new ObjectId('66b32b399c6efaa313a09544') }, { $set: { isActive: false } })
    // console.log({ result });
}
const updateMany = async () => {
    const result = await userCollection.updateMany({ age: 30 }, { $set: { boi: 'rksp@gmail.com' } })
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