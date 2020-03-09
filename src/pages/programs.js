import React from "react";
import Img from "gatsby-image";
import { graphql } from "gatsby";
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

			<div class="wrapper white-wrapper">
				<div class="container inner">
					<div class="row align-items-center">
						{allPosts.map(({ node }) => {
							return (
								<div className="row mb-5" key={node.id}>
									<div class="col-lg-6 col-md-6 text-center">
										<div class="">
											{!!node.frontmatter.aboutImg &&
											!!node.frontmatter.aboutImg.childImageSharp ? (
												<Img
													fluid={
														node.frontmatter.aboutImg.childImageSharp.fluid
													}
													alt={node.frontmatter.title}
												/>
											) : (
												<img
													src={node.frontmatter.aboutImg.publicURL}
													alt={node.frontmatter.title}
												/>
											)}{" "}
										</div>
									</div>
									<div class="col-lg-6 col-md-6 pl-5">
										<h2
											class="title-color color-gray "
											style={{ fontSize: `1.5rem`, fontWeight: `600` }}
										>
											<span style={{ color: `#d8681d`, fontSize: `1.5rem` }}>
												#{" "}
											</span>{" "}
											{node.frontmatter.counter}
										</h2>
										<h3 class="display-3">{node.frontmatter.title}</h3>
										<div class="space20"></div>
										<div
											style={{ fontSize: `1rem`, letterSpacing: `.01rem` }}
											dangerouslySetInnerHTML={{ __html: node.html }}
										/>
									</div>
								</div>
							);
						})}
					</div>
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
			sort: { fields: frontmatter___counter, order: ASC }
		) {
			edges {
				node {
					id
					html
					fields {
						slug
					}
					frontmatter {
						title
						counter
						description
						aboutImg {
							childImageSharp {
								fluid(maxWidth: 800) {
									...GatsbyImageSharpFluid
								}
							}
							publicURL
						}
						aboutImg {
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
