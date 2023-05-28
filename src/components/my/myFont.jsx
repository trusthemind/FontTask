import React, { useEffect } from 'react';
import { tabsApi } from '../service/apiSlice';
import "./style.css"

function MyFont() {
  const { data, isLoading } = tabsApi.useGetFont_AQuery();
  useEffect(() => {
  }, [data])

  if (isLoading) {
    return <div id="loading"></div>;
  }

  return (
    <div>
      <h1>{data.type}</h1>
      <div id='fonts'>
        {data.content.map((item, index) => (
          <div id='cardItem' key={index}>
            <div id="item" style={{ backgroundColor: item.color }}><h1 id='abbr'>{item.abbr}</h1></div>
            <ul ><li>{item.label}</li></ul>
          </div>))}
      </div>
    </div>
  );
}
export default MyFont;