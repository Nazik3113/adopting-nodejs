import { fileURLToPath } from 'url';
import path from "path";

const __filename = fileURLToPath(import.meta.url);

console.log(path.extname(__filename));