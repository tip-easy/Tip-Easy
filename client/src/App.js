import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// Styling
import "./App.scss";

// Components
import AuthenticationHeader from './Components/General/AuthenticationHeader'

import Auth from './Components/Flows/AuthenticationFlow/Auth';

// Route Objects
import FundingRoutes from './Utils/Routes/FundingRoutes';
import PaymentMethodRoutes from './Utils/Routes/PaymentMethodRoutes';
import TippingRoutes from './Utils/Routes/TippingRoutes';
import UserRoutes from './Utils/Routes/UserRoutes';
import WithdrawalRoutes from './Utils/Routes/WithdrawalRoutes';

import RouterObject from './Utils/Routes/Routes'

const App = (props) =>  {
  return (
    <main>
      <RouterObject />
    </main>
  )
}

export default App;
