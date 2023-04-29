const post = {
  label: 'Post',
  name: 'post',
  path: 'pages',
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  match: {
    include: 'articles'
  },
  fields: [
    {
      type: 'string',
      name: 'layout',
      label: 'Layout'
    },
    {
      type: 'string',
      name: 'title',
      label: 'Title'
    },
    {
      type: 'string',
      name: 'permalink',
      label: 'Permalink'
    },
    {
      type: 'string',
      name: 'post_list_collection',
      label: 'Post list collection'
    },
    {
      type: 'boolean',
      name: 'use_algolia',
      label: 'Use Algolia'
    },
    {
      type: 'string',
      name: 'algolia_facet',
      label: 'Algolia facet'
    },
    {
      type: 'string',
      name: 'algolia_facet_value',
      label: 'Algolia facet value'
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

export default post
