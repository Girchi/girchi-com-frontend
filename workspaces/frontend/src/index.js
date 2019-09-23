// @flow strict-local
import { Application } from 'modules/application'
import React from 'react'
import ReactDOM from 'react-dom'

function App () {
  return (
    <Application />
  )
}

if (document.body) {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('main'))
  )
} else {
  console.error('This can\'t be happening!')
}
