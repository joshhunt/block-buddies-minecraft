// @ts-check

import { getServer } from "./lib/api.js";

const server = await getServer();
await server.sendCommand(`reload`);
