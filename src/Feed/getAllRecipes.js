import faunadb, { query as q } from 'faunadb';

const client = new faunadb.Client({ secret: 'fnAFFFdVycAAUQIYdaKZBTm_cMJQeKQoOKMcfDXM' });

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