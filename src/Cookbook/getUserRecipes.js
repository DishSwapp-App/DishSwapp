import faunadb, { query as q } from 'faunadb';

const fauna_key = process.env.REACT_APP_FAUNA_KEY;
const client = new faunadb.Client({ secret: fauna_key });

async function getUserRecipes(authorName) {
  try {
    const result = await client.query(
      q.Map(
        q.Paginate(q.Match(q.Index('authorName'), authorName)),
        q.Lambda('ref', q.Get(q.Var('ref')))
      )
    );
    return result.data;
  } catch (e) {
    console.error(e);
  }
}

export default getUserRecipes;