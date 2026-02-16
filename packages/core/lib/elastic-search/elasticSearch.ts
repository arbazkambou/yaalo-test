import { Client } from "@elastic/elasticsearch";

let esClient: Client | null = null;

function getClient(): Client | null {
  if (!esClient && process.env.ELASTICSEARCH_NODE) {
    esClient = new Client({
      node: process.env.ELASTICSEARCH_NODE,
      auth: {
        apiKey:process.env.ELASTICSEARCH_API_KEY ?? "",
      }
    });
  }
  return esClient;
}

export async function indexLog(index: string, body: object) {
  const client = getClient();

  if (!client) {
    // Local/dev mode
    console.log("Log (mocked, no ES client):", body);
    return;
  }

  try {
    const res=await client.index({
      index,
      body: { ...body, recorded_at: new Date().toISOString() },
    });
  } catch (error) {
    console.error("Failed to index to Elasticsearch:", error);
  }
}
