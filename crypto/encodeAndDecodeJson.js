import crypto from "crypto";

const algorithm = 'aes192';
const password = 'rZMZ\'*rK&^*>\+_{*K<kfx7H!e_F!8EYVtP&DEAuznvBR<wzfvwU/%s+\'Wu&s$_]$<:+p:EP3S-)Y%!`R`vmeY';
const key = crypto.scryptSync(password, 'salt', 24);
const iv = Buffer.from(crypto.randomBytes(16));

const cipher = crypto.createCipheriv(algorithm, key, iv);

let encrypted = cipher.update(
    JSON.stringify({name: "Nazarii", surname: "Spikhalskyi", someData: [1, 2, 3]}),
    'utf8',
    'hex'
);

encrypted += cipher.final('hex');

console.log(encrypted);

const decipher = crypto.createDecipheriv(algorithm, key, iv);

let decrypted = decipher.update(encrypted, 'hex', 'utf8');

decrypted += decipher.final('utf8');

console.log(JSON.parse(decrypted));
