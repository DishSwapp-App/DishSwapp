export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'avatarImage',
      title: 'Avatar Image',
      type: 'image',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'text',
    },
    {
      name: 'recipeID',
      title: 'Recipe ID',
      type: 'string',
    },
  ],
}
