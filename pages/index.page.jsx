import React from 'react';
import { Counter } from './components/Counter';

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
  );
}

const documentProps = { title: 'Home' };

export { Page, documentProps };
