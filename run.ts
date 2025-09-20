import fs from "fs";

// Import all scripts in the scripts folder

const files = await fs.promises.readdir("scripts");

for (const file of files) {
  await import("./scripts/" + file);
}
