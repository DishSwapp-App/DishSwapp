import { client } from "../client";

async function deleteRecipeById(id) {
  try {
    await client.delete(id);
    console.log(`Document with ID ${id} was deleted successfully!`);
  } catch (error) {
    console.error(`Error deleting document with ID ${id}: `, error);
  }
}

export default deleteRecipeById;
