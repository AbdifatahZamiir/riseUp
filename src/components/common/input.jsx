import React from "react";

const Input = ({ name, label, error, ...rest }) => {
	return (
		<div className="form-group">
			{" "}
			<label htmlFor={name}>{label}</label>
			<input
				style={{ backgroundColor: `#fff` }}
				id={name}
				{...rest}
				name={name}
			/>
			{error && <div className="alert alert-danger mt-2">{error}</div>}
		</div>
	);
};

export default Input;
