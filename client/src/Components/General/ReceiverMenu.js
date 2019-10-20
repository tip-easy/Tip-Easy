import React, { useState } from 'react'
import { withRouter, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { logout } from '../../Actions/index';

const ReceiverMenu = (props) => {
  const [menuVisibility, setMenuVisibility] = useState(false)

  return (
    <>
      <div>
        <p 
          // In lieu of a dropdown menu using <select>. Dropdown experience will be created through absolute positioning in styling.
          onClick={() => setMenuVisibility(!menuVisibility)}
        >
          ReceiverMenu
        </p>

        { menuVisibility ?
          <div>
            {/* If user is currently in the wallet, there's no need to show the wallet button */}
            { props.location.pathname !== "/wallet" ?  
              <p><Link to="/wallet">Wallet</Link></p>
            : 
              null
            }
            <p><Link to="/withdraw">Withdraw Tips</Link></p>
            <p><Link to="/tip/select-amount">Send Tips</Link></p>
            <p><Link to="/user/settings">Settings</Link></p>
            <p onClick={() => props.logout()}>Logout</p>
          </div>
        :
          null
        }
        
      </div>
    </>
  )
};


const mapStateToProps = (state) => {
  return {
    UserReducer: state.UserReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logout
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ReceiverMenu));
