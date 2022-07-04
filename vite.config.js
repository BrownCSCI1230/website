import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import ssr from 'vite-plugin-ssr/plugin'

import rehypePrismPlusCustom from './rehype-prism-plus-custom.js'

const config = {
  plugins: [
    react(),
    mdx({
      remarkPlugins: [],
      rehypePlugins: [rehypePrismPlusCustom],
    }),
    ssr(),
  ],
  clearScreen: false,
  resolve: {
    alias: {
      // Needed for MDX, see https://github.com/mdx-js/mdx/discussions/1794#discussioncomment-1581513
      'react/jsx-runtime': 'react/jsx-runtime.js',
    },
  },
  optimizeDeps: {
    include: [
      // Linked packages not inside node_modules are not pre-bundled, so this forces it to be pre-bundled
      'react/jsx-runtime.js',
    ],
  },
}

export default config
