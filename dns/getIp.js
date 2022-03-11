import dns from "dns";

dns.lookup("google.com", (error, address) => {
    if (error) {
        console.log(error);
    }

    console.log(address);
});