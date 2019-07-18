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
			<input 
				className={inputClasses.join(' ')} 
				placeholder = {props.placeholder}
				{...props.elementConfig} 
				value={props.value} 
				onChange={props.onChange }
				onBlur={props.onBlur}
				required/>
			{validationError}
		</div>
	);
	
};

export default input;