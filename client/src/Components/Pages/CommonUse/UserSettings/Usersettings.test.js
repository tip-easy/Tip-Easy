import React from 'react'
import { Provider } from 'react-redux';

import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import UserSettings from './UserSettings';
import { store } from './../../../../store';

afterEach(rtl.cleanup);

describe('UserSettings', () => {

  it('renders without crashing', () => {
    const wrapper = rtl.render(
      <Provider store={store} >
        <UserSettings />
      </Provider>
    )
  })
})