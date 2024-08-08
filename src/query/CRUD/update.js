const { ObjectId } = require('mongodb');
const { database } = require('../../../db/mongodbConnect')
userCollection = database.collection('users')
const developerRoles = [
    { _id:new ObjectId('66b32b399c6efaa313a0951c'), 
        score:[10,20,30,4050],
        result:[{maths:77,science:88,english:99,hindi:66}],
        boi: "Focuses on the client-side development of web applications using HTML, CSS, JavaScript, React, Vue, or Angular." },
    { _id:new ObjectId('66b32b399c6efaa313a09580'), 
        score:[15,25,35,45,55],
        result:[{maths:98,science:88,english:87,hindi:89}],
        boi: "Works on server-side logic and integration with databases using technologies like Node.js, Express, Django, Ruby on Rails, Java, or Python." },
    { _id:new ObjectId('66b32b399c6efaa313a0951d'), 
        score:[100,200,300,400,500],
        result:[{maths:95,science:10,english:20,hindi:30}],
        boi: "Handles both frontend and backend development tasks, often using a combination of tools like React with Node.js or Angular with Django." },
    { _id:new ObjectId('66b32b399c6efaa313a09581'), 
        score:[5,10,15,20,25],
        result:[{maths:100,science:90,english:80,hindi:70}],
        boi: "Specializes in the deployment and operation of software applications using Docker, Kubernetes, Jenkins, AWS, Azure, and CI/CD pipelines." }
  ];
  
const updateOne = async () => {
    // developerRoles.forEach((dev)=>{
    // userCollection.updateOne({ _id:dev._id}, { $set: { score:dev.score,result:dev.result} })
    // })
    // console.log('Update done');
    
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