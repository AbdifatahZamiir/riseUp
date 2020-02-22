import React from "react";
import About3 from "../images/concept/concept22.png";
import { useStaticQuery, graphql } from "gatsby";

const About = () => {
	const allPosts = useStaticQuery(graphql`
		query {
			allMarkdownRemark(
				filter: { frontmatter: { templateKey: { eq: "about-page" } } }
			) {
				edges {
					node {
						id
						frontmatter {
							mainTitle
							subTitle
							subTitleTwo
						}
					}
				}
			}
		}
	`);
	return (
		<div className="wrapper white-wrapper">
			<div className="container inner">
				<div className="row align-items-center">
					<div className="col-lg-6 order-lg-2 text-center">
						<div>
							<figure>
								<img src={About3} alt="" />
							</figure>
							<div
								className="row counter counter-s position-absolute"
								// style="top: 45%; right: 8%;"
								style={{ top: `57%`, right: `23%` }}
							>
								<div className="col-md-10 text-center">
									<div className="box bg-white shadow">
										<h3>
											<span className="value">450</span>+
										</h3>
										<p>
											Successful <br className="d-md-none" />
											Start Ups
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="space30 d-none d-md-block d-lg-none"></div>
					{allPosts.allMarkdownRemark.edges.map(({ node }) => {
						const { id } = node;
						const { subTitle, subTitleTwo, mainTitle } = node.frontmatter;
						return (
							<div className="col-lg-6 pr-60 pr-md-15" key={id}>
								<h2 className="title-color color-gray">About Us</h2>
								<h3 className="display-3">{mainTitle}</h3>
								<div className="space10"></div>
								<p>{subTitle}</p>
								<p>{subTitleTwo}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default About;
