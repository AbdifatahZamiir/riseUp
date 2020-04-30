import React, { Fragment } from "react";
import Layout from "../components/layout";
import Popular from "../components/popularPost";
import { graphql } from "gatsby";
import Head from "../components/Head";
import ExpansionPanel from "../components/expansion";

export const EventTemplate = ({ data }) => {
	return (
		<Fragment>
			<Head title={data.frontmatter.title} />
			<div
				className=" gray-wrapper top-image"
				style={{ paddingBottom: `15rem`, backgroundAttachment: `fixed` }}
			>
				<div className="container inner text-center">
					<h1 className="page-title text-white">Project Details</h1>
				</div>
			</div>
			<div className="wrapper white-wrapper">
				<div className="container inner">
					<div className="row">
						<div className="col-lg-8">
							<div className="blog grid grid-view">
								<div className="row isotope">
									<div className="item post grid-sizer col-md-8 col-lg-12">
										<figure className="overlay overlay1 rounded mb-3">
											<img
												style={{ width: "100%", height: "300px" }}
												src={data.frontmatter.featuredImg.publicURL}
												alt={data.frontmatter.title}
											/>
										</figure>
										<h2 className="post-title">{data.frontmatter.title}</h2>
										<div dangerouslySetInnerHTML={{ __html: data.html }} />
										<ExpansionPanel title={data.frontmatter.title} />
									</div>
								</div>
							</div>
						</div>
						<aside className="col-lg-4 col-md-4 sidebar">
							<Popular />
						</aside>
					</div>
				</div>
			</div>
		</Fragment>
	);
};
const EventPost = (props) => {
	return (
		<Layout>
			{/* <Head title={markdownRemark.frontmatter.title} /> */}
			<EventTemplate data={props.data.markdownRemark} />
		</Layout>
	);
};

export default EventPost;

export const pageQuery = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				publishedDate(formatString: "dddd, MMMM Do YYYY, h:mm:ss a")
				title
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
