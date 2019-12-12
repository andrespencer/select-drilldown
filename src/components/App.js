import React, {PureComponent} from 'react'
import Select from './Select'
import jsonResponse from '../structure'
import translations from '../translations'
import './App.scss'

class App extends PureComponent {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)

    this.state = {
      selectedRegion: "",
      selectedArea: "",
      selectedUnit: "",
      selectedTeam: ""
    }
  }

  handleChange (value, type) {
    this.setState({
      [type]: value
    })
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
          {jsonResponse.regions && !!Object.keys(jsonResponse.regions).length &&
            <Select
              options={jsonResponse.regions}
              label={translations.selectRegion}
              default={translations.defaultSelectOption}
              type="selectedRegion"
              onChange={this.handleChange}
            />
          }
          {!!this.state.selectedRegion && jsonResponse.regions[this.state.selectedRegion] && !!Object.keys(jsonResponse.regions[this.state.selectedRegion].areas).length &&
            <Select
              options={jsonResponse.regions[this.state.selectedRegion].areas}
              label={translations.selectArea}
              default={translations.defaultSelectOption}
              type="selectedArea"
              onChange={this.handleChange}
            />
          }
        </main>
      </div>
    )
  } 
}

export default App