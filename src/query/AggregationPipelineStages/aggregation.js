const { database } = require('../../../db/mongodbConnect')
const userCollection = database.collection('users')
const matchGroupProject = async () => {
    // $match

    // const matchData = await userCollection.aggregate([{
    //     $match: { isActive: false }
    // }]).toArray()
    // console.log({ matchData });


    // $group

    // const groupData = await userCollection.aggregate([{
    //     $group: { _id: "$isActive", totalCount: { $sum: 1 } }
    // }]).toArray()
    // console.log(groupData);


    // $project

    // const projectData = await userCollection.aggregate([
    //     {
    //         $match: { isActive: true }
    //     },
    //     {
    //         $project: { name: 1, age: 1 }
    //     }
    // ]).toArray()
    // console.log('projectData', projectData);


    // $limit

    // const limitData = await userCollection.aggregate([
    //     {
    //         $limit: 2
    //     },
    //     {
    //         $sort: { age: -1 }
    //     }
    // ]).toArray()
    // console.log('limitData', limitData);


    //$sort and  $limit and $skip

    // const sortLimitData = await userCollection.aggregate([
    //     {
    //         $sort: { age: -1 }
    //     },
    //     {
    //         $skip:5
    //     },
    //     {
    //         $limit: 5
    //     },
    // ]).toArray()
    // console.log('sortLimitData', sortLimitData);


    // $unwind

    const unbindData = await userCollection.aggregate([
        {
            $match: {
                isActive: true
            }
        },
        {
            $unwind: "$result"
        },
        {
            $unwind: "$score"
        }
    ]).toArray()

    console.log('unbindData',unbindData);
    


}
module.exports = { matchGroupProject }