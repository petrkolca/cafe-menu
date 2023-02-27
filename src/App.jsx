import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'

import { GlobalStyles } from './components/styles/GlobalStyles'

function App() {
  const [count, setCount] = useState(0)

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
