import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "sh3av32t",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
};

const client = createClient(config);

export default client;
