// gatsby-node.ts
import type { GatsbyNode } from "gatsby";
import { fetchClients } from "./src/utils/api";
import { Client } from "./src/types";

export const sourceNodes: GatsbyNode["sourceNodes"] = async ({
  actions,
  createNodeId,
  createContentDigest,
  reporter,
}) => {
  const { createNode } = actions;

  const searchQuery = "a"; // TODO: Read query from config/environment
  reporter.info(`🔍 Fetching clients with search: "${searchQuery}"`);

  try {
    const clients: Client[] = await fetchClients(searchQuery);

    clients.forEach((client, index) => {
      createNode({
        ...client,
        id: createNodeId(`client-${client.email}-${index}`),
        parent: null,
        children: [],
        internal: {
          type: "Client",
          contentDigest: createContentDigest(client),
        },
      });
    });

    reporter.info(`Created ${clients.length} Client nodes.`);
  } catch (error) {
    reporter.panicOnBuild(`Failed to source client data: ${error}`);
  }
};