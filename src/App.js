import './App.css';
import * as utils from './utils.js'
import { useState} from 'react';

function App() {

  const [terms, ] = useState(utils.getTerms());


  const dayScale = 0.5;
  const marginPixels = 2;
  const orderScale = 25

  const renderTerms = () => {
    return terms.map((term, index) => {
      return (
        <>
        <div className={`term ${term.party}`} key={index} style={
          {
            top:`${orderScale*(Number(term.ordningsnummer)-1)}px`,
            left:`${Math.round(dayScale * utils.daysBetween("1991-09-30",term.from))}px`,
            width: `${Math.round(dayScale * utils.daysBetween(term.from, term.to) - marginPixels)}px`,
            height: `${orderScale - 1}px`
          }
        }>
          <span className="firstName">{term.firstName}, </span>
          <span className="lastName">{term.lastName} </span>
        </div>
        <div className={`term-info ${term.party}`} key={`info-${index}`} style={
          {
            top: `${orderScale*(Number(term.ordningsnummer))}px`,
            left:`${dayScale * utils.daysBetween("1991-09-30",term.from)}px`,
          }
        }>
          <span className="firstName">{term.firstName}, </span>
          <span className="lastName">{term.lastName} </span>
          <span className="lastName">({term.party}) </span>
        <br />
          <span className="from">{term.from}</span> - 
           <span className="to">{term.to}</span>
           <br />
          <img src={term.photoUrl} alt={`$term.firstName $term.lastName`}/>_ 
        </div>
        </>
      )
    })
  }

  return (
    <div className="App">
      {renderTerms()}
    </div>
  );
}

export default App;
