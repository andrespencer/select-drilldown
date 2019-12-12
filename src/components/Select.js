import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import './Select.scss'

class Select extends PureComponent {
	constructor (props) {
		super(props)

		this.optionItems = Object.keys(this.props.options).map((option) => 
  		<option
		  	key={this.props.options[option]["name_url"]}
		  	value={this.props.options[option]["name_url"]}
		  >
		  	{this.props.options[option]["name"]}
		  </option>
		)
	}

  render () {
    return (
    	<div className="Select">
	    	<label>
	    		{this.props.label}
		      <select>
					  {this.optionItems}
					</select>
				</label>
			</div>
    )
  } 
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.object.isRequired
}

export default Select