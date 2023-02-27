import React, { Fragment, useState } from 'react'
import { GlobalStyles } from './components/styles/GlobalStyles'

// components
import Menu from './components/Menu';
import Categories from './components/Categories';
import menuItemsJSON from './utils/meals-api';

const AllMenuCategory = ["all"];
const ExistingMenuCategories = new Set(menuItemsJSON.map((item) => {
  return (
    item.category
  )
}));
const AllMenuCategories = [...AllMenuCategory, ...ExistingMenuCategories]

console.log(AllMenuCategories);

function App() {
  const [menuItems, setMenuItems] = useState(menuItemsJSON);
  const [categories, setCategories] = useState([]);

  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItems(menuItemsJSON)
      return;
    }

    const newItems = menuItemsJSON.filter((item) => {
      return (
        // return items matching passed category parameter
        item.category === category
      )
    });

    setMenuItems(newItems);
  }

  return (
    <Fragment>
      <GlobalStyles />
      <main>
        <section className="menu section">
          <div className="title">
            <h2>Our menu</h2>
            <div className="underline"></div>
          </div>
          <Categories filterItems={filterItems} allCategories={AllMenuCategories} />
          <Menu items={menuItems} />
        </section>
      </main>
    </Fragment>
  )
}

export default App
