import { Socket } from "net";

const client = new Socket();

client.connect(8080, () => {
    console.log("Connected!");
    client.write("Hello server!");
});

client.on("data", (data) => {
    console.log(`Received: ${data}.`);
    client.end();
}); 

client.on("close", () => {
    console.log("Connection closed.");
});