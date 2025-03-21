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
import CounterSlice from './demo-two/CounterSlice'
import { CounterComp } from './demo-two/CounterComp'
function App() {
  const [count, setCount] = useState(0)

  const store = configureStore({
    reducer: { color: UIColorReducer, font: UIFontSizeReducer }
  })

  const counterStore = configureStore({
    reducer: { numberCounter: CounterSlice.reducer }
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

      <Provider store={counterStore}>
        <CounterComp></CounterComp>
      </Provider>
    </>
  )
}

export default App
