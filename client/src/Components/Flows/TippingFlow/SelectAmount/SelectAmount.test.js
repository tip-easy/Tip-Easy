import React from 'react'
import { Provider } from 'react-redux';

import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import {SelectAmount} from './SelectAmount';

afterEach(rtl.cleanup);

describe('SelectAmount', () => {

  it('renders', () => {
    
    const wrapper = rtl.render(
      <div>next</div>
    )
    const element = wrapper.queryAllByText(/Next/i)
    expect(element).toBeTruthy(); // jest matcher
  })
})