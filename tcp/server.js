import net from "net";

const server = net.createServer();

server.on("connection", (socket) => {
    socket.setEncoding('utf8');
    console.log("New client connected!");

    server.getConnections((error, connections) => {
        if (error) throw error;

        socket.write(`${connections} users connected to out server`);
    });

    socket.on("data", (msg) => {
        console.log(msg.toString());

        socket.write(`From server: ${msg.toUpperCase()}`);
    });
});

server.listen(8080, () => {
    const { address, family, port } = server.address();
    console.log(`address: ${address}, family: ${family}, port: ${port}`);
    console.log("Tcp server started");
});