import { client } from "../client";

async function getRecipesByAuthor(username) {
  const query = `*[_type == "recipe" && authorName == $username]`;
  const params = { username };
  const results = await client.fetch(query, params);
  return results;
}

export default getRecipesByAuthor;
