import { Server } from "http";
import config from "./app/config";
import app from "./app";

async function main() {
  const server: Server = app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
  });
}

main();
