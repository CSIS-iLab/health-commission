const posts = {
  label: 'Posts',
  name: 'posts',
  path: '_posts',
  match: {
    include: '**/*'
  },
  fields: [
    {
      label: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      label: 'Date',
      name: 'date',
      type: 'datetime'
    },
    {
      label: 'Excerpt',
      name: 'excerpt',
      type: 'string',
      ui: {
        component: 'textarea'
      }
    },
    {
      label: 'Content type',
      name: 'content_type',
      type: 'string'
    },
    {
      label: 'Keywords',
      name: 'keywords',
      type: 'string',
      list: true
    },
    {
      label: 'Image',
      name: 'image',
      type: 'image'
    },
    {
      label: 'Image Caption',
      name: 'image_caption',
      type: 'string'
    },
    {
      label: 'Image Credit',
      name: 'image_credit',
      type: 'string'
    },
    {
      label: 'Authors',
      name: 'authors',
      type: 'string',
      list: true
    },
    {
      label: 'Series',
      name: 'series',
      type: 'string',
      ui: {
        component: 'textarea'
      }
    },
    {
      label: 'Themes',
      name: 'themes',
      type: 'string',
      list: true
    },
    {
      label: 'PDF',
      name: 'pdf',
      type: 'string'
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Body of Document',
      description: 'This is the markdown body',
      isBody: true
    }
  ]
}

export default posts
