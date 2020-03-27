import React from "react";

const TextArea = ({ name, label, ...rest }) => {
	return (
		<div className="form-group">
			<label htmlFor={name}>{label}</label>
			<textarea
				style={{ backgroundColor: `#fff` }}
				{...rest}
				name={name}
				className="form-control"
				id={name}
				rows="3"
			/>
		</div>
	);
};

export default TextArea;
