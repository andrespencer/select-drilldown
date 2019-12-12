import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import './Select.scss'

class Select extends PureComponent {
	constructor (props) {
		super(props)

    this.onChange = this.onChange.bind(this)

		this.state = {
			value: ""
		}

		this.optionItems = Object.keys(this.props.options).map((option) => 
  		<option
		  	key={this.props.options[option]["name_url"]}
		  	value={option}
		  >
		  	{this.props.options[option]["name"]}
		  </option>
		)
	}

	onChange (e) {
		this.setState({
			value: e.target.value
		})
		this.props.onChange(e.target.value, this.props.type)
	}

  render () {
    return (
    	<div className="Select">
	    	<label>
	    		{this.props.label}
		      <select
		      	value={this.state.value}
		      	onChange={this.onChange}
		      >
		      	<option 
		      		key="default"
		      		value=""
		      	>
		      		{this.props.default}
		      	</option>
					  {this.optionItems}
					</select>
				</label>
			</div>
    )
  } 
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  default: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Select