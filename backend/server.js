import express from 'express';
import cors from 'cors';
const app = express();

app.use(express.json());
app.use(cors());

// await connectDB();

const httpServer = app.listen(process.env.BACKEND_PORT);
httpServer.on("listening", () => {
    console.log("Server is listening on port:", httpServer.address().port);
});

async function gracefulShutdown() {
    console.log("\nServer is shutting down...");
    // await disconnectDB();
    httpServer.close(() => {
        console.log("server is closing...");
        process.exit(0);
    });
}

process.on("SIGTERM", gracefulShutdown);
process.on("SIGINT", gracefulShutdown);
