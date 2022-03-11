import { Socket } from "net";

const client = new Socket();

client.connect(8080, () => {
    console.log("Connected!");
    client.write("get_file");
});

client.setEncoding("utf8");

client.on("data", (data) => {
    console.log(data);
});

client.on("close", () => {
    console.log("Connections closed.");
});