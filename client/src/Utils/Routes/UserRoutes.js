import React from 'react'

// Pages
import UserSettings from '../../Pages/Settings/UserSettings'
import UpdateUserSettings from '../../Pages/Settings/UpdateUserSettings';
import Wallet from '../../Pages/Wallet/Wallet';
import ShowCode from '../../Pages/Wallet/ShowCode';

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