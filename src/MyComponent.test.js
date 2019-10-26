import React from 'react'
import { render } from '@testing-library/react'

import MyComponent from './MyComponent'

describe('<MyComponent />', () => {
  it('renders correctly', () => {
    const { getByText, asFragment } = render(<MyComponent />)
    expect(getByText('MyComponent')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })
})
