const home = {
  label: 'Home',
  name: 'home',
  path: 'pages',
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  match: {
    include: 'index'
  },
  fields: [
    {
      type: 'string',
      name: 'layout',
      label: 'Layout'
    },
    {
      type: 'string',
      name: 'permalink',
      label: 'Permalink'
    },
    {
      type: 'string',
      name: 'commission_desc',
      label: 'Commission description',
      ui: {
        component: 'textarea'
      }
    },
    {
      type: 'string',
      name: 'featured_post_primary',
      label: 'Featured post primary'
    },
    {
      type: 'string',
      name: 'featured_post_secondary',
      label: 'Featured post secondary',
      list: true
    },
    {
      type: 'string',
      name: 'featured_events',
      label: 'Featured events'
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

export default home
