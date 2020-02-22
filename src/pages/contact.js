import React from "react";
import Telephone from "../images/icons/co-telephone.png";
import Email from "../images/icons/co-email-5.png";
import Gps from "../images/icons/ui-gps.png";

import Layout from "../components/layout";
import Head from "../components/Head";

const Contact = () => {
	return (
		<Layout>
			<Head title="Contact Us" />
			<div className="top-image wrapper image-wrapper bg-image page-title-wrapper inverse-text">
				<div className="container inner text-center">
					<h1 className="page-title text-white">Contact Us</h1>
				</div>
			</div>
			<div className="wrapper gray-wrapper">
				<div className="container inner">
					<div className="row text-center gutter-60">
						<div className="col-md-4">
							<div className="icon icon-svg mb-20">
								<img src={Gps} alt="" />
							</div>
							<p className="mb-0">
								Moon Street Light Avenue
								<br /> 14/05 Jupiter, JP 80630
							</p>
						</div>
						<div className="col-md-4">
							<div className="icon icon-svg mb-20">
								<img src={Telephone} alt="" />
							</div>
							<p className="mb-0">
								00 (123) 456 78 90
								<br /> 00 (987) 654 32 10{" "}
							</p>
						</div>
						<div className="col-md-4">
							<div className="icon icon-svg mb-20">
								<img src={Email} alt="" />
							</div>
							<p className="mb-0">
								<a className="nocolor" href="mailto:#">
									manager@email.com
								</a>
								<br />
								<a className="nocolor" href="mailto:#">
									asistant@email.com
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="wrapper light-wrapper">
				<div className="container inner">
					<div className="row">
						<div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2">
							<h2 className="section-title text-center">Drop Us a Line</h2>
							<p className="text-center">
								Nullam quis risus eget urna mollis ornare vel eu leo. Fusce
								dapibus, tellus ac cursus commodo, tortor mauris condimentum
								nibh, ut fermentum massa justo sit amet risus. Integer posuere
								erat. Praesent commodo cursus.
							</p>
							<div className="space30"></div>
							<form
								id="contact-form"
								method="post"
								action="http://themes.iki-bir.com/snowlake/contact/contact.php"
							>
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
											/>
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
		</Layout>
	);
};

export default Contact;
