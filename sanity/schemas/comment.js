export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'author',
      title: 'Author',
      type: 'text',
    },
    {
      name: 'avatarImageURL',
      title: 'Avatar Image URL',
      type: 'string',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },

    {
      name: 'recipeID',
      title: 'Recipe ID',
      type: 'string',
    },
  ],
}
