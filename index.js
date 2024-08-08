console.log("**********Index JS**********");
const dotenv = require('dotenv');
dotenv.config();
const startApp = require('./src/app')
const PORT = process.env.PORT || 4030
const { mdbClient } = require('./db/mongodbConnect')

const StartServer = async () => {
    try {
        const app = startApp()
        await mdbClient.connect();
        console.log('cluster0 Connected successfully');
        app.listen(PORT, () => {
            console.log(`Server running up at ${PORT}`);
        })
    } catch (error) {
        console.error('connection Error', error);
    }

}
StartServer()
