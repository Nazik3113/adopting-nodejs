import { createReadStream as fsCreateReadStream } from "fs";
import net from "net";
import path from "path";
import { pipeline } from "stream";

const server = net.createServer();
const PORT = process.env.PORT || 8080;

server.on("connection", (socket) => {
    socket.setEncoding('utf8');
    console.log("New client connected!");

    socket.on("error", (error) => {
        console.log(`Some error: ${error}`);
    });

    socket.on("data", (msg) => {
        if (msg === "get_file") {
            const readStream = fsCreateReadStream(
                path.join("../data", "big.txt")
            );

            pipeline(readStream, socket, error => {
                if (error) {
                    console.log(error);
                }
            });
        }
    });
});

server.listen(PORT, () => {
    const { address, family, port } = server.address();
    console.log(`address: ${address}, family: ${family}, port: ${port}`);
    console.log("Tcp server started");
});