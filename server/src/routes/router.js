const requiredParam = require('../global-helpers/required-parameter');

async function router({ 
  httpRequest = requiredParam('httpRequest'), 
  processors = requiredParam('processors'), 
  res // TODO: Remove reliance on Express' res object
} = {}) {
  // TODO: Route request objects to relevant processors 
  // TODO: Receive mock response data from resolved promise
  const {
    getUserProcessor,
    updateUserProcessor,
    deleteUserProcessor,
    resetPasswordProcessor,
    getBalanceProcessor,
    getTransactionsProcessor,
    getPaymentMethodsProcessor,
    addPaymentMethodProcessor,
    depositProcessor,
    findReceiverProcessor,
    sendTransactionProcessor,
    loginProcessor,
    registerProcessor,
  } = processors;

  switch (httpRequest.path) {
    //====== Root Endpoint ======//
    case '/':
      if (httpRequest.method === 'GET') {
        return res.send('Server Running.');
      } else {
        return unroutedRequestResponse({ httpRequest, res });
      }

    //====== Auth Endpoints ======//
    case '/login':
      if (httpRequest.method === 'POST') {
        const response = await loginProcessor(httpRequest);
        return res.send(response);
      }

    case '/register':
      if (httpRequest.method === 'POST') {
        return res.status(201).send({ message: "successfully registered" });
      }

    //====== User Endpoints ======//
    case '/me':
      if (httpRequest.method === 'GET') {
        return res.send({
          account_type: "receiver",
          name: "Anthony",
          email: "anthony@company.com",
          profile_img: "",
          unique_code: "DSE2986",
          location: "Netherlands",
          organisation: "CoolStuff",
          default_currency: "eur"
        });
      }
      else if (httpRequest.method === 'PATCH') {
        return res.send({
          account_type: "receiver",
          name: "Anthony",
          email: "anthony@company.com",
          profile_img: "",
          unique_code: "DSE2986",
          location: "Netherlands",
          organisation: "CoolStuff",
          default_currency: "eur",
          ...httpRequest.body
        });
      }
      else if (httpRequest.method === 'DELETE') {
        return res.send({ message: "successfully deleted" });
      } else {
        return unroutedRequestResponse({ httpRequest, res });
      }
    
    case '/me/reset-password':
      if (httpRequest.method === 'PUT') {
        return res.send({ message: "Successfully updated password." });
      } else {
        return unroutedRequestResponse({ httpRequest, res });
      }

    case '/me/balance':
      if (httpRequest.method === 'GET') {
        return res.send([{
          calculated_balance: 14.43,
          currency: "usd",
          wallet_type: "sender"
        }, {
          calculated_balance: 56.24,
          currency: "usd",
          wallet_type: "receiver"
        }]);
      } else {
        return unroutedRequestResponse({ httpRequest, res });
      }

    case '/me/transactions':
      if (httpRequest.method === 'GET') {
        return res.send([{
          transaction_id: "tx_3b241101-e2bb-4255-8caf-4136c566a962",
          amount: 3.47,
          currency: "usd",
          time_received: 1565096311,
          payment_method: {

          },
          transaction_type: "received", // sent OR withdraw OR deposit
          sender: {
            name: "Jeff",
            profile_img: "",
            location: "New York"
          }
        }])
      } else {
        return unroutedRequestResponse({ httpRequest, res });
      }

    case '/me/payment-methods':
      if (httpRequest.method === 'GET') {
        return res.send([{
          pay_method_id: "pm_dee11d4e-63c6-4d90-983c-5c9f1e79e96c",
          pay_method_type: "card",
          created_at: 1565094311,
          last_used: 1565097311,
          brand: "visa",
          last_4_chars: "4242"
        }]);
      }
      else if (httpRequest.method === 'POST') {
        return res.status(201).send({
          message: "Successfully added payment method"
        });
      }
    
    case '/me/deposit':
      if (httpRequest.method === 'POST') {
        return res.status(201).send({
          message: `Successfully deposited ${httpRequest.body.amount} into your wallet.`
        });
      }
    
    //====== Search Endpoints ======//
    case '/find-receiver':
      if (httpRequest.method === 'GET') {
        const { s: searchKeyword } = httpRequest.queryParams

        return res.send([{
          name: "Alison",
          profile_img: "",
          unique_code: "HMK3875",
          location: "New York",
          organisation: "Example Company"
        }]);
      }

    //====== Transaction Endpoints ======//
    case '/send-transaction':
      if (httpRequest.method === 'POST') {
        return res.send({
          message: `Payment to ${httpRequest.body.unique_code} successful.`
        });
      }
      
    default:
      unroutedRequestResponse({ httpRequest, res });
      break;
  }
}

// Temporary response helper
// Will replace with returning a 404 response object
function unroutedRequestResponse({ httpRequest, res }) {
  if (res && httpRequest) {
    return res.status(404).send(`<pre>Cannot ${httpRequest.method} ${httpRequest.path}</pre>`);
  }
}

module.exports = router;