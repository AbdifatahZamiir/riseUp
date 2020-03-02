import React, { Fragment } from "react";
import Layout from "../components/layout";
import Img from "gatsby-image";
// import Popular from "../components/popularPost";
import { graphql } from "gatsby";
import Head from "../components/Head";

const ProgramTemplate = ({ data }) => {
	return (
		<Fragment>
			<Head title={data.frontmatter.title} />
			<div
				className="top-image wrapper image-wrapper bg-image page-title-wrapper inverse-text"
				style={{ paddingTop: `6rem` }}
			>
				<div className="container inner text-center">
					<h1 className="page-title text-white">Program Detail</h1>
				</div>
			</div>
			<div className="wrapper light-wrapper">
				<div className="container inner">
					<div className="row">
						<div className="col-lg-8">
							<div className="blog grid grid-view">
								<div className="row isotope">
									<div className="item post grid-sizer col-md-8 col-lg-12">
										<figure className="overlay overlay1 rounded mb-3">
											{!!data.frontmatter.featuredImg &&
											!!data.frontmatter.featuredImg.childImageSharp ? (
												<Img
													fluid={
														data.frontmatter.featuredImg.childImageSharp.fluid
													}
													alt={data.frontmatter.title}
												/>
											) : (
												<img
													src={data.frontmatter.featuredImg.publicURL}
													alt={data.frontmatter.title}
												/>
											)}
										</figure>
										<div className="category">
											<a href="/" className="badge badge-pill bg-meander">
												{data.frontmatter.tag}
											</a>
										</div>
										<h2 className="post-title">{data.frontmatter.title}</h2>
										<div dangerouslySetInnerHTML={{ __html: data.html }} />
									</div>
								</div>
							</div>
						</div>
						<aside className="col-lg-4 col-md-4 sidebar">
							{/* <Popular /> */}
						</aside>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
const ProgramPost = props => {
	return (
		<Layout>
			{/* <Head title={markdownRemark.frontmatter.title} /> */}
			<ProgramTemplate data={props.data.markdownRemark} />
		</Layout>
	);
};

export default ProgramPost;

export const pageQuery = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				description
				featuredImg {
					childImageSharp {
						fluid(maxWidth: 100) {
							...GatsbyImageSharpFluid
						}
					}
					publicURL
				}
			}
		}
	}
`;
