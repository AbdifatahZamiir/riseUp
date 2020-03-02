import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql, Link } from "gatsby";

const Service = ({ serviceTitle }) => {
	const services = useStaticQuery(graphql`
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
	`);
	return (
		<div className="container mb-4">
			<h3 className="display-3 text-center mt-4 mb-4">
				{serviceTitle} <br className="d-none d-lg-block" />
			</h3>
			<div className="row text-center">
				{services.allMarkdownRemark.edges.map(({ node }) => {
					return (
						<div className="col-md-6 col-lg-4 text-center" key={node.id}>
							<div className="box bg-white shadow shadow-hover mb-4">
								<div
									className="icon icon-svg mb-4 text-center"
									style={{ width: "20%", marginLeft: `100px` }}
								>
									{!!node.frontmatter.featuredImg &&
									!!node.frontmatter.featuredImg.childImageSharp ? (
										<Img
											fluid={node.frontmatter.featuredImg.childImageSharp.fluid}
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
	);
};

export default Service;
