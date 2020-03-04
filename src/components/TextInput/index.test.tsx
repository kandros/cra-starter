import React from 'react'
import { render } from '@testing-library/react'
import { TextInput } from './index'

test(__dirname, () => {
  const value = 'abc'
  const label = 'my label'
  const { getByLabelText } = render(
    <TextInput label={label} value={value} onChange={jest.fn()} />
  )
  const input = getByLabelText(label)
  expect(input).toHaveValue(value)
})
