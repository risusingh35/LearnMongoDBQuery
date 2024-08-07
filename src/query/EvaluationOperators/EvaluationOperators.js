const {database}=require('../../../db/mongodbConnect')
const EvaluationOperators=async ()=>{
const userCollection=database.collection('users')

// regex

const regexResult=await userCollection.find({boi:{$regex:'and CI/CD pipelines',$options:'i'}}).toArray()
console.log({regexResult});

    // $expr - Use expressions in queries
    // const exprExample = await collection.find({ $expr: { $gt: ["$age", 30] } }).toArray();
    // console.log('$expr (age > 30):', exprExample);

    // $jsonSchema - Validate documents against a JSON Schema
    // const jsonSchemaExample = await collection.find({
    //     $jsonSchema: {
    //         bsonType: "object",
    //         required: ["name", "age"],
    //         properties: {
    //             name: {
    //                 bsonType: "string",
    //                 description: "must be a string and is required"
    //             },
    //             age: {
    //                 bsonType: "int",
    //                 minimum: 18,
    //                 description: "must be an integer and is required"
    //             }
    //         }
    //     }
    // }).toArray();
    // console.log('$jsonSchema:', jsonSchemaExample);

    // // $mod - Modulo operation
    // const modExample = await collection.find({ age: { $mod: [2, 0] } }).toArray();
    // console.log('$mod (age % 2 == 0):', modExample);

    // // $text - Text search
    // await collection.createIndex({ bio: "text" });
    // const textExample = await collection.find({ $text: { $search: "coding" } }).toArray();
    // console.log('$text (coding):', textExample);

    // // $where - Execute JavaScript expressions
    // const whereExample = await collection.find({
    //     $where: function () {
    //         return this.age > 30;
    //     }
    // }).toArray();
    // console.log('$where (age > 30):', whereExample);
}
module.exports={EvaluationOperators}