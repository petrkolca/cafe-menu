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
      <main>
        <section className="menu section">
          <div className="title">
            <h2>Our menu</h2>
            <div className="underline"></div>
          </div>
          <Categories />
          <Menu />
        </section>
      </main>
    </Fragment>
  )
}

export default App
