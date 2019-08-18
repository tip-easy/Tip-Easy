import React from 'react'
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

afterEach(rtl.cleanup);

describe('App', () => {

  it('renders', () => {
    const ten = 10
    expect(ten).toBe(10) 
  })
})