// @flow strict-local
import { storiesOf } from '@storybook/react'
import React from 'react'

storiesOf('test', module)
  .add('test 1', () => {
    return (
      <div style={{ width: '350px' }}>
        test 1
      </div>
    )
  })
