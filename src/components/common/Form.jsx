import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";
import TextArea from "./textArea";

class Form extends Component {
	state = {
		data: {},
		errors: {}
	};
	validate = () => {
		const options = { abortEarly: false };
		const { error } = Joi.validate(this.state.data, this.schema, options);

		if (!error) return null;
		const errors = {};
		for (let item of error.details) errors[item.path[0]] = item.message;

		return errors;
	};
	validateProperty = ({ name, value }) => {
		const obj = { [name]: value };
		const schema = { [name]: this.schema[name] };
		const { error } = Joi.validate(obj, schema);
		return error ? error.details[0].message : null;
	};
	handleOnchange = ({ currentTarget: input }) => {
		const errors = { ...this.state.errors };
		const errorMessage = this.validateProperty(input);
		if (errorMessage) errors[input.name] = errorMessage;
		else delete errors[input.name];

		const data = { ...this.state.data };
		data[input.name] = input.value;
		this.setState({ data, errors });
	};
	handleSubmit = e => {
		e.preventDefault();
		const errors = this.validate();
		this.setState({ errors: errors || {} });
		if (errors) return;
		this.doSubmit();
	};

	renderInput(name, placeholder, type, classess) {
		const { data, errors } = this.state;

		return (
			<Input
				name={name}
				value={data[name]}
				onChange={this.handleOnchange}
				error={errors[name]}
				type={type}
				placeholder={placeholder}
				className={classess}
			/>
		);
	}
	renderTextArea(name, placeholder) {
		const { data } = this.state;

		return (
			<TextArea
				name={name}
				value={data[name]}
				onChange={this.handleOnchange}
				placeholder={placeholder}
			/>
		);
	}
	renderSelect(name, label, options) {
		const { data, errors } = this.state;
		return (
			<Select
				name={name}
				label={label}
				options={options}
				value={data[name]}
				error={errors[name]}
				onChange={this.handleOnchange}
			/>
		);
	}
	renderButton(label, classess) {
		return (
			<button disabled={this.validate()} type="submit" className={classess}>
				{label}
			</button>
		);
	}
}

export default Form;
