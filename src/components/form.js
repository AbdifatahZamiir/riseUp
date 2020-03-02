import React, { useState } from "react";
import axios from "axios";

const Form = () => {
	const [serverState, setServerState] = useState({
		submitting: false,
		status: null
	});
	const handleServerResponse = (ok, msg, form) => {
		setServerState({
			submitting: false,
			status: { ok, msg }
		});
		if (ok) {
			form.reset();
		}
	};
	const handleOnSubmit = e => {
		e.preventDefault();
		const form = e.target;
		setServerState({ submitting: true });
		axios({
			method: "post",
			url: "https://getform.io/f/7c39b55c-d056-4537-91e5-52203f3d1bfa",
			data: new FormData(form)
		})
			.then(r => {
				handleServerResponse(true, "Thanks!", form);
			})
			.catch(r => {
				handleServerResponse(false, r.response.data.error, form);
			});
	};
	return (
		<div className="wrapper light-wrapper">
			<div className="container inner">
				<div className="row">
					<div className="col-md-12 col-lg-12 ">
						<h2 className="section-title text-center">Drop Us a Line</h2>
						<div className="space30"></div>
						<form id="contact-form" method="POST" onSubmit={handleOnSubmit}>
							<div className="messages"></div>
							<div className="controls">
								<div className="form-row">
									<div className="col-md-6">
										<div className="form-group">
											<input
												style={{ backgroundColor: `#fff` }}
												id="form_name"
												type="text"
												name="name"
												className="form-control"
												placeholder="First Name *"
												required="required"
												data-error="First Name is required."
											/>
											<div className="help-block with-errors"></div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<input
												style={{ backgroundColor: `#fff` }}
												id="form_lastname"
												type="text"
												name="surname"
												className="form-control"
												placeholder="Last Name *"
												required="required"
												data-error="Last Name is required."
											/>
											<div className="help-block with-errors"></div>
										</div>
									</div>
								</div>
								<div className="form-row">
									<div className="col-md-6">
										<div className="form-group">
											<input
												style={{ backgroundColor: `#fff` }}
												id="form_email"
												type="email"
												name="email"
												className="form-control"
												placeholder="Email *"
												required="required"
												data-error="Valid email is required."
											/>
											<div className="help-block with-errors"></div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<input
												style={{ backgroundColor: `#fff` }}
												id="form_phone"
												type="tel"
												name="phone"
												className="form-control"
												placeholder="Phone"
											/>
											<div className="help-block with-errors"></div>
										</div>
									</div>
								</div>
								<div className="form-row">
									<div className="col-md-12">
										<div className="form-group">
											<textarea
												id="form_message"
												style={{ backgroundColor: `#fff` }}
												name="message"
												className="form-control"
												placeholder="Message *"
												rows="4"
												required="required"
												data-error="Message is required."
											></textarea>
											<div className="help-block with-errors"></div>
										</div>
									</div>
									<div className="col-md-12">
										<input
											type="submit"
											className="btn btn-send"
											value="Send message"
											disabled={serverState.submitting}
										/>
										{serverState.status && (
											<p className={!serverState.status.ok ? "errorMsg" : ""}>
												{serverState.status.msg}
											</p>
										)}
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
};

export default Form;
