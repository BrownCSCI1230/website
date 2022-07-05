import React from 'react'
import { Counter } from '../resources/common/Counter'

export { documentProps, Page }

const documentProps = { title: 'Home' }

function Page() {
  return (
    <>
      <h1>Welcome to CSCI 1230!</h1>
      This page is:
      <ul>
        <li>Pre-rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
      </ul>
    </>
  )
}
