const language = {
  format: 'yaml',
  label: 'Language',
  name: 'language',
  path: '_data',
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false
    }
  },
  match: {
    include: 'language'
  },
  fields: [
    {
      label: 'Footer',
      name: 'footer',
      type: 'object',
      fields: [
        {
          label: 'Follow CSIS',
          name: 'follow_csis',
          type: 'string'
        },
        {
          label: 'Follow Program',
          name: 'follow_program',
          type: 'string'
        },
        {
          label: 'About Heading',
          name: 'about_heading',
          type: 'string'
        },
        {
          label: 'About Description',
          name: 'about_description',
          type: 'string'
        },
        {
          label: 'Phone Number',
          name: 'phone_number',
          type: 'string'
        },
        {
          label: 'Email Address',
          name: 'email_address',
          type: 'string'
        },
        {
          label: 'Twitter',
          name: 'twitter',
          type: 'string'
        },
        {
          label: 'Address',
          name: 'address',
          type: 'string'
        },
        {
          label: 'Copyright',
          name: 'copyright',
          type: 'string'
        }
      ]
    },
    {
      label: 'Menu',
      name: 'menu',
      type: 'object',
      fields: [
        {
          label: 'The Commission',
          name: 'commission',
          type: 'string'
        },
        {
          label: 'Our Work—Themes',
          name: 'mission',
          type: 'string'
        },
        {
          label: 'Resources',
          name: 'resources',
          type: 'string'
        }
      ]
    },
    {
      label: 'Single Post',
      name: 'single_post',
      type: 'object',
      fields: [
        {
          label: 'from_the_commission',
          name: 'from_commission',
          type: 'string'
        },
        {
          label: 'References',
          name: 'references',
          type: 'string'
        },
        {
          label: 'Further Reading',
          name: 'further_reading',
          type: 'string'
        },
        {
          label: 'Overview',
          name: 'quick_overview',
          type: 'string'
        },
        {
          label: 'Read the In-Depth Overview',
          name: 'themes_overview_btn',
          type: 'string'
        },
        {
          label: 'Related Posts',
          name: 'related_posts',
          type: 'string'
        },
        {
          label: 'More Related Posts',
          name: 'more_posts',
          type: 'string'
        },
        {
          label: 'Featured Post',
          name: 'featured_post',
          type: 'string'
        }
      ]
    },
    {
      label: 'Events',
      name: 'events',
      type: 'object',
      fields: [
        {
          name: 'blurb',
          label: 'Blurb',
          type: 'string',
          ui: {
            component: 'textarea'
          }
        }
      ]
    },
    {
      label: 'About the Commission',
      name: 'about_the_commission',
      type: 'object',
      fields: [
        {
          name: 'about_the_commission',
          label: 'About the Commission',
          type: 'string'
        },
        {
          name: 'learn_more',
          label: 'Learn More',
          type: 'string'
        },
        {
          name: 'meet_commission',
          label: 'Meet the Commission',
          type: 'string'
        },
        {
          name: 'members_contributors',
          label: 'Commission Members and Contributors',
          type: 'string'
        },
        {
          name: 'table_contents_list_header',
          label: 'Skip to...',
          type: 'string'
        },
        {
          name: 'back_to_top',
          label: 'Back to top',
          type: 'string'
        },
        {
          name: 'bio_button',
          label: 'Read Full Bio',
          type: 'string'
        }
      ]
    },
    {
      label: 'Commission Members and Contributors',
      name: 'commission_members_and_contributors',
      type: 'object',
      fields: [
        {
          name: 'Blurb',
          label: 'Blurb',
          type: 'string',
          ui: {
            component: 'textarea'
          }
        }
      ]
    },
    {
      label: 'Home',
      name: 'home',
      type: 'object',
      fields: [
        {
          name: 'subtitle',
          label: 'Subtitle',
          type: 'string'
        },
        {
          name: 'title',
          label: 'Title',
          type: 'string'
        },
        {
          name: 'commission_btn',
          label: 'Commission Button',
          type: 'string'
        },
        {
          name: 'commission_btn_aria_label',
          label: 'Commission btn area label',
          type: 'string'
        },
        {
          name: 'events_header',
          label: 'Events header',
          type: 'string'
        },
        {
          name: 'series_header',
          label: 'Series header',
          type: 'string'
        },
        {
          name: 'articles_header',
          label: 'Articles header',
          type: 'string'
        },
        {
          name: 'articles_btn',
          label: 'Articles btn',
          type: 'string'
        },
        {
          name: 'articles_btn_aria_label',
          label: 'Articles btn area label',
          type: 'string'
        },
        {
          name: 'recent_header',
          label: 'Recent Header',
          type: 'string'
        },
        {
          name: 'themes_header',
          label: 'Themes header',
          type: 'string'
        },
        {
          name: 'themes_desc',
          label: 'Themes description',
          type: 'string',
          ui: {
            component: 'textarea'
          }
        }
      ]
    },
    {
      name: 'photo_credit',
      label: 'Photo Credit',
      type: 'string'
    },
    {
      name: 'search_placeholder',
      label: 'Search Placeholder',
      type: 'string'
    },
    {
      name: 'tags',
      label: 'Tags',
      type: 'string'
    },
    {
      name: 'share',
      label: 'Share',
      type: 'string'
    },
    {
      name: 'cite',
      label: 'Cite',
      type: 'string'
    },
    {
      name: 'this_page',
      label: 'This Page',
      type: 'string'
    },
    {
      name: 'citation',
      label: 'Citation',
      type: 'string'
    },
    {
      name: 'author_list',
      label: 'Author List',
      type: 'string'
    },
    {
      name: 'search',
      label: 'Search',
      type: 'string'
    },
    {
      name: 'currently_reading',
      label: 'Currently Reading',
      type: 'string'
    },
    {
      name: 'pdf_desktop',
      label: 'PDF (Desktop)',
      type: 'string'
    },
    {
      name: 'pdf_mobile',
      label: 'PDF (Mobile)',
      type: 'string'
    },
    {
      name: 'series',
      label: 'Series',
      type: 'object',
      fields: [
        {
          name: 'from',
          label: 'From',
          type: 'string'
        }
      ]
    },
    {
      name: 'next_article',
      label: 'Next Article',
      type: 'string'
    },
    {
      name: 'previous_article',
      label: 'Previous Article',
      type: 'string'
    },
    {
      name: 'related_articles',
      label: 'Related Articles',
      type: 'string'
    },
    {
      name: 'about_csis',
      label: 'About CSIS',
      type: 'string'
    },
    {
      name: 'about_csis_desc',
      label: 'About CSIS Description',
      type: 'string',
      ui: {
        component: 'textarea'
      }
    }
  ]
}

export default language
