import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponentOne from './demo-one/ComponentOne'
import { configureStore } from '@reduxjs/toolkit';
import UIColorReducer from './demo-one/UIColorReducer'
import { Provider } from 'react-redux'
import ComponentTwo from './demo-one/ComponentTwo'
import UIFontSizeReducer from './demo-one/UIFontSizeReducer'
import UnderStandUseRef from './demo-one/UnderStandUseRef'
function App() {
  const [count, setCount] = useState(0)

  const store = configureStore({
    reducer: { color: UIColorReducer, font: UIFontSizeReducer }
  })
  return (
    <>
      <Provider store={store}>

        <div className='box'>        <ComponentOne></ComponentOne>
        </div>
        <div className='box'>
          <ComponentTwo></ComponentTwo>

        </div>

      </Provider>
      <UnderStandUseRef></UnderStandUseRef>
    </>
  )
}

export default App
