import logo from './logo.svg';
import './App.css';
import React from 'react';
import WebList from './WebList'
import Sdata from './Sdata';

console.log(Sdata);
function App() {
  return (
    <>
    <h2 className="heading">Top 5 Netflix Webseris 2021</h2>
    <div className="cards">
    {Sdata.map((val =>{
      return(
        <WebList
        imgsrc={val.imgsrc}
        category={val.category}
        title={val.title}
        link={val.link}
    />
      )
    }))}
    
    </div>
    </>
  );
}
export default App;

