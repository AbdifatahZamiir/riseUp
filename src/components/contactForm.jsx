import React,{ Fragment }  from "react";
import Joi from "joi-browser";
import Form from "./common/Form";
import http from "../utils/httpServices";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer,toast } from "react-toastify";

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

	doSubmit = async () => {
		// Call server
		console.log("Submitted");
		const GOOGLE_FORM_FIRSTNAME_ID = "entry.1359825617";
		const GOOGLE_FORM_LASTNAME_ID = "entry.773801231";
		const GOOGLE_FORM_EMAIL_ID = "emailAddress";
		const GOOGLE_FORM_NUMBER_ID = "entry.434388944";
		const GOOGLE_FORM_MESSAGE_ID = "entry.60582870";
		const GOOGLE_FORM_ACTION_URL =
			"https://docs.google.com/forms/u/0/d/e/1FAIpQLScIxK8iNrxXx2a1tPFoG-VFAEYHFc1U06r_1f-ZwT_M1doXsw/formResponse";
		const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

		const formData = new FormData();
		const { firstname, lastname, email, number, message } = this.state.data;
		formData.append(GOOGLE_FORM_FIRSTNAME_ID, firstname);
		formData.append(GOOGLE_FORM_LASTNAME_ID, lastname);
		formData.append(GOOGLE_FORM_EMAIL_ID, email);
		formData.append(GOOGLE_FORM_NUMBER_ID, number);
		formData.append(GOOGLE_FORM_MESSAGE_ID, message);

		try {
			await http.post(`${CORS_PROXY}${GOOGLE_FORM_ACTION_URL}`, formData);
            toast.success("Submitted successfully, thanks", {
                position: toast.POSITION.TOP_CENTER
            });
			this.setState({
				data: {
					firstname: "",
					lastname: "",
					email: "",
					number: "",
					message: ""
				}
			});
		} catch (ex) {
			if (ex.response && ex.response.status === 404)
				alert("something goes wrong");
		}
	};
	render() {
		return (
            <Fragment>
    		    <ToastContainer />
			    <div className="wrapper light-wrapper">
				<div className="container inner">
					<div className="row">
						<div className="col-md-12 col-lg-12 ">
							<h2 className="section-title text-center pb-5">Drop Us a Line</h2>
							<form onSubmit={this.handleSubmit} id="contact-form">
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
        </Fragment>
		);
	}
}

export default ContactForm;
