import React, { Fragment, useState } from 'react'
import { GlobalStyles } from './components/styles/GlobalStyles'

// components
import Menu from './components/Menu';
import Categories from './components/Categories';
import menuItems from './utils/meals-api';


function App() {
  

  return (
    <Fragment>
      <GlobalStyles />
      <div className="App">
        <h1>Food Menu</h1>
      </div>
    </Fragment>
  )
}

export default App
