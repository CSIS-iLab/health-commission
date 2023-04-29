const finalReport = {
  label: 'Final Report',
  name: 'final_report',
  path: 'pages',
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  match: {
    include: 'final-report'
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
      label: 'Date',
      name: 'date',
      type: 'datetime'
    },
    {
      label: 'Authors',
      name: 'authors',
      type: 'string',
      list: true
    },
    {
      label: 'Image',
      name: 'image',
      type: 'string'
    },
    {
      label: 'Image Credit',
      name: 'image_credit',
      type: 'string'
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
      label: 'PDF',
      name: 'pdf',
      type: 'string'
    },
    {
      type: 'boolean',
      name: 'show_page_highlights',
      label: 'Show page highlights'
    },
    {
      type: 'boolean',
      name: 'page_highlights_download',
      label: 'Page highlights download'
    },
    {
      type: 'boolean',
      name: 'page_highlights_cite',
      label: 'Page highlights cite'
    },
    {
      type: 'boolean',
      name: 'page_highlights_share',
      label: 'Page highlights share'
    },
    {
      label: 'Related posts',
      name: 'related_posts',
      type: 'string',
      list: true
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

export default finalReport
