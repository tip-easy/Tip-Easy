import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';

// Pages
import UserProfile from '../../Components/Pages/Sender/UserProfile/UserProfile';
import UserSettings from '../../Components/Pages/CommonUse/UserSettings/UserSettings';
import UpdateUserSettings from '../../Components/Pages/CommonUse/UserSettings/UpdateUserSettings';
import Wallet from '../../Components/Pages/CommonUse/Wallet/Wallet';
import ShowCode from '../../Components/Pages/CommonUse/Wallet/ShowCode'

import AuthenticationRestrictedRoute from '../../Components/HOCs/AuthenticationRestrictedRoute'

export const UserRoutes = () => {
  return (
    <>
      {/* --- USER-RELATED ROUTES --- */}
        {/* Wallet */}
        {/* Both Sender && Receiver */}
        <AuthenticationRestrictedRoute 
          path="/wallet"
          render={props => (
            <Wallet {...props} />
          )}
        />

        {/* User Profile */}
        {/* Contains Receiver Code - if applicable */}
        <AuthenticationRestrictedRoute 
          exact
          path="/user"
          render={props => (
            <UserProfile {...props} />
          )}
        />

        {/* User Settings */}
        {/* Contains Change Password, Delete Account, etc. */}
        <AuthenticationRestrictedRoute 
          exact
          path="/user/settings"
          render={props => (
            <UserSettings {...props} />
          )}
        />

        {/* Change User Settings */}
        {/* Contains Change Password, Delete Account, etc. */}
        <AuthenticationRestrictedRoute 
          path="/user/settings/update"
          render={props => (
            <UpdateUserSettings {...props} />
          )}
        />

        {/* Show Receiver Code */}
        {/* >>> OPTIONAL. RECEIVER-ONLY. Might decide to show the receiver code on Wallet */}
        <AuthenticationRestrictedRoute 
          path="/show-code"
          render={props => (
            <ShowCode {...props} />
          )}
        />
    </>
  )
}

export default UserRoutes;