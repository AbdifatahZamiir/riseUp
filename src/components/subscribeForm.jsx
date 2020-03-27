import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form";

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

	doSubmit = () => {
		// Call server
		console.log("Submitted");
	};
	render() {
		return (
			<form
				method="post"
				action=""
				id="mc-embedded-subscribe-form"
				name="mc-embedded-subscribe-form"
				className="validate"
				target="_blank"
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
