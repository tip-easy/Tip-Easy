import React from 'react'
import { Provider } from 'react-redux';

import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import SelectAmount from './SelectAmount';
import { store } from './../../../../store';

afterEach(rtl.cleanup);

describe('SelectAmount', () => {

  it('renders without crashing', () => {
    const wrapper = rtl.render(
      <Provider store={store} >
        <SelectAmount />
      </Provider>
    )
  })

  it('properly renders all content, including the "Next" button', () => {
    const wrapper = rtl.render(
      <Provider store={store} >
        <SelectAmount />
      </Provider>
    )
    const bye = wrapper.queryByText("Next")
    console.log(bye)
  })
})