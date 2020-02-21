import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Slider from "../components/slider";

const Services = props => {
	const { data } = props;
	const allPosts = data.allMarkdownRemark.edges;

	return (
		<Layout>
			<div className="top-image wrapper image-wrapper bg-image page-title-wrapper inverse-text">
				<div className="container inner text-center">
					<h1 className="page-title text-white">Programs</h1>
				</div>
			</div>
			<div className="container mb-4">
				<h3 className="display-3 text-center mt-4 mb-4">
					The full service we are offering is specifically{" "}
					<br className="d-none d-lg-block" />
					designed to meet your business needs.
				</h3>
				<div className="row text-center">
					{allPosts.map(({ node }) => {
						return (
							<div className="col-md-6 col-lg-4 text-center" key={node.id}>
								<div className="box bg-white shadow shadow-hover mb-4">
									<div
										className="icon icon-svg mb-4 text-center"
										style={{
											width: "20%",
											marginLeft: `6em`,
											textAlign: `center`
										}}
									>
										{!!node.frontmatter.featuredImg &&
										!!node.frontmatter.featuredImg.childImageSharp ? (
											<Img
												fluid={
													node.frontmatter.featuredImg.childImageSharp.fluid
												}
												alt={node.frontmatter.title}
											/>
										) : (
											<img
												src={node.frontmatter.featuredImg.publicURL}
												alt={node.frontmatter.title}
											/>
										)}{" "}
									</div>
									<h5>{node.frontmatter.title}</h5>
									<p>{node.frontmatter.description}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<Slider />
		</Layout>
	);
};

export default Services;

export const query = graphql`
	query {
		allMarkdownRemark(
			filter: { frontmatter: { templateKey: { eq: "services" } } }
			sort: { fields: frontmatter___publishedDate, order: DESC }
		) {
			edges {
				node {
					id
					frontmatter {
						title
						description
						featuredImg {
							childImageSharp {
								fluid(maxWidth: 800) {
									...GatsbyImageSharpFluid
								}
							}
							publicURL
						}
					}
				}
			}
		}
	}
`;
