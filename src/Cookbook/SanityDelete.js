import { createClient } from "@sanity/client";

const token = process.env.REACT_APP_SANITY_TOKEN;

const client = createClient({
  projectId: "sbwpz8d0",
  dataset: "production",
  token: token,
  useCdn: false,
});

async function deleteRecipeById(id) {
  try {
    await client.delete(id);
    console.log(`Document with ID ${id} was deleted successfully!`);
  } catch (error) {
    console.error(`Error deleting document with ID ${id}: `, error);
  }
}

export default deleteRecipeById;
