import React, {PureComponent} from 'react'
import Select from './Select'
import jsonResponse from '../structure'
import translations from '../translations'
import './App.scss'

class App extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      selectedRegion: null,
      selectedArea: null,
      selectedUnit: null,
      selectedTeam: null
    }
  }

  render () {
    return (
      <div className="App">
        <header className="Header">
          <img
            className ="Header__Logo"
            src={process.env.PUBLIC_URL + "/img/logo.png"}
            alt={translations.logoAlt} />
        </header>
        <main>
          {!!Object.keys(jsonResponse.regions).length &&
            <Select
              options={jsonResponse.regions}
              label={translations.selectRegion}
              default={translations.defaultSelectOption}
            />
          }
        </main>
      </div>
    )
  } 
}

export default App