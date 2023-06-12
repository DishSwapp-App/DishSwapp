
import faunadb, {  query as q } from "faunadb";


const fauna_key =process.env.REACT_APP_FAUNA_KEY
const client = new faunadb.Client({
    secret: fauna_key,
  });

  async function getCommentsByRecipeId(recipeId) {
    try {
      const result = await client.query(
        q.Map(
          q.Paginate(q.Match(q.Index('comments_by_recipeId'), recipeId)),
          q.Lambda('comment', q.Get(q.Var('comment')))
        )
      );
  
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
     

export default getCommentsByRecipeId