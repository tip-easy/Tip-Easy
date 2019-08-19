import React from 'react'
import { Provider } from 'react-redux';

import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import PaymentMethodDetails from './PaymentMethodDetails';
import { store } from './../../../../store';

afterEach(rtl.cleanup);

describe('PaymentMethodDetails', () => {

  it('renders without crashing', () => {
    const wrapper = rtl.render(
      <Provider store={store} >
        <PaymentMethodDetails />
      </Provider>
    )
  })
})