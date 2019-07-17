import React from 'react';
import './Input.css'
const input = (props) => {
	let validationError = null;
	const inputClasses =["InputElement"];
	if(props.invalid && props.touched) {
		inputClasses.push("Invalid");
		validationError = <p>Please enter a valid value!</p>;
	}
	return (
		<div className="Input">
			<label className="Label">{props.label}</label>
			<input 
				className={inputClasses.join(' ')} 
				{...props.elementConfig} 
				value={props.value} 
				onChange={props.changed}
				onBlur={props.onBlur}/>
			{validationError}
		</div>
	);
	
};

export default input;