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
								Moonshine St.
								<br className="d-none d-lg-block" /> 14/05 Light City,
								<br className="d-none d-lg-block" /> London, United Kingdom
							</address>
							<a href="mailto:first.last@email.com">info@email.com</a>
							<br /> +00 (123) 456 78 90
						</div>
					</div>
					<div className="col-md-4 col-lg-3">
						<div className="widget">
							<h3 className="widget-title">Learn More</h3>
							<ul className="list-unstyled">
								<li>
									<a
										style={{ textDecoration: `none` }}
										href="/"
										className="nocolor"
									>
										About Us
									</a>
								</li>
								<li>
									<a href="/" className="nocolor">
										Our Story
									</a>
								</li>
								<li>
									<a href="/" className="nocolor">
										Projects
									</a>
								</li>
								<li>
									<Link to="/" className="nocolor">
										Contact Us
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
									action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&amp;id=b49ef47a9a"
									method="post"
									id="mc-embedded-subscribe-form"
									name="mc-embedded-subscribe-form"
									className="validate"
									target="_blank"
								>
									<div id="mc_embed_signup_scroll" className="input-group">
										<input
											type="email"
											name="EMAIL"
											className="email form-control mb-0 mr-2 mb-sm-0"
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
