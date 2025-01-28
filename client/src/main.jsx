// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import React from 'react'
// import App from './App.jsx'
// import { store } from './redux/store.js'
// import { Provider } from 'react-redux'


// console.log(store);
// createRoot(document.getElementById('root')).render(

    
//     // <Provider store={store}>
//     //   <App />
//     // </Provider>
//     <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
   
// );
 

import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { store } from "./redux/store.js"
import App from "./App.jsx"
import "./index.css"
import {  persistor } from "./redux/store.js"
import { PersistGate } from "redux-persist/integration/react"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
    <Provider store={store}>
      <App />
    </Provider>
    </PersistGate>
  </React.StrictMode>,
)

