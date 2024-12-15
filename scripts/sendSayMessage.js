// @ts-check

import { getServer } from "./lib/api.js";

/** @type {Record<string, string>} */
const MESSAGES = {
  pack_uploading: "Uploading new data pack...",
  reload_packs_started: "Reloading packs...",
  reload_packs_finished: "Reloaded packs!",
};

const MESSAGE_ID = process.env.MESSAGE_ID;

if (!MESSAGE_ID) {
  throw new Error("MESSAGE_ID is not set");
}

const message = MESSAGES[MESSAGE_ID];

if (!message) {
  throw new Error(`Message with id ${MESSAGE_ID} not found`);
}

const server = await getServer();
await server.sendCommand(`say ${message}`);
