


### Push / Replace Policy
To prevent errors as a result of unexpected user behaviour, a balance has to be struck between having sequential pages in the browser history (as is common in normal site behaviour) and replacing the current location through `props`. In the latter case, the current URL gets overridden by a new one, whereupon the components corresponding to the URL get loaded.

The following pieces of the user flow will be done in the traditional way, with sequential pages:
- Login and Registration for both account types
- Accessing Profile Settings for both account types
- Accessing the Wallet for both account types

The pieces of the user flow that will use `props.history.replace()` are:
- Payment / tipping flow 
  - The ability to go back to a previous window will be retained, however.
- Funding the payment sender's wallet
- Withdrawing funds from a payment receiver's wallet 