import React, { useState, useEffect } from 'react';
import './App.css';
import MyFont from './components/my/myFont';
import BuyFont from './components/buy/BuyFont';
import { getTabs } from './components/service/actionGet';
import { connect } from 'react-redux';
import { getTabA, getTabB } from './components/service/actionGet';
import store from './store';
import { tabsApi } from './components/service/apiSlice';

function App({ onGetTabs, onGetTabA, onGetTabB }) {
  let [cardStatus, setCardStatus] = useState(true);
  const { data, error, isLoading } = tabsApi.useGetTabsQuery();

  useEffect(() => {
    onGetTabs();
  }, [data]);

  if (isLoading) {
    return <div id="loading"></div>;
  }

  if (error) {
    return <div id="error">Error: {error.status}</div>;
  }

  return (
    <div className="App">
      <div id="container">
        <div id="top">
          <h1>Please select one font</h1>
          <div id="chooser">
            <button onClick={() => { onGetTabA(); setCardStatus(true); }}>{data[0].label}</button>
            <button onClick={() => { onGetTabB(); setCardStatus(false); }}>{data[1].label}</button>
          </div>
        </div>
        <div id="card">
          {cardStatus ? <MyFont /> : <BuyFont />}
        </div>
      </div>
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
    onGetTabs: () => store.dispatch(getTabs()),
    onGetTabA: () => store.dispatch(getTabA()),
    onGetTabB: () => store.dispatch(getTabB())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
