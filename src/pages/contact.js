import React from "react";
import Telephone from "../images/icons/co-telephone.png";
import Email from "../images/icons/co-email-5.png";
import Gps from "../images/icons/ui-gps.png";
import Layout from "../components/layout";
import Head from "../components/Head";
import Form from "../components/form";

const Contact = () => {
	return (
		<Layout>
			<Head title="Contact Us" />
			<div
				className="top-image wrapper image-wrapper bg-image page-title-wrapper"
				style={{ paddingTop: `6rem` }}
			>
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
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<Form />
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Contact;
