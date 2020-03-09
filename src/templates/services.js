import React, { Fragment } from "react";
import Layout from "../components/layout";
import PopularProgram from "../components/popularProgram";
import { graphql } from "gatsby";
import Head from "../components/Head";
import Form from "../components/form";

const ProgramTemplate = ({ data }) => {
	return (
		<Fragment>
			<Head title={data.frontmatter.title} />
			<div
				className=" gray-wrapper top-image"
				style={{ paddingBottom: `15rem`, backgroundAttachment: `fixed` }}
			>
				<div className="container inner text-center">
					<h1 className="page-title text-white">Program Detail</h1>
				</div>
			</div>
			<div className="wrapper light-wrapper">
				<div className="container inner">
					<div className="row">
						<div className="col-lg-7">
							<div className="blog grid grid-view">
								<div className="item post grid-sizer">
									<h2 className="post-title text-center">
										{data.frontmatter.title}
									</h2>
									<div dangerouslySetInnerHTML={{ __html: data.html }} />
								</div>
							</div>
						</div>
						<aside className="col-lg-5 col-md-5 sidebar">
							<PopularProgram />
							<Form />
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
