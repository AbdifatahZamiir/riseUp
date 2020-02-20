import React from "react";
import Map from "../images/art/map.png";
const ContactCom = () => {
	return (
		<div
			className="wrapper image-wrapper bg-auto no-overlay bg-image text-center"
			style={{ backgroundImage: `url(${Map})` }}
		>
			<div className="container inner">
				<div className="row">
					<div className="col-md-10 offset-md-1">
						<h3 className="display-3">
							Convinced yet? Let's make something great together.{" "}
							<br className="d-none d-lg-block" />
							If you got any questions, don't hesitate to get in touch with us.
						</h3>
						<div className="space30"></div>
						<a href="/" className="btn btn-l btn-default mb-0">
							Contact Us
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactCom;
