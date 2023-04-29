const about = {
  label: 'About',
  name: 'about',
  path: 'pages',
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  match: {
    include: 'about'
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
      name: 'show_page_highlights',
      label: 'Show page highlights'
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
      name: 'excerpt',
      label: 'Excerpt',
      ui: {
        component: 'textarea'
      }
    },
    {
      type: 'string',
      name: 'credits',
      label: 'Credits',
      ui: {
        component: 'textarea'
      }
    },
    {
      type: 'string',
      name: 'funder_acknowledgements',
      label: 'Funder acknowledgements',
      ui: {
        component: 'textarea'
      }
    },
    {
      type: 'string',
      name: 'header_image',
      label: 'Header image'
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
      type: 'string',
      name: 'post_image',
      label: 'Post image'
    },
    {
      type: 'string',
      name: 'post_image_caption',
      label: 'Post image caption'
    },
    {
      type: 'string',
      name: 'post_image_credit',
      label: 'Post Image credit'
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

export default about
