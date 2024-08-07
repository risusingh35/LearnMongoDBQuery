const { database } = require('../../../db/mongodbConnect')
const logicalOperators = async () => {
    const userCollection = database.collection('users')
    try {
        // or -------------------------------
        // const orOpt =await userCollection.find({
        //     $or: [
        //         {
        //             age: { $gt: 226 }
        //         },
        //         {
        //             name: { $eq: 'Risu Singh110' }
        //         },
        //         {
        //             phone: '7771815989'
        //         }
        //     ]
        // }).toArray()
        // console.log({orOpt});

        // $and -------------------------------

        // const andOpt =await userCollection.find({
        //     $and: [
        //         {
        //             age: { $gt: 226 }
        //         },
        //         {
        //             name: { $eq: 'Risu Singh199' }
        //         },
        //         {
        //             phone: '7771815981'
        //         }
        //     ]
        // }).toArray()
        // console.log({andOpt});
        // $nor -------------------------------
        const norOpt = await userCollection.find({
            $nor: [
                {
                    age: { $gt: 226 }
                },
                {
                    name: { $eq: 'Risu Singh199' }
                },
                {
                    phone: '7771815981'
                }
            ]
        }).toArray()
        console.log({ norOpt });

    } catch (error) {
        console.error('Error logicalOperators', error);

    }
}
module.exports = { logicalOperators }