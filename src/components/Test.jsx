// import React, { useEffect } from "react";

// const Test = () => {
//   const coins = {
//     H:"",
//     Q: "",
//     D: "",
//     N: "",
//     P: "",
//   };

//   const makeChange = (amount) => {
//     if (amount >= 50) {
//     const H = 50;
//     let value = amount;
//     let division = Math.floor(value / H);
//     value %= 50;
//     coins.H = division;
//     console.log(coins);
//     console.log(value);
//     }
//     if (amount >= 25 && amount < 50) {
//     const Q = 25;
//     let value = amount;
//     let division = Math.floor(value / Q);
//     value %= 25;
//     coins.Q = division;
//     console.log(coins);
//     console.log(value);
//     }
//     if (amount >= 10 && amount < 25) {
//     const D = 10;
//     let value = amount;
//     let division = Math.floor(value / D);
//     value %= 10;
//     coins.D = division;
//     console.log(coins);
//     console.log(value);
//     }
//     if (amount >= 1 && amount < 10) {
//     const N = 1;
//     let value = amount;
//     let division = Math.floor(value / N);
//     value %= 1;
//     coins.N = division;
//     console.log(coins);
//     console.log(value);
//     }
//     // if (amount >= 0 && amount < 1) {
//     // const Q = 0;
//     // let value = amount;
//     // let division = Math.floor(value / Q);
//     // value %= 0;
//     // coins.Q = division;
//     // console.log(coins);
//     // console.log(value);
//     // }
//   };
//   useEffect(() => {
//     makeChange(70);
//   }, []);

//   return <div>test</div>;
// };

// export default Test;
