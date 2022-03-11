import fs from "fs";

fs.unlink("../data/big.txt.gz", error => {
    if (error) throw error;
});