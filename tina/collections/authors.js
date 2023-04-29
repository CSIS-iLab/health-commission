const authors = {
  label: 'Authors',
  name: 'authors',
  path: '_authors',
  match: {
    include: '**/*'
  },
  fields: [
    {
      label: 'Name',
      name: 'title',
      type: 'string'
    },
    {
      label: 'Date',
      name: 'date',
      type: 'datetime'
    },
    {
      label: 'Short Title',
      name: 'short_title',
      type: 'string'
    },
    {
      label: 'Image',
      name: 'image',
      type: 'image'
    },
    {
      label: 'Body of Document',
      name: 'body',
      type: 'rich-text',
      description: 'This is the markdown body',
      isBody: true
    }
  ]
}

export default authors
