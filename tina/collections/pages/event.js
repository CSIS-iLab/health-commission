const event = {
  label: 'Event',
  name: 'event',
  path: 'pages',
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  match: {
    include: 'events'
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
      name: 'event_list_collection',
      label: 'event list collection'
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
      type: 'boolean',
      name: 'show_page_highlights',
      label: 'Show page highlights'
    },
    {
      type: 'string',
      name: 'excerpt',
      label: 'Excerpt',
      ui: {
        component: 'textarea'
      }
    },
    {
      type: 'string',
      name: 'image',
      label: 'Image'
    },
    {
      type: 'string',
      name: 'image_credit',
      label: 'Image credit'
    },
    {
      type: 'string',
      name: 'header_image_caption',
      label: 'Header image caption'
    },
    {
      type: 'string',
      name: 'header_image_credit',
      label: 'Header Image credit'
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

export default event
