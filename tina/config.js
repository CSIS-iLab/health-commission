import { defineConfig } from 'tinacms'
import authors from './collections/authors'
import events from './collections/events'
import language from './collections/global/language'
import author from './collections/pages/author'
import event from './collections/pages/event'
import finalReport from './collections/pages/final-report'
import post from './collections/pages/post'
import search from './collections/pages/search'
import theme from './collections/pages/theme'
import posts from './collections/posts'
import themes from './collections/themes'

// Your hosting provider likely exposes this as an environment variable
// const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'master'
const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH || // custom branch env override
  process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF || // Vercel branch env
  process.env.HEAD // Netlify branch env

export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID, // Get this from tina.io
  token: process.env.TINA_TOKEN, // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: 'admin',
    publicFolder: './'
  },
  media: {
    tina: {
      mediaRoot: 'assets/images',
      publicFolder: ''
    }
  },
  schema: {
    collections: [
      event,
      events,
      author,
      authors,
      theme,
      themes,
      post,
      posts,
      search,
      finalReport,
      language
    ]
  }
})
