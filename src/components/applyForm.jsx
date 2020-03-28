import React from "react";
import Joi from "joi-browser";

import Form from "./common/Form";
import {
	getGender,
	getAges,
	getEducationLevel,
	getSectors,
	getStages
} from "../utils/selectionService";

class ApplyForm extends Form {
	state = {
		data: {
			applicantinfo: "",
			fullname: "",
			mobile: "",
			email: "",
			genderId: "",
			ageId: "",
			educationLevelId: "",
			location: "",
			businessidea: "",
			aboutyourbusiness: "",
			keycustomer: "",
			definecustomer: "",
			solution: "",
			stageId: "",
			capital: "",
			sectorId: "",
			sustainability: "",
			motivation: "",
			whatmotivateyou: "",
			hearaboutus: "",
			confirm: "",
			agree: ""
		},
		gender: [],
		ages: [],
		educationLevel: [],
		stages: [],
		sectors: [],
		errors: {}
	};

	componentDidMount() {
		const genders = getGender();
		const ages = getAges();
		const educationLevel = getEducationLevel();
		const stages = getStages();
		const sectors = getSectors();
		this.setState({
			gender: genders,
			ages: ages,
			educationLevel: educationLevel,
			stages: stages,
			sectors: sectors
		});
	}

	schema = {
		applicantinfo: Joi.string().label("Applicant information"),
		fullname: Joi.string()
			.required()
			.label("Full Name"),
		mobile: Joi.number()
			.required()
			.label("Mobile"),
		email: Joi.string()
			.email()
			.required()
			.label("Email Address"),
		genderId: Joi.string()
			.required()
			.label("Gender"),
		ageId: Joi.string()
			.required()
			.label("Age"),
		educationLevelId: Joi.string()
			.required()
			.label("Education Level"),
		location: Joi.string()
			.required()
			.label("Location"),
		businessidea: Joi.string()
			.required()
			.label("Business Idea"),
		aboutyourbusiness: Joi.string().label(
			"Tell us about your business idea (not more than 500 words) Tell us about what the idea/project is about, who is the target and the impact?"
		),
		keycustomer: Joi.string()
			.required()
			.label(
				"Key customer segments. Who are the customers who will pay for your product or service? "
			),
		definecustomer: Joi.string()
			.required()
			.label("Define the customers’ pain, problem, or unmet need? "),
		solution: Joi.string()
			.required()
			.label("Solution (how will you solve the customer's problem?) "),
		stageId: Joi.string()
			.required()
			.label("Is your business at the ideation stage? "),
		capital: Joi.string()
			.required()
			.label("What is your estimated startup capital? Please indicate in ETB?"),
		sectorId: Joi.string()
			.required()
			.label("Business sector?"),
		sustainability: Joi.string()
			.required()
			.label("How is the sustainability of your business idea? "),
		motivation: Joi.string()
			.required()
			.label("Motivation"),
		whatmotivateyou: Joi.string()
			.required()
			.label(
				"Describe what motivates you to address the problem you want to solve."
			),
		hearaboutus: Joi.string()
			.required()
			.label("Where did you hear about us?"),
		confirm: Joi.string()
			.required()
			.label("Confirmation"),
		agree: Joi.string()
			.required()
			.label("I agree that the information herein is true and correct")
	};

	doSubmit = () => {
		// Call server
		console.log("Submitted");
	};
	render() {
		return (
			<div className="wrapper light-wrapper">
				<div className="container inner">
					<div className="row p-5">
						<div className="col-md-12 col-lg-12 ">
							<form id="contact-form">
								<div className="messages"></div>
								<div className="controls">
									<div className="form-row">
										<div className="col-md-6">
											{this.renderInput(
												"applicantinfo",
												"Applicant Information(optional)",
												"text",
												"form-control"
											)}
										</div>
										<div className="col-md-6">
											{this.renderInput(
												"fullname",
												"Full Name *",
												"text",
												"form-control"
											)}
										</div>
									</div>
									<div className="form-row">
										<div className="col-md-6">
											{this.renderInput(
												"mobile",
												"Mobile *",
												"text",
												"form-control"
											)}
										</div>
										<div className="col-md-6">
											{this.renderInput(
												"email",
												"Email *",
												"email",
												"form-control"
											)}
										</div>
										<div className="col-md-6">
											{this.renderSelect(
												"genderId",
												"Gender",
												this.state.gender
											)}
										</div>
										<div className="col-md-6">
											{this.renderSelect("ageId", "Age", this.state.ages)}
										</div>
										<div className="col-md-6">
											{this.renderSelect(
												"educationLevelId",
												"Education Level",
												this.state.educationLevel
											)}
										</div>
										<div className="col-md-6">
											{this.renderInput(
												"location",
												"Location *",
												"text",
												"form-control"
											)}
										</div>
									</div>
									<div className="form-row">
										<div className="col-md-12">
											{this.renderTextArea(
												"businessidea",
												"Please provide a brief description of your business or idea. *"
											)}
										</div>
										<div className="col-md-12">
											{this.renderTextArea(
												"aboutyourbusiness",
												"Tell us about your business idea (not more than 500 words) Tell us about what the idea/project is about, who is the target and the impact?*"
											)}
										</div>
										<div className="col-md-12">
											{this.renderTextArea(
												"keycustomer",
												"Key customer segments. Who are the customers who will pay for your product or service? "
											)}
										</div>
										<div className="col-md-12">
											{this.renderTextArea(
												"definecustomer",
												"Define the customers’ pain, problem, or unmet need? "
											)}
										</div>
										<div className="col-md-12">
											{this.renderTextArea(
												"solution",
												"Solution (how will you solve the customer's problem?) "
											)}
										</div>
										<div className="col-md-12">
											{this.renderSelect(
												"stageId",
												"Is your business at the ideation stage? ",
												this.state.stages
											)}
										</div>
										<div className="col-md-12">
											{this.renderInput(
												"capital",
												"What is your estimated startup capital? Please indicate in ETB? *",
												"text",
												"form-control"
											)}
										</div>
										<div className="col-md-12">
											{this.renderSelect(
												"sectorId",
												"Business sector?",
												this.state.sectors
											)}
										</div>
										<div className="col-md-12">
											{this.renderInput(
												"sustainability",
												"How is the sustainability of your business idea?  *",
												"text",
												"form-control"
											)}
										</div>
										<div className="col-md-12">
											{this.renderTextArea(
												"motivation",
												"Motivation(optional) "
											)}
										</div>
										<div className="col-md-12">
											{this.renderTextArea(
												"whatmotivateyou",
												"Describe what motivates you to address the problem you want to solve."
											)}
										</div>
										<div className="col-md-12">
											{this.renderInput(
												"hearaboutus",
												"Where did you hear about us? *",
												"text",
												"form-control"
											)}
										</div>
										<div className="col-md-12">
											{this.renderTextArea(
												"confirm",
												"Confirmation(optional) "
											)}
										</div>
										<div className="col-md-12">
											{this.renderCheckbox(
												"I agree that the information herein is true and correct",
												"checkbox"
											)}
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

export default ApplyForm;
