import React from 'react';
import './Input.css'

const input = (props) => {
	let validationError = null;
	const inputClasses =["input-element"];
	if(props.inValid && props.touched) {
		inputClasses.push("invalid");
		validationError = props.errorMessage;
	}
	return (
		<div className="input">
			<input 
				className={inputClasses.join(' ')} 
				placeholder = {props.placeholder}
				{...props.elementConfig} 
				value={props.value} 
				onChange={props.onChange }
				onBlur={props.onBlur}
				required/>
			<div style={{marginLeft: '2.5rem', color:'red'}}>{ validationError }</div>
		</div>
	);
	
};

export default input;