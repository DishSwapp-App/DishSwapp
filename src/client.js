import { createClient } from "@sanity/client";

export const token = process.env.REACT_APP_SANITY_TOKEN;
export const client = createClient({
  projectId: "sbwpz8d0",
  dataset: "production",
  token: token,
  useCdn: true,
});
