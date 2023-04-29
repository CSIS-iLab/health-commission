const themes = {
  label: 'Themes',
  name: 'themes',
  path: '_themes',
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
      label: 'Long Title Formatted',
      name: 'long_title_formatted',
      type: 'string',
      ui: {
        component: 'textarea'
      }
    },
    {
      label: 'Short Title',
      name: 'short_title',
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
      label: 'Further Reading',
      name: 'further_reading',
      type: 'string',
      ui: {
        component: 'textarea'
      }
    },
    {
      label: 'Featured Post',
      name: 'featured_post',
      type: 'string'
    },
    {
      label: 'Order',
      name: 'order',
      type: 'number'
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

export default themes
