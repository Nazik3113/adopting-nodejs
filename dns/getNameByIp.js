import dns from "dns";

dns.reverse("142.250.203.206", (error, address) => {
    if (error) {
        console.log(error);
    }

    console.log(address);
});