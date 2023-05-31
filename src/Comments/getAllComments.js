
import faunadb, {  query as q } from "faunadb";


const fauna_key =process.env.REACT_APP_FAUNA_KEY
const client = new faunadb.Client({
    secret: fauna_key,
  });

const getAllComments = async () => {
    try {
      const result = await client.query(
        q.Map(
            q.Paginate(q.Match(q.Index('all_comments'))),
            q.Lambda('ref', q.Get(q.Var('ref')))
          )
      );
  
      const comments = result.data.map((comment) => comment.data);
      console.log("All comments: ", comments);
  
      return comments;
    } catch (error) {
      console.log("Error getting comments: ", error);
    }
  };

export default getAllComments