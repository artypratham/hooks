// import { useEffect, useMemo, useState } from 'react'

import { useEffect, useRef, useState } from "react";


// function App() {
//   const [exchangeData,setExchangeData] = useState({});
//   const [exchangeData2,setExchangeData2] = useState({});
//   const [bankData,setBankData] = useState({});


//   useEffect(() => {
//     setExchangeData({
//       returns: 100
//     });
//   }, []);


//   useEffect(() => {
//     setExchangeData2({
//       returns: 100
//     });
//   }, []);


//   useEffect(() => {
//     setTimeout(()=>{
//       setBankData({
//         income: 100
//       });
//     },5000)
//   }, []);


//   //this cryptoreturns code shouldnt run again after 5 seconds as no changes have been made to it
//   //changes were made to only the bank statement. So here we need useMemo to avoid the below expensive operation 
  
//   // const cryptoReturns = exchangeData.returns + exchangeData2.returns;




//   //so with useMemo 
//   const cryptoReturns = useMemo(() => { 
//     return exchangeData.returns + exchangeData2.returns;
//   },[exchangeData,exchangeData2])


//   const incomeTax = (cryptoReturns + bankData.income) * 0.3


//   return (
//     <>
//       hi , your income tax returns are {incomeTax}
//     </>
//   )
// }

// export default App










//useCallback

// import { useEffect, useMemo, useState,memo, useCallback } from 'react'


// function App() {
//   const [exchangeData,setExchangeData] = useState({});
//   const [exchangeData2,setExchangeData2] = useState({});
//   const [bankData,setBankData] = useState({});


//   useEffect(() => {
//     setExchangeData({
//       returns: 100
//     });
//   }, []);


//   useEffect(() => {
//     setExchangeData2({
//       returns: 100
//     });
//   }, []);


//   useEffect(() => {
//     setTimeout(()=>{
//       setBankData({
//         income: 100
//       });
//     },5000)
//   }, []);



//   //useCallback  is not about minimizing the amount of rerenders 
//   // It is if the function hasnt/doesnt need to change access renders
//   const calculateCryptoReturns = useCallback( function() {
//     return exchangeData.returns + exchangeData2.returns;
    
//   }, [ exchangeData2])



//   return (
//     <>
//     <Child calculateCryptoReturns={calculateCryptoReturns}/>
//       {/* hi , your income tax returns are {incomeTax} */}
//     </>
//   )
// }


// //memo is significatly different than useMemo()... memo skips the rerenders if the props are unchanged
// const Child = memo(function({calculateCryptoReturns}) {
//   console.log("crypto child re rendered")
//   return(
//     <div>
//       Hi your Crypto return are {calculateCryptoReturns()}
     
//     </div>
//   )
// })

// export default App










//useRef()

function App() {
  const [incomeTax, setIncomeTax] = useState(2000);
  const divRef = useRef();

 useEffect(() => {
  setTimeout( () => {
    console.log(divRef.current);
    divRef.current.innerHTML = 10
  },5000)
 }, [])

return(
  <div>
    Hi there, your income tax returns are <div ref={divRef}>{incomeTax} </div>
  </div>

)
}

export default App;























