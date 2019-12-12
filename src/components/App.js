import React, {PureComponent} from 'react'
import Select from './Select'
import jsonResponse from '../structure'
import translations from '../translations'
import './App.scss'

class App extends PureComponent {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.setNewState = this.setNewState.bind(this)

    this.state = {
      selectedRegion: "",
      selectedArea: "",
      selectedUnit: "",
      selectedTeam: ""
    }
  }

  handleChange (value, type) {
    switch (type) {
      case "selectedRegion":
        this.setState({
          selectedRegion: "",
          selectedArea: "",
          selectedUnit: "",
          selectedTeam: ""
        }, () => {
          this.setNewState(value, type)
        })
        break;
      case "selectedArea":
        this.setState({
          selectedArea: "",
          selectedUnit: "",
          selectedTeam: ""
        }, () => {
          this.setNewState(value, type)
        })
        break;
      case "selectedUnit":
        this.setState({
          selectedUnit: "",
          selectedTeam: ""
        }, () => {
          this.setNewState(value, type)
        })
        break;
      case "selectedTeam":
        this.setState({
          selectedTeam: ""
        }, () => {
          this.setNewState(value, type)
        }) 
        break;
      default:
    }
  }

  setNewState (value, type) {
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
          {!!this.state.selectedRegion && !!this.state.selectedArea && jsonResponse.regions[this.state.selectedRegion].areas[this.state.selectedArea] && !!Object.keys(jsonResponse.regions[this.state.selectedRegion].areas[this.state.selectedArea].units).length &&
            <Select
              options={jsonResponse.regions[this.state.selectedRegion].areas[this.state.selectedArea].units}
              label={translations.selectUnit}
              default={translations.defaultSelectOption}
              type="selectedUnit"
              onChange={this.handleChange}
            />
          }
          {!!this.state.selectedRegion && !!this.state.selectedArea && !!this.state.selectedUnit && jsonResponse.regions[this.state.selectedRegion].areas[this.state.selectedArea].units[this.state.selectedUnit] && !!Object.keys(jsonResponse.regions[this.state.selectedRegion].areas[this.state.selectedArea].units[this.state.selectedUnit].teams).length &&
            <Select
              options={jsonResponse.regions[this.state.selectedRegion].areas[this.state.selectedArea].units[this.state.selectedUnit].teams}
              label={translations.selectTeam}
              default={translations.defaultSelectOption}
              type="selectedTeam"
              onChange={this.handleChange}
            />
          }
        </main>
      </div>
    )
  } 
}

export default App