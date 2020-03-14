import React from "react";
import "../styles/bootstrap.min.css";
import "../styles/style.css";
import "../styles/purple.css";
import Logo from "../images/logo.png";
import { Link } from "gatsby";

const Footer = () => {
	return (
		<footer className="dark-wrapper inverse-text">
			<div className="container inner">
				<div className="row">
					<div className="col-md-4 col-lg-3">
						<div className="widget">
							<img src={Logo} alt="" style={{ width: `130px` }} />

							<div className="space40"></div>
							<p>
								© 2020 RiseUp. <br className="d-none d-lg-block" />
								All rights reserved.
							</p>
						</div>
					</div>
					<div className="col-md-4 col-lg-3">
						<div className="widget">
							<h3 className="widget-title">Get in Touch</h3>
							<address>
								Head office: Moonshine St.
								<br className="d-none d-lg-block" /> Jigjiga – Expecting
								<br className="d-none d-lg-block" /> to expand to Addis Ababa.
							</address>
							<span style={{ boxShadow: `none` }}>info@riseup-et.com</span>
							<br /> +00 (123) 456 78 90
						</div>
					</div>
					<div className="col-md-4 col-lg-3">
						<div className="widget">
							<h3 className="widget-title">Learn More</h3>
							<ul className="list-unstyled">
								<li>
									<Link
										style={{ boxShadow: `none` }}
										to="/about"
										className="nocolor"
									>
										About Us
									</Link>
								</li>
								<li>
									<Link
										style={{ boxShadow: `none` }}
										to="/contact"
										className="nocolor"
									>
										Contact Us
									</Link>
								</li>
								<li>
									<Link
										style={{ boxShadow: `none` }}
										to="/events"
										className="nocolor"
									>
										Events
									</Link>
								</li>
								<li>
									<Link
										style={{ boxShadow: `none` }}
										to="/programs"
										className="nocolor"
									>
										Our Programs
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="space30 d-none d-md-block d-lg-none"></div>
					<div className="col-md-12 col-lg-3">
						<div className="widget">
							<h3 className="widget-title">Our Newsletter</h3>
							<p>
								Subscribe to our newsletter to get our news & deals delivered to
								your inbox!
							</p>
							<div className="space10"></div>
							<div className="newsletter-wrapper">
								<form
									method="post"
									action="https://formspree.io/abdifatahzammiir@gmail.com"
									id="mc-embedded-subscribe-form"
									name="mc-embedded-subscribe-form"
									className="validate"
									target="_blank"
								>
									<div id="mc_embed_signup_scroll" className="input-group">
										<input
											type="text"
											name="_gotcha"
											style={{ display: `none` }}
										/>
										<input
											type="email"
											name="_replyto"
											className="email subscribe-input  form-control mb-0 mr-2 mb-sm-0"
											id="mce-EMAIL"
											placeholder="Email Address"
											required
										/>
										<button
											type="submit"
											name="subscribe"
											id="mc-embedded-subscribe"
											className="btn btn-default mr-0 mb-0 pull-right"
										>
											Join
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
