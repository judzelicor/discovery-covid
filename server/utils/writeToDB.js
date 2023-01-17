import { promises as fs } from "fs";
import { join } from "path";


export async function writeToDB(data, filename) {
    await fs.writeFile(join(process.cwd(), "database", filename), JSON.stringify(data));
}