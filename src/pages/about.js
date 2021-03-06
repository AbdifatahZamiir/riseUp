import React from "react";
import { graphql } from "gatsby";
import About3 from "../images/concept/concept22.png";
import Layout from "../components/layout";
import Team from "../components/team";
//import Services from "../components/services";
import Head from "../components/Head";
import Service from "../components/services";

const AboutPage = props => {
	const { data } = props;
	const allPosts = data.allMarkdownRemark.edges;

	return (
		<Layout>
			<Head title="About Us" />
			<div
				className=" gray-wrapper top-image"
				style={{ paddingBottom: `15rem`, backgroundAttachment: `fixed` }}
			>
				<div className="container inner text-center">
					<h1 className="page-title text-white">About Us</h1>
				</div>
			</div>
			{allPosts.map(({ node }) => {
				return (
					<div className="wrapper white-wrapper" key={node.id}>
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
								<div className="col-lg-6 pr-60 pr-md-15">
									<h2
										className="title-color color-gray"
										style={{ fontSize: "1rem", fontWeight: "700" }}
									>
										About Us
									</h2>
									<h3 className="display-3">{node.frontmatter.mainTitle}</h3>
									<div className="space10"></div>
									<div
										style={{ fontSize: "1rem" }}
										dangerouslySetInnerHTML={{ __html: node.html }}
									/>
									<p
										style={{
											color: "#d8681d",
											fontSize: "1rem",
											fontWeight: "700"
										}}
									>
										{node.frontmatter.subTitle}
									</p>
									<p
										style={{
											color: "#d8681d",
											fontSize: "1rem",
											fontWeight: "700"
										}}
									>
										{node.frontmatter.subTitleTwo}
									</p>
								</div>
							</div>
						</div>
					</div>
				);
			})}
			<Service serviceTitle="Our Focus" />
			<Team />
		</Layout>
	);
};

export default AboutPage;

export const query = graphql`
	query {
		allMarkdownRemark(
			filter: { frontmatter: { templateKey: { eq: "about-page" } } }
		) {
			edges {
				node {
					id
					html
					frontmatter {
						mainTitle
						subTitle
						subTitleTwo
					}
				}
			}
		}
	}
`;
