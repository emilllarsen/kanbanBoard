import mongoose from 'mongoose';
const { DB_PORT, DB_HOSTNAME, DB_PROTOCOL, DB_NAME, NODE_VERSION } = process.env; // all info from env files

const MONGO_URI = `${DB_PROTOCOL}://${DB_HOSTNAME}:${DB_PORT}/${DB_NAME}`; // URI connection that will be our UTI in mongodb

export function connectDB(){
    if(DB_PROTOCOL && DB_HOSTNAME && DB_PORT && DB_NAME){
        mongoose.connection.on("error", (err) => {
            console.log("Mongoose connection error", err); // if we have error, we show the message
        });
        console.log("Connection to database now...", MONGO_URI); // if we have everything needed, we show console.log
        return mongoose.connect(MONGO_URI, { // Connecting to the URI we set above
            appName: DB_NAME - NODE_VERSION, // include node version so we can see later if we are in prod or dev
            maxPoolSize: 100, // 100 persons can make request at the same time!
        });
    }
    throw new Error("Missing environment variables to connect to the database! Please contact Admin!"); // if we are missing env variables, we throw an error
}

export function disconnectDB(){ 
    return mongoose.disconnect(); // Then killing the server, we disconnect from the db! 
}