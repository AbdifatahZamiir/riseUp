import React from "react";
import "../styles/bootstrap.min.css";
import "../styles/style.css";
import "../styles/purple.css";
import Logo from "../images/logo.png";
import { Link } from "gatsby";
import SubscribeForm from "./subscribeForm";

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
										to="/projects"
										className="nocolor"
									>
										Projects
									</Link>
								</li>
								<li>
									<Link
										style={{ boxShadow: `none` }}
										to="/programs"
										className="nocolor"
									>
										Our Focus
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
								<SubscribeForm />
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
