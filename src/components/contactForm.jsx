import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form";

class ContactForm extends Form {
	state = {
		data: {
			firstname: "",
			lastname: "",
			email: "",
			number: "",
			message: ""
		},
		errors: {}
	};

	schema = {
		firstname: Joi.string()
			.required()
			.label("First Name"),
		lastname: Joi.string()
			.required()
			.label("Last Name"),
		email: Joi.string()
			.email()
			.required()
			.label("Email Address"),
		number: Joi.number()
			.required()
			.label("Number"),
		message: Joi.string().label("Message")
	};

	doSubmit = () => {
		// Call server
		console.log("Submitted");
	};
	render() {
		return (
			<div className="wrapper light-wrapper">
				<div className="container inner">
					<div className="row">
						<div className="col-md-12 col-lg-12 ">
							<h2 className="section-title text-center pb-5">Drop Us a Line</h2>
							<form id="contact-form">
								<div className="messages"></div>
								<div className="controls">
									<div className="form-row">
										<div className="col-md-6">
											{this.renderInput(
												"firstname",
												"First Name *",
												"text",
												"form-control"
											)}
										</div>
										<div className="col-md-6">
											{this.renderInput(
												"lastname",
												"Last Name *",
												"text",
												"form-control"
											)}
										</div>
									</div>
									<div className="form-row">
										<div className="col-md-6">
											{this.renderInput(
												"email",
												"Email Address *",
												"email",
												"form-control"
											)}
										</div>
										<div className="col-md-6">
											{this.renderInput(
												"number",
												"Number *",
												"number",
												"form-control"
											)}
										</div>
									</div>
									<div className="form-row">
										<div className="col-md-12">
											{this.renderTextArea("message", "Message")}
										</div>
										<div className="col-md-12">
											{this.renderButton("Send", "btn btn-send")}
										</div>
									</div>
									<div className="form-row">
										<div className="col-md-12">
											<p className="text-muted">
												<strong>*</strong> These fields are required.
											</p>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactForm;
