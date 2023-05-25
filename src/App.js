import React, { useState, useEffect } from 'react';
import './App.css';
import MyFont from './components/my/myFont';
import BuyFont from './components/buy/BuyFont';
import { getTabs } from './components/service/actionGet';
import { connect } from 'react-redux';
import { getTabA, getTabB } from './components/service/actionGet';
import store from './store';

function App({ onGetTabs, onGetTabA, onGetTabB, tabs }) {
  let [cardStatus, setCardStatus] = useState(true);

  useEffect(() => {
    onGetTabs();
    console.log(getTabs());
  }, []);


  function Button() {
    return (
      <button onClick={() => console.log(store.getState())}>click</button>
    );
  }

  return (
    <div className="App">
      <div id="container">
        <div id="top">
          <h1>Please select one font</h1>
          <div id="chooser">
            <button onClick={() => { onGetTabA(); setCardStatus(true); }}>my</button>
            <button onClick={() => { onGetTabB(); setCardStatus(false); }}>buy</button>
          </div>
        </div>
        <div id="card">
          {cardStatus ? <MyFont /> : <BuyFont />}
        </div>
      </div>
      <Button />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tabs: state,
    tabs_a: state,
    tabs_b: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetTabs: () => dispatch(getTabs()),
    onGetTabA: () => dispatch(getTabA()),
    onGetTabB: () => dispatch(getTabB())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
