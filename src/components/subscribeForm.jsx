import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form";
import http from "../utils/httpServices";
import {toast} from 'react-toastify'
class SubscribeForm extends Form {
	state = {
		data: {
			email: ""
		},
		errors: {}
	};
	schema = {
		email: Joi.string()
			.email()
			.required()
	};

	doSubmit = async () => {
		// Call server
		const GOOGLE_FORM_EMAIL_ID = "emailAddress";
		const GOOGLE_FORM_ACTION_URL =
			"https://docs.google.com/forms/u/0/d/e/1FAIpQLSc_XxRbeTgN8nxP79qCO6iQOfrbfLmWTNbNvLmKAEL0izYHBA/formResponse";
		const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
			const formData = new FormData();
			const { email } = this.state.data;
			formData.append(GOOGLE_FORM_EMAIL_ID, email);
			try {
				await http.post(`${CORS_PROXY}${GOOGLE_FORM_ACTION_URL}`, formData);
				toast.success("Subscribed successfully");
				this.setState({
					data: {
						email: "",
					},
				
			 });
			} catch (ex) {
				if (ex.response && ex.response.status === 404)
					alert("something goes wrong");
			}
		};
	render() {
		return (
			<form
				onSubmit={this.handleSubmit}
				className="validate"

			>
				<div id="mc_embed_signup_scroll" className="input-group row">
					<div className="col-lg-9 col-md-9 col-sm-9 pr-4">
						{this.renderInput(
							"email",
							"Enter your email",
							"email",
							"email subscribe-input  form-control mb-0 mb-sm-0"
						)}
					</div>

					<div className="col-lg-3 col-md-3 col-sm-3 p-0">
						{this.renderButton("Join", "btn btn-default mr-0 mb-0 pull-right")}
					</div>
				</div>
			</form>
		);
	}
}

export default SubscribeForm;
