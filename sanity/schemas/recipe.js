export default {
  name: 'recipe',
  type: 'document',
  title: 'Recipe',
  fields: [
    {
      name: 'recipeTitle',
      type: 'string',
      title: 'Recipe Title',
    },
    {
      name: 'authorName',
      type: 'string',
      title: 'Author Name',
    },
    {
      name: 'recipeIngredients',
      type: 'text',
      title: 'Recipe Ingredients',
    },
    {
      name: 'recipeInstructions',
      type: 'text',
      title: 'Recipe Instructions',
    },
    {
      name: 'recipeURL',
      title: 'Recipe URL',
      type: 'string',
    },
  ],
}
