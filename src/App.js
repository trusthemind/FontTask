import React, { useState, useEffect } from 'react';
import './App.css';
import MyFont from './components/my/myFont';
import BuyFont from './components/buy/BuyFont';
import { connect } from 'react-redux';

// Action creator
const getTabs = () => {
  return {
    type: 'getTabs'
    // Add any necessary payload if required
  };
};
const getTabA = () => {
  return {
    type: 'getTabA'
    // Add any necessary payload if required
  };
};

const getTabB = () => {
  return {
    type: 'getTabB'
    // Add any necessary payload if required
  };
};

function App({ tabs, onGetTabs, onGetTabA, onGetTabB }) {
  let [cardStatus, setCardStatus] = useState(true);

  useEffect(() => {
    onGetTabs();
  }, []);

  return (
    <div className="App">
      <div id='container'>
        <div id='top'>
          <h1>Please select one font</h1>
          <div id='chooser'>
            <button onClick={() => { onGetTabA(); setCardStatus(true); }}>my</button>
            <button onClick={() => { onGetTabB(); setCardStatus(false); }}>buy</button>
          </div>
        </div>
        <div id='card'>
          {cardStatus ? <MyFont /> : <BuyFont />}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tabs: state.tabs
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetTabs: () => dispatch(getTabs()),
    onGetTabA: () => dispatch(getTabA()),
    onGetTabB: () => dispatch(getTabB()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
