import React, {PureComponent} from 'react'
import Select from './Select'
import './App.scss'

class App extends PureComponent {
  render () {
    return (
      <div className="App">
        <header className="Header">
          <img className ="Header__Logo" src={process.env.PUBLIC_URL + "/img/logo.png"} alt="Postnord logo" />
        </header>
        <main>
          <Select />
        </main>
      </div>
    )
  } 
}

export default App