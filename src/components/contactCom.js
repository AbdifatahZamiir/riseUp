import React from "react";
import Map from "../images/art/map.png";
import { Link } from "gatsby";
const ContactCom = ({ contactTitle }) => {
	return (
		<div
			className="wrapper image-wrapper bg-auto no-overlay bg-image text-center"
			style={{ backgroundImage: `url(${Map})` }}
		>
			<div className="container inner">
				<div className="row">
					<div className="col-md-10 offset-md-1">
						<h3 className="display-3">
							{contactTitle} <br className="d-none d-lg-block" />
						</h3>
						<div className="space30"></div>
						<Link to="/contact" className="btn btn-l btn-default mb-0">
							Contact Us
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactCom;
