import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { FaClock } from "react-icons/fa";

const Popular = () => {
	const allPosts = useStaticQuery(graphql`
		query {
			allMarkdownRemark(
				filter: { frontmatter: { templateKey: { eq: "event-post" } } }
				sort: { fields: frontmatter___publishedDate, order: DESC }
				limit: 4
			) {
				edges {
					node {
						id
						fields {
							slug
						}
						frontmatter {
							title
							publishedDate
							tag
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
		<div className="sidebox widget">
			<h3 className="widget-title">Popular Posts</h3>
			<ul className="image-list">
				{allPosts.allMarkdownRemark.edges.map(({ node }) => {
					const { id } = node;
					const { slug } = node.fields;
					const { featuredImg, title, publishedDate } = node.frontmatter;
					return (
						<li key={id}>
							<figure className="rounded">
								<Link to={slug}>
									{!!featuredImg && !!featuredImg.childImageSharp ? (
										<Img
											style={{ width: "100%", height: "70px" }}
											fluid={featuredImg.childImageSharp.fluid}
											alt={title}
										/>
									) : (
										<img
											style={{ width: "100%", height: "70px" }}
											src={featuredImg.publicURL}
											alt={title}
										/>
									)}
								</Link>
							</figure>
							<div className="post-content">
								<h6 className="post-title">
									{" "}
									<Link to={slug}>{title}</Link>
								</h6>
								<div className="meta">
									<span className="date">
										<i className="jam jam-clock">
											<FaClock />
										</i>
										{publishedDate}
									</span>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Popular;
