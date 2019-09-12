import { addDecorator, configure } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import React from 'react'

addDecorator(withKnobs)
addDecorator(Story => <Story />)

function loadStories () {
  require('@girchi/frontend/src/stories')
}

configure(loadStories, module)
