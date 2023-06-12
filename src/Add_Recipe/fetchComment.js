import { client } from "../client";

const fetchComments = async (id) => {
  try {
    const query = `*[_type == "comment" && recipeID == "${id}"]`;
    const result = await client.fetch(query);
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default fetchComments;
