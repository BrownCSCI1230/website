import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import ssr from 'vite-plugin-ssr/plugin'

import remarkMath from 'remark-math'
import remarkGfm from 'remark-gfm'
import remarkEmoji from 'remark-emoji'

import rehypeMathJax from 'rehype-mathjax'
import rehypePrismPlusCustom from './rehype-prism-plus-custom.js'
import rehypeSlug from 'rehype-slug'
import rehypeToc from 'rehype-toc'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const config = {
  plugins: [
    react(),
    mdx({
      remarkPlugins: [remarkMath, remarkGfm, remarkEmoji],
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
