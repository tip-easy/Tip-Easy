import React, { useState } from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { searchForTipReceiver, selectTipReceiver } from './../../../../Actions/TipReceiverActions';

const EnterCode = (props) => {
  const [code, setCode] = useState('')

  const changeHandler = (e) => {
    let input = e.target.value

    // Allows for deleting first character.
    if (input.length === 0) {
      setCode(e.target.value)
    } 

    // Ensures first two characters will be uppercased letters
    // No search DB calls take place until at least 3 characters are inputted
    else if (input.length <= 2) {
      input.slice(input.length-1).match(/[a-z]/i) ?
        setCode(e.target.value.toUpperCase())
          :
        setCode(code)
    } 

    // Ensures last four characters can only be numbers
    // Immediately makes search call to the DB to make for smooth searching experience.
    // Might stagger a bit more in the future (i.e. after 4 characters) to reduce number of DB calls.
    else if (input.length >= 3 && input.length <= 6 ) {
      let newDigit = e.target.value.slice(input.length-1, input.length);
      if (newDigit.match(/[0-9]/i)) {
        setCode(e.target.value)
        props.searchForTipReceiver(input, props.token)
      } else {
        setCode(code)
      }
    }
  }

  // Only allow form submission if all six characters have been filled out
  // For now, submit temporarily calls searchForTipReceiver. 
  // Might be deleted later, since there needn't be a submission if the staggered search of onChange works.
  const submitHandler = (e) => {
    e.preventDefault()
    if (code.length < 6) {
      return console.log('Make sure you fill out the six-digit code!')
    } else {
      props.searchForTipReceiver(code, props.token)
    }
  }

  const clickHandler = (code) => {
    props.selectTipReceiver(code)
    props.history.push('/payment-method')
  }

  return (
    <>
      <form 
        className="inputContainer"
        onSubmit={(e) => submitHandler(e)}  
      >
        <h2>Enter code for tip receiver</h2>
        {/* TO-DO: Research 'staggered' inputs (Primarily styling) */}
        <input 
          type="text" 
          placeholder="AA1234"
          onChange={(e) => changeHandler(e)}
          value={code}
        />
      </form>

      <div className="usersContainer">
        <div className="tipReceiver">
          <p>Select tip receiver below</p>
          
          {props.receiverSearchResultsArray.map((person, idx) => 
            <div key={idx} onClick={() => clickHandler(person.code)}>
              <img src={person.imgUrl} alt={person.imgAlt} />
              <>
                <p>
                  <span>{person.name} </span>
                  from
                  <span> {person.company}</span>
                </p>
                <p>
                  <span>{person.code}</span>
                </p>
              </>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    receiverSearchResultsArray: state.TipReceiverReducer.receiverSearchResultsArray,
    token: state.UserReducer.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    searchForTipReceiver, 
    selectTipReceiver,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterCode);
