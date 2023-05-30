import faunadb, { query as q } from 'faunadb';


const fauna_key = process.env.REACT_APP_FAUNA_KEY
const client = new faunadb.Client({ secret: fauna_key });

async function getAllRecipes() {
  try {
    const result = await client.query(
      q.Map(
        q.Paginate(q.Match(q.Index('all_recipes'))),
        q.Lambda('ref', q.Get(q.Var('ref')))
      )
    );
    return result.data;
  } catch (e) {
    console.error(e);
  }
}

export default getAllRecipes