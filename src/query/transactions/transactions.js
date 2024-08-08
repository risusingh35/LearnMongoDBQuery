const { ObjectId } = require('mongodb');
const { database, session } = require('../../../db/mongodbConnect')
const transactions = async () => {
    if (!session) {
        throw new Error("session creation failed");
    }
    const bankServerCollection = database.collection('bankServer')
    const atmServerCollection = database.collection('atmServer')
    return;// need to remove for session and transaction
    session.startTransaction()
    try {
        const backData = await bankServerCollection.insertOne({
            userName: 'Rk Singh',
            accountNo: '10002',
            balance: '90191010',
            isAtm: true,
            isCreditCard: false,
            isLoan: false
        }, { session })

        const atmData = await atmServerCollection.insertOne({
            atmNo: 123123124,
            cvvCode: 123,
            accountId: new ObjectId(backData.insertedId),
            isActive: true
        }, { session })
        await session.commitTransaction();
        console.log({ atmData });

        console.log("session completed successful and transaction committed");

    } catch (error) {
        console.error("error while committing", error);

        await session.abortTransaction();

    } finally {
        console.log("session closed");
        session.endSession();
    }

}
module.exports = { transactions } 