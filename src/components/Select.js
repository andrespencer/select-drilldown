import React, {PureComponent} from 'react'
import translations from '../translations'
import './Select.scss'

class Select extends PureComponent {
  render () {
    return (
    	<div className="Select">
	    	<label>
	    		{translations.selectArea}
		      <select>
					  <option value="volvo">Volvo</option>
					  <option value="saab">Saab</option>
					  <option value="mercedes">Mercedes</option>
					  <option value="audi">Audi</option>
					</select>
				</label>
			</div>
    )
  } 
}

export default Select