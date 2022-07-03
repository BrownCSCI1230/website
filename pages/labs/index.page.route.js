// This is a route function which captures the route `/labs/lab<labNumber>_<labName>`
export default (pageContext) => {
  const { url } = pageContext

  if (!url.startsWith('/labs')) {
    return false
  }

  const regex = /lab(\d+)_(\w+)/
  const found = regex.exec(url)

  if (!found || found.length !== 3) {
    return false
  }

  return { routeParams: { labNumber: found[1], labName: found[2] } }
}
