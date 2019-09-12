import { getBalance, clearBalance } from './BalanceActions'
import { makeDeposit, setDepositAmount, clearDepositFromStore } from './DepositActions'
import { login } from './LoginActions';
import { addPaymentMethod, fetchPaymentMethods, fetchIndividualPaymentMethod, removePaymentMethod, clearPaymentMethodsFromStore } from './PaymentMethodActions';
import { register } from './RegistrationActions';
import { 
  setSelectedTipAmount,  clearSelectedTipAmountFromStore,
  setSelectedTipReceiverCode, clearSelectedTipReceiverCodeFromStore,
  setSelectedTipReceiver, clearSelectedTipReceiverFromStore,
  setSelectedPaymentMethodType, clearSelectedPaymentMethodTypeFromStore,
  setSelectedPaymentMethod, clearSelectedPaymentMethodFromStore,
  clearEntireTipStore
} from './TipActions';
import { searchForTipReceiver } from './TipReceiverActions';
import { sendTransaction, fetchTransactions, clearTransactionList } from './TransactionActions';
import { getUser, patchUserInfo, changePassword, deleteUser, logout } from './UserActions'
import { makeWithdrawal, setWithdrawalAmount, clearWithdrawalFromStore } from './WithdrawActions';

// Change around to API URL
export const URL = "http://localhost:7000";

export {
  getBalance,
  clearBalance,

  makeDeposit,
  setDepositAmount,
  clearDepositFromStore,
  
  login,

  addPaymentMethod,
  fetchPaymentMethods,
  fetchIndividualPaymentMethod,
  removePaymentMethod,
  clearPaymentMethodsFromStore,

  register,

  setSelectedTipAmount,
  clearSelectedTipAmountFromStore,
  setSelectedTipReceiverCode, 
  clearSelectedTipReceiverCodeFromStore,
  setSelectedTipReceiver, 
  clearSelectedTipReceiverFromStore,
  setSelectedPaymentMethodType, 
  clearSelectedPaymentMethodTypeFromStore,
  setSelectedPaymentMethod, 
  clearSelectedPaymentMethodFromStore,
  clearEntireTipStore,

  searchForTipReceiver,

  sendTransaction,
  fetchTransactions,
  clearTransactionList,

  getUser, 
  patchUserInfo, 
  changePassword, 
  deleteUser, 
  logout,

  makeWithdrawal, 
  setWithdrawalAmount, 
  clearWithdrawalFromStore,
};
