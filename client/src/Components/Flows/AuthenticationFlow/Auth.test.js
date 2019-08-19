import React from 'react'
import { Provider } from 'react-redux';

import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Auth from './Auth';
import { store } from './../../../store';

afterEach(rtl.cleanup);

describe('Auth', () => {

  it('renders without crashing', () => {
    const wrapper = rtl.render(
      <Provider store={store} >
        <Auth />
      </Provider>
    )
  })
})