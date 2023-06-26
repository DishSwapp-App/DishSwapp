import { client } from "../client";

export async function getRecipe() {
  const query = '*[_type == "recipe" && rotm == true]';
  const result = await client.fetch(query);
  return result[0];
}
