import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import ssr from 'vite-plugin-ssr/plugin'

import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import remarkEmoji from 'remark-emoji'
import remarkDirective from 'remark-directive'
import remarkDirectiveCustomFollower from './remarkDirectiveCustomFollower.js'

import rehypeMathJax from 'rehype-mathjax'
import rehypePrismPlusCustom from './rehypePrismPlusCustom.js'
import rehypeSlug from 'rehype-slug'
import rehypeToc from 'rehype-toc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const config = {
  plugins: [
    react(),
    mdx({
      remarkPlugins: [remarkMath, remarkGfm, remarkEmoji, remarkDirective, remarkDirectiveCustomFollower],
      rehypePlugins: [rehypeMathJax, rehypePrismPlusCustom, rehypeSlug, rehypeAutolinkHeadings, rehypeToc],
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
