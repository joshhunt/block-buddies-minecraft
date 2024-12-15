import { PteroClient } from "@devnote-dev/pterojs";

export function getPteroClient() {
  const STEL_TOKEN = process.env.STEL_TOKEN;

  if (!STEL_TOKEN) {
    throw new Error("STEL_TOKEN is not set");
  }

  const client = new PteroClient("https://control.stelhosting.com", STEL_TOKEN);

  return client;
}

export async function getServer() {
  const STEL_SERVER_ID = process.env.STEL_SERVER_ID;

  if (!STEL_SERVER_ID) {
    throw new Error("STEL_SERVER_ID is not set");
  }

  const client = getPteroClient();
  const server = await client.servers.fetch(STEL_SERVER_ID);
  return server;
}
