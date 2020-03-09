import React from "react";
import Img from "gatsby-image";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/Head";

const Services = props => {
	const { data } = props;
	const allPosts = data.allMarkdownRemark.edges;

	return (
		<Layout>
			<Head title="Programs" />
			<div
				className=" gray-wrapper top-image"
				style={{ paddingBottom: `15rem`, backgroundAttachment: `fixed` }}
			>
				<div className="container inner text-center">
					<h1 className="page-title text-white">Programs</h1>
				</div>
			</div>
			<div className="container mb-4">
				<h3 className="display-3 text-center mt-4 mb-4">Our Programs</h3>
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
									<Link className="btn" to={node.fields.slug}>
										Read More
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</div>
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
					fields {
						slug
					}
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
