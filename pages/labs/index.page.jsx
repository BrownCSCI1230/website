import React from 'react'

export { onBeforeRender, Page }

async function onBeforeRender(pageContext) {
  const { labNumber, labName } = pageContext.routeParams || {}

  const title = `Lab ${labNumber}: ${labName}`

  return {
    pageContext: {
      pageProps: { title, labNumber, labName },
      documentProps: { title },
    },
  }
}

function Page({ title }) {
  return (
    <>
      <h1>{title}</h1>
    </>
  )
}
